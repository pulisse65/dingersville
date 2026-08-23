import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { PRODUCTS, byId, Product } from '@/lib/products'

interface ProductPageProps {
  product: Product
}

export default function ProductPage({ product }: ProductPageProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '')

  const handleAddToCart = () => {
    if (!selectedSize) return
    addToCart(product.id, selectedSize)
    setSelectedSize('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-brand-orange transition-colors mb-6">
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="aspect-square bg-gray-100 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm">
              {product.color}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville — {product.category}</p>
            <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-brand-orange font-semibold">{product.tagline}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(product.priceCents / 100)}
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <span className="text-sm font-semibold text-gray-700">Available sizes</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-brand-orange bg-brand-orange text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="mt-6 w-full rounded-xl bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {selectedSize
                ? `Add to cart — ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(product.priceCents / 100)}`
                : 'Select a size'}
            </button>

            <p className="mt-3 text-xs text-gray-400">
              Printify-fulfilled. Ships in 3-5 business days. Returns accepted within 30 days.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← All products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PRODUCTS.map(p => ({ params: { slug: p.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = byId(params?.slug as string)
  if (!product) return { notFound: true }
  return { props: { product } }
}
