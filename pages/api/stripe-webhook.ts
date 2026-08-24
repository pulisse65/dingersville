import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { byId } from '@/lib/products'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set. Configure it in Netlify project settings -> Environment variables.')
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-10-28.acacia',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

// In-memory dedup across invocations within the same warm function instance.
// Prevents double-fulfillment on retries that arrive while the instance is alive.
let lastProcessedSessionId: string | null = null

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

  // Read raw body as a string buffer so constructEvent can verify the signature
  const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err instanceof Error ? err.message : String(err))
    return res.status(400).json({ error: 'Webhook signature verification failed' })
  }

  // Idempotency: skip already-processed sessions (in-memory, per warm instance)
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const sessionId = session.id
    if (sessionId === lastProcessedSessionId) {
      console.log('Duplicate session, skipping:', sessionId)
      return res.status(200).json({ received: true })
    }
    lastProcessedSessionId = sessionId
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const items: Array<{ productId: string; size: string; qty: number }> = []
    try {
      items.push(...JSON.parse(session.metadata?.items || '[]'))
    } catch {
      return res.status(200).json({ received: true })
    }

    // Re-validate every item before dispatch
    const validatedItems = items.filter((i) => {
      if (!i.productId || !i.size || typeof i.qty !== 'number' || !Number.isInteger(i.qty)) return false
      if (i.qty < 1 || i.qty > 10) return false
      const product = byId(i.productId)
      if (!product) return false
      if (!product.sizes.includes(i.size)) return false
      return true
    })

    if (validatedItems.length === 0) {
      console.error('No valid items to fulfill for session:', session.id)
      return res.status(200).json({ received: true })
    }

    const orderPayload = {
      order_id: session.id,
      email: session.customer_details?.email,
      shipping: session.shipping_details,
      items: validatedItems.map((i) => {
        const product = byId(i.productId)!
        return {
          productId: i.productId,
          size: i.size,
          qty: i.qty,
          name: product.name,
          priceCents: product.priceCents,
          variant_id: product.printifyVariantId,
        }
      }),
      subtotalCents: session.amount_total || 0,
      currency: session.currency,
      created: session.created,
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (n8nUrl) {
      try {
        const response = await fetch(n8nUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderPayload),
        })
        if (!response.ok) {
          console.error('Failed to dispatch fulfillment to n8n:', response.status)
          // Return non-2xx so Stripe can retry
          return res.status(500).json({ error: 'fulfillment dispatch failed' })
        }
        console.log('Fulfillment dispatched for session:', session.id)
      } catch (err) {
        console.error('Failed to POST to n8n:', err)
        return res.status(500).json({ error: 'fulfillment dispatch failed' })
      }
    }
  }

  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent
    console.error('Payment failed for intent:', paymentIntent.id)
  }

  return res.status(200).json({ received: true })
}
