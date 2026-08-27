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
  const { addToCart, itemCount } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || product.color)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  const allImages = product.images?.length ? product.images : [{ src: product.image, variantIds: [] }]
  const colorImages = selectedColor === 'Multi'
    ? allImages
    : allImages.filter(image => image.variantIds.length === 0 || image.variantIds.some(id => {
        const variant = product.variants?.find(item => item.id === String(id))
        return variant?.color.toLowerCase().includes(selectedColor.toLowerCase()) || variant?.title.toLowerCase().includes(selectedColor.toLowerCase())
      }))
  const gallery = colorImages.length ? colorImages : allImages
  const activeImage = gallery[Math.min(selectedImage, gallery.length - 1)]?.src || product.image

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
          <div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-cream shadow-sm ring-1 ring-brand-purple/10">
              <Image
                src={activeImage}
                alt={`${product.name}${selectedColor !== 'Multi' ? ` in ${selectedColor}` : ''}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2" aria-label="Product images">
                {gallery.slice(0, 8).map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={selectedImage === index}
                    className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-white ${selectedImage === index ? 'border-brand-orange' : 'border-transparent'}`}
                  >
                    <Image src={image.src} alt="" fill className="object-cover" sizes="100px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div id="main-content" className="flex flex-col rounded-3xl bg-brand-cream/70 p-6 md:p-8 shadow-sm ring-1 ring-brand-orange/10">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville — {product.category}</p>
            <h1 className="mt-1 font-brand text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 font-brand text-lg font-bold text-gray-900">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

            {/* Color selector */}
            {(product.colors?.length || 0) > 1 && (
              <div className="mt-8">
                <span className="text-sm font-semibold text-gray-700">Color: <span className="font-normal">{selectedColor}</span></span>
                <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Select color">
                  {product.colors?.map(color => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => { setSelectedColor(color); setSelectedImage(0) }}
                      aria-pressed={selectedColor === color}
                      className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${selectedColor === color ? 'border-brand-purple bg-brand-purple text-white shadow-sm ring-2 ring-brand-purple/25' : 'border-gray-300 bg-white text-gray-700 hover:border-brand-purple hover:text-brand-purple'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mt-8">
              <span className="text-sm font-semibold text-gray-700">Available sizes</span>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Select size">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`min-h-11 min-w-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? '!border-brand-orange !bg-brand-orange !text-white shadow-sm ring-2 ring-brand-orange/30'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-brand-orange hover:text-brand-orange'
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
                `Add to bag — ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}`
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
                View bag {itemCount > 0 ? `(${itemCount})` : ''}
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
