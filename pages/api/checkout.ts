import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { byId } from '@/lib/products'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil-gepa',
})

export const config = {
  api: {
    bodyParser: true,
  },
}

function getOrigin(req: NextApiRequest): string {
  const h = req.headers
  if (h?.referer) {
    try {
      const url = new URL(h.referer)
      return url.origin
    } catch {
      // fall through
    }
  }
  if (h?.origin) return h.origin
  return `https://${req.headers.host || 'localhost'}`
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { items } = req.body as { items?: Array<{ productId: string; size: string; qty: number }> }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items array is required' })
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []
  for (const item of items) {
    if (!item.productId || !item.size || typeof item.qty !== 'number' || !Number.isInteger(item.qty)) {
      return res.status(400).json({ error: `invalid item: ${JSON.stringify(item)}` })
    }
    if (item.qty < 1 || item.qty > 10) {
      return res.status(400).json({ error: `qty must be 1..10, got ${item.qty}` })
    }
    const product = byId(item.productId)
    if (!product) {
      return res.status(400).json({ error: `unknown product: ${item.productId}` })
    }
    if (!product.sizes.includes(item.size)) {
      return res.status(400).json({ error: `invalid size ${item.size} for ${item.productId}` })
    }
    lineItems.push({
      price_data: {
        currency: product.currency,
        product_data: {
          name: `${product.name} — ${item.size}`,
          metadata: { productId: product.id },
        },
        unit_amount: product.priceCents,
      },
      quantity: item.qty,
    })
  }

  if (lineItems.length === 0) {
    return res.status(400).json({ error: 'no valid line items' })
  }

  const origin = getOrigin(req)
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
    shipping_address_collection: { allowed_countries: ['US'] },
    automatic_tax: { enabled: true },
    metadata: {
      items: JSON.stringify(items.map(i => ({ productId: i.productId, size: i.size, qty: i.qty }))),
    },
  })

  return res.status(200).json({ url: session.url })
}
