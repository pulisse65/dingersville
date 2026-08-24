import { useState } from 'react'
import { useCart } from '@/lib/cart'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'

export default function ShopPage() {
  const [filter, setFilter] = useState<string>('all')
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')

  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter)

  const categories = ['all', 'polos', 'hats', 'shorts', 'hoodies', 'accessories']

  const handleAddToCart = (product: typeof PRODUCTS[0], size: string) => {
    addToCart(product.id, size)
    setSelectedProduct(null)
    setSelectedSize('')
  }

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
              href={`/shop/${product.id}`}
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
                <p className="mt-2 text-lg font-bold text-gray-900">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(product.priceCents / 100)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
