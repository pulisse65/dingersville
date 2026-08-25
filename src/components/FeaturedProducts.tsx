import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'
import ProductCard from './ProductCard'

const FEATURED_IDS = ['polo-001', 'hat-001', 'short-001', 'polo-002']

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id))

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-brand text-2xl font-bold text-gray-900">The Drop</h2>
            <p className="mt-2 text-gray-500">The latest pieces. Your round.</p>
          </div>
          <Link href="/shop" className="hidden items-center text-sm font-semibold text-brand-orange hover:text-brand-orange/90 transition-colors md:inline-flex">
            View all products
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/shop" className="inline-flex items-center text-sm font-semibold text-brand-orange hover:text-brand-orange/90 transition-colors">
            View all products
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
