import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold shadow-sm">
          {product.color}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">Dingersville</p>
        <h3 className="mt-1 font-brand text-base font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500">{product.tagline}</p>
        <p className="mt-2 font-brand text-lg font-bold text-gray-900">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}
        </p>
      </div>
    </Link>
  )
}
