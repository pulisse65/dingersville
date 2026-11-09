type FitProduct = {
  category: string
  sizes: string[]
  description: string
}

const APPAREL_CATEGORIES = new Set(['polos', 'hats', 'shorts', 'tees', 'hoodies'])

export function fitGuidance(product: FitProduct): string | null {
  if (!APPAREL_CATEGORIES.has(product.category)) return null

  const description = String(product.description || '').toLowerCase()
  const sizes = Array.isArray(product.sizes) ? product.sizes : []

  if (product.category === 'hats' && sizes.length === 1 && sizes[0] === 'One Size') {
    if (/adjustable\s+snapback/.test(description)) {
      return 'One size with an adjustable snapback closure.'
    }
    if (/relaxed\s+fit/.test(description)) {
      return 'One size with a relaxed-fit style.'
    }
    return 'One size; check the product details for its closure and adjustability.'
  }

  if (/form-fitting/.test(description)) {
    return 'Form-fitting style; the product details note stretch fabric.'
  }

  if (/relaxed\s+(?:fit|silhouette)/.test(description)) {
    return 'Relaxed fit, designed for easy movement and layering.'
  }

  return 'Fit varies by style. For exact garment measurements, contact us before ordering.'
}
