export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  priceCents: number
  currency: 'usd'
  color: string
  sizes: string[]
  image: string
  category: 'polos' | 'hats' | 'shorts'
}

export const PRODUCTS: Product[] = [
  {
    id: 'polo-001',
    name: 'Dinger Polo',
    tagline: "The polo that doesn't take itself too seriously",
    description: 'Soft, breathable polo with a relaxed fit. Orange body, white collar and cuffs. Three buttons, two pockets, and a look that says you care about your swing but not fashion week.',
    priceCents: 7500,
    currency: 'usd',
    color: 'Orange',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/polo1/800/1000',
    category: 'polos',
  },
  {
    id: 'hat-001',
    name: 'Dinger Cap',
    tagline: 'Your round, your look',
    description: 'Structured 6-panel cap in teal with the Dingersville logo on the front. Adjustable snapback. Built for sun protection and good looks on the first tee.',
    priceCents: 3500,
    currency: 'usd',
    color: 'Teal',
    sizes: ['One Size'],
    image: 'https://picsum.photos/seed/hat1/800/1000',
    category: 'hats',
  },
  {
    id: 'short-001',
    name: 'Dinger Short',
    tagline: 'Freedom to move, style to match',
    description: 'Tailored short with elastic waist, zip pocket, and a relaxed hem. Purple with deep green side panels. Fits like it should — not too tight, not baggy.',
    priceCents: 6500,
    currency: 'usd',
    color: 'Purple',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/short1/800/1000',
    category: 'shorts',
  },
  {
    id: 'polo-002',
    name: 'Dinger Long-Sleeve',
    tagline: 'For early mornings and late evenings',
    description: 'Long-sleeve polo in deep green. Woven fabric, mock collar, side vents. The piece you reach for when the morning frost hasn\'t burned off yet.',
    priceCents: 8500,
    currency: 'usd',
    color: 'Deep Green',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/longsleeve1/800/1000',
    category: 'polos',
  },
]

export const byId = (id: string) => PRODUCTS.find(p => p.id === id)
