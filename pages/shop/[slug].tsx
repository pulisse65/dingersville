import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { loadStripe, Stripe } from '@stripe/stripe-js'

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
  },
]

interface ProductPageProps {
  product: typeof PRODUCTS[0]
}

export default function ProductPage({ product }: ProductPageProps) {

  const handleBuy = async () => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      alert('Stripe is not configured yet. Add your keys to .env.local')
      return
    }
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    if (!stripe) return
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: product.id, quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/checkout/success?product=${product.id}`,
      cancelUrl: `${window.location.origin}/shop`,
    })
    if (error) console.error(error)
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
            <p className="mt-4 text-2xl font-bold text-gray-900">{product.priceDisplay}</p>

            <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <span className="text-sm font-semibold text-gray-700">Available sizes</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <span
                    key={size}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 bg-white"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleBuy}
              disabled={!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
              className="mt-6 w-full rounded-xl bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
                ? `Buy now — ${product.priceDisplay}`
                : 'Add Stripe keys to enable checkout'}
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
  const product = PRODUCTS.find(p => p.id === params?.slug)
  if (!product) return { notFound: true }
  return { props: { product } }
}
