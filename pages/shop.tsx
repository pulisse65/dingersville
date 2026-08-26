import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PRODUCTS } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import { SITE } from '@/lib/site'

const categories = ['all', 'polos', 'hats', 'shorts', 'tees', 'hoodies', 'accessories'] as const

export default function ShopPage() {
  const router = useRouter()
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    const queryCategory = router.query.category
    setFilter(typeof queryCategory === 'string' && categories.includes(queryCategory as typeof categories[number]) ? queryCategory : 'all')
  }, [router.query.category])

  const selectCategory = (category: string) => {
    setFilter(category)
    void router.push(category === 'all' ? '/shop' : `/shop?category=${category}`, undefined, { shallow: true })
  }

  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)

  return (
    <>
      <Head>
        <title>Shop — {SITE.name}</title>
        <meta name="description" content="Shop colorful Dingersville golf apparel, hats, shorts, hoodies, and accessories." />
        <link rel="canonical" href={`https://${SITE.domain}/shop`} />
      </Head>
      <div className="min-h-screen bg-brand-cream/40">
        <header className="border-b border-brand-orange/10 bg-brand-cream">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">The collection</p>
            <h1 className="mt-2 font-brand text-4xl font-bold text-gray-900">Shop Dingersville</h1>
            <p className="mt-3 max-w-xl text-lg text-gray-600">Colorful golf gear for people who love the game and bring their own vibe.</p>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
            {categories.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={filter === category}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${filter === category ? 'bg-brand-orange text-white shadow-sm' : 'border border-gray-200 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange'}`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
              <h2 className="font-brand text-2xl font-bold text-gray-900">Nothing in this category yet</h2>
              <p className="mt-2 text-gray-600">Try another filter or browse the full collection.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
