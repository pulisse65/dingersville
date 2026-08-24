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
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize || addedToCart) return
    addToCart(product.id, selectedSize)
    setAddedToCart(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-orange transition-colors mb-6">
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Product image */}
          <div className="aspect-square bg-gray-100 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm">
              {product.color}
            </div>
          </div>

          {/* Product details */}
          <div id="main-content" className="flex flex-col">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville — {product.category}</p>
            <h1 className="mt-1 text-3xl font-brand font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-orange font-semibold">{product.tagline}</p>
            <p className="mt-2 text-lg font-brand font-bold text-gray-900">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size selector */}
            <div className="mt-8">
              <span className="text-sm font-semibold text-gray-700">Available sizes</span>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Select size">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-orange bg-orange text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-orange hover:text-orange'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`mt-6 w-full rounded-xl px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors ${
                addedToCart
                  ? 'bg-gray-400 cursor-default'
                  : !selectedSize
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-orange hover:bg-orange/90'
              }`}
            >
              {addedToCart ? (
                'Added to bag'
              ) : selectedSize ? (
                `Add to bag — {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}`
              ) : (
                'Select a size'
              )}
            </button>

            <p className="mt-3 text-xs text-gray-400">
              Made to order for Dingersville. Ships via Printify to the address in your Stripe checkout.
            </p>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← All products
              </Link>

              <Link
                href="/cart"
                className="inline-flex items-center rounded-xl bg-orange px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange/90 transition-colors"
              >
                View bag {useCart().itemCount > 0 ? `(${useCart().itemCount})` : ''}
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
