import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { byId } from '@/lib/products'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil-gepa',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.warn('STRIPE_WEBHOOK_SECRET not set — skipping webhook handler')
    return res.status(200).json({ received: true })
  }

  const signature = req.headers['stripe-signature'] as string
  if (!signature) {
    return res.status(400).json({ error: 'missing stripe-signature header' })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'unknown error'
    console.error('Webhook signature verification failed:', message)
    return res.status(400).json({ error: `signature verification failed: ${message}` })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const items: Array<{ productId: string; size: string; qty: number }> = []
    try {
      items.push(...JSON.parse(session.metadata?.items || '[]'))
    } catch {
      return res.status(200).json({ received: true })
    }

    const orderPayload = {
      order_id: session.id,
      email: session.customer_details?.email,
      shipping: session.shipping_details,
      items: items.filter(i => byId(i.productId)).map(i => ({
        productId: i.productId,
        size: i.size,
        qty: i.qty,
        name: byId(i.productId)!.name,
        priceCents: byId(i.productId)!.priceCents,
      })),
      subtotalCents: session.amount_total || 0,
      currency: session.currency,
      created: session.created,
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (n8nUrl) {
      try {
        await fetch(n8nUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderPayload),
        })
      } catch (err) {
        console.error('Failed to POST to n8n:', err)
      }
    }

    console.log('Fulfillment dispatched for session:', session.id)
  }

  return res.status(200).json({ received: true })
}
