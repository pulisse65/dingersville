

import { useState } from 'react'
import { loadStripe, Stripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

const PRODUCTS = [
  {
    id: 'polo-001',
    name: 'Dinger Polo',
    tagline: 'The polo that doesn\'t take itself too seriously',
    price: 7500,
    priceDisplay: '$75',
    description: 'Soft, breathable polo with a relaxed fit. Orange body, white collar and cuffs. Three buttons, two pockets, and a look that says you care about your swing but not fashion week.',
    color: 'Orange',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/polo1/800/1000',
    category: 'polos',
    href: '/shop/polo-001',
  },
  {
    id: 'hat-001',
    name: 'Dinger Cap',
    tagline: 'Your round, your look',
    price: 3500,
    priceDisplay: '$35',
    description: 'Structured 6-panel cap in teal with the Dingersville logo on the front. Adjustable snapback. Built for sun protection and good looks on the first tee.',
    color: 'Teal',
    sizes: ['One Size'],
    image: 'https://picsum.photos/seed/hat1/800/1000',
    category: 'hats',
    href: '/shop/hat-001',
  },
  {
    id: 'short-001',
    name: 'Dinger Short',
    tagline: 'Freedom to move, style to match',
    price: 6500,
    priceDisplay: '$65',
    description: 'Tailored short with elastic waist, zip pocket, and a relaxed hem. Purple with deep green side panels. Fits like it should — not too tight, not baggy.',
    color: 'Purple',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/short1/800/1000',
    category: 'shorts',
    href: '/shop/short-001',
  },
  {
    id: 'polo-002',
    name: 'Dinger Long-Sleeve',
    tagline: 'For early mornings and late evenings',
    price: 8500,
    priceDisplay: '$85',
    description: 'Long-sleeve polo in deep green. Woven fabric, mock collar, side vents. The piece you reach for when the morning frost hasn\'t burned off yet.',
    color: 'Deep Green',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://picsum.photos/seed/longsleeve1/800/1000',
    category: 'polos',
    href: '/shop/polo-002',
  },
]

export default function ShopPage() {
  const [filter, setFilter] = useState<string>('all')
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null)
  const router = useRouter()

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter)

  const categories = ['all', 'polos', 'hats', 'shorts']

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <p className="mt-2 text-gray-500">Golf apparel that doesn't take itself too seriously.</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? 'bg-brand-orange text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-orange/50'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(product => (
            <Link
              key={product.id}
              href={product.href}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow-sm">
                  {product.color}
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Dingersville</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.tagline}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{product.priceDisplay}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Product detail modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="aspect-square bg-gray-100 relative">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Dingersville</p>
                  <p className="mt-1 text-sm text-brand-orange font-semibold">{selectedProduct.color}</p>
                  <h2 className="mt-1 text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <p className="mt-1 text-lg font-bold text-gray-900">{selectedProduct.priceDisplay}</p>
                  <p className="mt-3 text-gray-600 leading-relaxed">{selectedProduct.description}</p>

                  <div className="mt-6">
                    <label className="text-sm font-semibold text-gray-700">Size</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProduct.sizes.map(size => (
                        <button
                          key={size}
                          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!selectedProduct) return
                      router.push(`/checkout/${selectedProduct.id}`)
                      setSelectedProduct(null)
                    }}
                    disabled={!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
                    className="mt-6 w-full rounded-xl bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
                      ? `Buy now — ${selectedProduct.priceDisplay}`
                      : 'Add Stripe keys to enable checkout'}
                  </button>

                  <p className="mt-2 text-xs text-gray-400">
                    Printify-fulfilled. Ships in 3-5 business days.
                  </p>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
