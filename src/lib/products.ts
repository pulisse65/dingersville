import { PRINTIFY_PRODUCTS, byPrintifyId } from './printify'

// Stable product IDs — map to Printify product IDs
// Our 4 core products (renamed/retailed from Printify) + 6 additional Printify picks
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
  category: 'polos' | 'hats' | 'shorts' | 'tees' | 'hoodies' | 'accessories'
  // Printify fulfillment data
  printifyId: string
  printifyVariantId: string
  sku: string
  costCents: number
  images?: Array<{ src: string; variantIds: number[] }>
  colors?: string[]
  variants?: Array<{ id: string; title: string; sku: string; priceCents: number; color: string }>
}

// Products shown on the site — curated subset of Printify catalog
const CORE_PRODUCTS: Product[] = [
  // --- Core 4 (our signature pieces) ---
  {
    id: 'polo-001',
    name: 'Dinger Polo',
    tagline: "The polo that doesn't take itself too seriously",
    description: 'Lightweight polo with all-over print — tiny celestial and botanical motifs on a dark backdrop. Breathable polyester keeps it crisp whether you\'re on the patio or on the course. Pointed collar, three-button placket.',
    priceCents: 4999,
    currency: 'usd',
    color: 'Multi',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    image: byPrintifyId('6977d6954640c1548405afa2')!.image,
    category: 'polos',
    printifyId: '6977d6954640c1548405afa2',
    printifyVariantId: byPrintifyId('6977d6954640c1548405afa2')!.printifyVariantId,
    sku: byPrintifyId('6977d6954640c1548405afa2')!.sku,
    costCents: byPrintifyId('6977d6954640c1548405afa2')!.costCents,
  },
  {
    id: 'hat-001',
    name: 'Dinger Cap',
    tagline: 'Your round, your look',
    description: 'Structured 6-panel cap with embroidered Dinger Don the gopher. Adjustable snapback. Built for sun protection and good looks on the first tee.',
    priceCents: 2999,
    currency: 'usd',
    color: 'Multi',
    sizes: ['One Size'],
    image: byPrintifyId('68ce1e546d18a047f20632be')!.image,
    category: 'hats',
    printifyId: '68ce1e546d18a047f20632be',
    printifyVariantId: byPrintifyId('68ce1e546d18a047f20632be')!.printifyVariantId,
    sku: byPrintifyId('68ce1e546d18a047f20632be')!.sku,
    costCents: byPrintifyId('68ce1e546d18a047f20632be')!.costCents,
  },
  {
    id: 'short-001',
    name: 'Dinger Short',
    tagline: 'Freedom to move, style to match',
    description: 'Women\'s bike shorts designed for golfing — champagne and elegant print to match a bra top. 88% polyester, 12% elastane. Without side seams for a smooth look. Above-knee length.',
    priceCents: 3757,
    currency: 'usd',
    color: 'Multi',
    sizes: ['S', 'M', 'L', 'XL'],
    image: byPrintifyId('68a5f9335fa46329be019778')!.image,
    category: 'shorts',
    printifyId: '68a5f9335fa46329be019778',
    printifyVariantId: byPrintifyId('68a5f9335fa46329be019778')!.printifyVariantId,
    sku: byPrintifyId('68a5f9335fa46329be019778')!.sku,
    costCents: byPrintifyId('68a5f9335fa46329be019778')!.costCents,
  },
  {
    id: 'polo-002',
    name: 'Dinger Long-Sleeve',
    tagline: 'For early mornings and late evenings',
    description: 'Quarter-zip pullover with embroidered detailing. UPF 50+ sun protection. Moisture-wicking hydrophilic finish. Layers easily over tees or under jackets.',
    priceCents: 10533,
    currency: 'usd',
    color: 'White',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    image: byPrintifyId('6931e992efc6b8a3fc00f9ec')!.image,
    category: 'polos',
    printifyId: '6931e992efc6b8a3fc00f9ec',
    printifyVariantId: byPrintifyId('6931e992efc6b8a3fc00f9ec')!.printifyVariantId,
    sku: byPrintifyId('6931e992efc6b8a3fc00f9ec')!.sku,
    costCents: byPrintifyId('6931e992efc6b8a3fc00f9ec')!.costCents,
  },
  // --- Additional Printify products ---
  {
    id: 'hoodie-001',
    name: 'Golf Warmup Hoodie',
    tagline: 'Warm up. Show up.',
    description: 'Golf warmup hoodie featuring Dinger Don the gopher. 100% polyester, moisture-wicking, UPF 50+ sun protection. Lightweight and assembled in the USA.',
    priceCents: 5499,
    currency: 'usd',
    color: 'Multi',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    image: byPrintifyId('6916a36be1bc399c020dbe58')!.image,
    category: 'hoodies',
    printifyId: '6916a36be1bc399c020dbe58',
    printifyVariantId: byPrintifyId('6916a36be1bc399c020dbe58')!.printifyVariantId,
    sku: byPrintifyId('6916a36be1bc399c020dbe58')!.sku,
    costCents: byPrintifyId('6916a36be1bc399c020dbe58')!.costCents,
  },
  {
    id: 'polo-003',
    name: 'Dinger Course Polo',
    tagline: 'Made for the back nine',
    description: 'Vibrant unisex polo with playful design — perfect for golf outings, casual Fridays, or weekend brunches. Cheerful vibe that blends into any setting.',
    priceCents: 7247,
    currency: 'usd',
    color: 'Multi',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    image: byPrintifyId('68a39d400c30e46c2309ca55')!.image,
    category: 'polos',
    printifyId: '68a39d400c30e46c2309ca55',
    printifyVariantId: byPrintifyId('68a39d400c30e46c2309ca55')!.printifyVariantId,
    sku: byPrintifyId('68a39d400c30e46c2309ca55')!.sku,
    costCents: byPrintifyId('68a39d400c30e46c2309ca55')!.costCents,
  },
  {
    id: 'accessory-002',
    name: 'Golf Towel',
    tagline: 'Stay dry. Stay stylish.',
    description: 'High-quality microfiber blend golf towel — ultra-soft and incredibly absorbent. Striking print on one side adds personality. Hook hole for convenient clipping to your bag.',
    priceCents: 1640,
    currency: 'usd',
    color: 'Multi',
    sizes: ['One Size'],
    image: byPrintifyId('6844ffc442b468025605b7ed')!.image,
    category: 'accessories',
    printifyId: '6844ffc442b468025605b7ed',
    printifyVariantId: byPrintifyId('6844ffc442b468025605b7ed')!.printifyVariantId,
    sku: byPrintifyId('6844ffc442b468025605b7ed')!.sku,
    costCents: byPrintifyId('6844ffc442b468025605b7ed')!.costCents,
  },
  {
    id: 'hat-002',
    name: 'Classic Dad Cap',
    tagline: 'Everyday casual, embroidered edge',
    description: 'Classic dad cap — relaxed fit, embroidered Dingersville design. Unisex summer cap. Perfect for casual outings, beachwear, or just lounging on a sunny day.',
    priceCents: 3347,
    currency: 'usd',
    color: 'White',
    sizes: ['One Size'],
    image: byPrintifyId('68ce1b930b3d660c3a0534d0')!.image,
    category: 'hats',
    printifyId: '68ce1b930b3d660c3a0534d0',
    printifyVariantId: byPrintifyId('68ce1b930b3d660c3a0534d0')!.printifyVariantId,
    sku: byPrintifyId('68ce1b930b3d660c3a0534d0')!.sku,
    costCents: byPrintifyId('68ce1b930b3d660c3a0534d0')!.costCents,
  },
  {
    id: 'polo-004',
    name: 'Good Vibes Dinger',
    tagline: 'Swing happy',
    description: 'Vibrant all-over print polo — Dingersville golf theme with mascot swinging a club, golf carts, flags, balls, and tropical foliage. Pop of color and energy for your wardrobe.',
    priceCents: 7247,
    currency: 'usd',
    color: 'Multi',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    image: byPrintifyId('68a4da7fd8c4d1e37407c866')!.image,
    category: 'polos',
    printifyId: '68a4da7fd8c4d1e37407c866',
    printifyVariantId: byPrintifyId('68a4da7fd8c4d1e37407c866')!.printifyVariantId,
    sku: byPrintifyId('68a4da7fd8c4d1e37407c866')!.sku,
    costCents: byPrintifyId('68a4da7fd8c4d1e37407c866')!.costCents,
  },
]

