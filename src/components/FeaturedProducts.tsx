import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/products'

// Show a deliberate subset — first 4 products
const FEATURED_IDS = ['polo-001', 'hat-001', 'short-001', 'polo-002']

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id))

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-brand font-bold text-gray-900">The Drop</h2>
            <p className="mt-2 text-gray-500">The latest pieces. Your round.</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-flex items-center text-sm font-semibold text-orange hover:text-orange/90 transition-colors"
          >
            View all products
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow-sm">
                  {product.color}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium drop-shadow-sm">{product.tagline}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Dingersville</p>
                <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font-brand font-bold text-gray-900">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/shop" className="inline-flex items-center text-sm font-semibold text-orange hover:text-orange/90 transition-colors">
            View all products
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
