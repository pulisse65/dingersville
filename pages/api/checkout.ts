import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { byId } from '@/lib/products'
import { getVariantForSelection, hasVariantSelectionOptions } from '@/lib/product-variants'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set. Configure it in Netlify project settings → Environment variables.')
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-10-28.acacia',
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

  const { items } = req.body as {
    items?: Array<{ productId: string; size: string; color?: string; variantId?: string; qty: number }>
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'items array is required' })
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []
  const checkoutItems: Array<{ productId: string; size: string; color: string; variantId: string; qty: number }> = []
  for (const item of items) {
    if (!item.productId || !item.size || (item.color !== undefined && typeof item.color !== 'string') ||
      (item.variantId !== undefined && typeof item.variantId !== 'string') ||
      typeof item.qty !== 'number' || !Number.isInteger(item.qty)) {
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

    const color = item.color ?? product.colors?.[0] ?? product.color
    if (!product.colors?.includes(color)) {
      return res.status(400).json({ error: `invalid color ${color} for ${item.productId}` })
    }

    const selectedVariant = getVariantForSelection(product.variants, item.size, color)
    if (hasVariantSelectionOptions(product.variants) && !selectedVariant) {
      return res.status(400).json({ error: `unavailable size/color combination for ${item.productId}` })
    }
    const variant = selectedVariant ?? product.variants?.find(option => option.id === product.printifyVariantId)
    const variantId = variant?.id ?? product.printifyVariantId
    if (item.variantId && item.variantId !== variantId) {
      return res.status(400).json({ error: `variant does not match selected options for ${item.productId}` })
    }
    checkoutItems.push({ ...item, color, variantId })

    lineItems.push({
      price_data: {
        currency: product.currency,
        product_data: {
          name: `${product.name} — ${item.size}${color !== 'Multi' ? ` / ${color}` : ''}`,
          metadata: { productId: product.id, variantId },
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
      items: JSON.stringify(checkoutItems.map(item => ({ p: item.productId, v: item.variantId, q: item.qty }))),
    },
  })

  return res.status(200).json({ url: session.url })
}