const roundToNinetyNine = (cents: number) => Math.max(99, Math.ceil(cents / 100) * 100 - 1)

const EXTRA_PRODUCTS: Product[] = PRINTIFY_PRODUCTS
  .filter(printify => !CORE_PRODUCTS.some(core => core.printifyId === printify.printifyId))
  .map((printify, index) => ({
    id: `printify-${printify.printifyId}`,
    name: printify.name,
    tagline: printify.tagline,
    description: printify.description,
    priceCents: printify.priceCents,
    currency: printify.currency,
    color: printify.color,
    colors: printify.colors,
    sizes: printify.sizes.length ? printify.sizes : ['One Size'],
    image: printify.image,
    images: printify.images,
    category: printify.category,
    printifyId: printify.printifyId,
    printifyVariantId: printify.printifyVariantId,
    sku: printify.sku || `printify-${index}`,
    costCents: printify.costCents,
    variants: printify.variants,
  }))

// Preserve stable IDs and fulfillment mappings for the original core products,
// while exposing every currently published Printify product on the storefront.
export const PRODUCTS: Product[] = [...CORE_PRODUCTS, ...EXTRA_PRODUCTS].map(product => {
  const synced = byPrintifyId(product.printifyId)
  return {
    ...product,
    priceCents: roundToNinetyNine(product.priceCents),
    images: product.images ?? synced?.images ?? [{ src: product.image, variantIds: [] }],
    colors: product.colors ?? synced?.colors ?? [product.color],
    variants: product.variants ?? synced?.variants,
  }
})

export const byId = (id: string) => PRODUCTS.find(p => p.id === id)

// Map our product IDs to Printify variant IDs for order fulfillment
export const printifyVariantMap: Record<string, string> = {}
for (const p of PRODUCTS) {
  printifyVariantMap[p.id] = p.printifyVariantId
}

export const printifySkuMap: Record<string, string> = {}
for (const p of PRODUCTS) {
  printifySkuMap[p.id] = p.sku
}
