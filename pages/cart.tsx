import { useCart, LineItem } from '@/lib/cart'
import { byId } from '@/lib/products'
import Link from 'next/link'
import Image from 'next/image'
import { useState, FormEvent } from 'react'

export default function CartPage() {
  const { items, itemCount, subtotalCents, removeFromCart, setQty, clearCart } = useCart()

  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const handleCheckout = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (checkoutLoading) return
    setCheckoutLoading(true)
    setCheckoutError(null)
    try {
      const res = await fetch(`${window.location.origin}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `Checkout failed (${res.status})`)
      }
      const data = await res.json()
      if (data.url) {
        window.location.assign(data.url)
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : 'Checkout failed. Please try again.')
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <svg className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-900">Your bag is empty</h1>
            <p className="mt-2 text-lg text-gray-600">Add some gear to get started.</p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link href="/shop" className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your bag ({itemCount})</h1>
              <p className="mt-1 text-gray-500">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={clearCart}
              className="rounded-full text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
            >
              Clear bag
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Line items */}
            <div className="space-y-4">
              {items.map((item: LineItem) => {
                const product = byId(item.productId)
                if (!product) return null
                return (
                  <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                    <div className="relative h-24 w-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                          <p className="mt-1 text-base font-bold text-gray-900">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.priceCents / 100)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQty(item.productId, item.size, item.qty - 1)}
                            disabled={item.qty <= 1}
                            className="rounded-md border border-gray-300 p-1 text-gray-500 hover:border-brand-orange hover:text-brand-orange disabled:opacity-40"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-gray-900">{item.qty}</span>
                          <button
                            onClick={() => setQty(item.productId, item.size, item.qty + 1)}
                            className="rounded-md border border-gray-300 p-1 text-gray-500 hover:border-brand-orange hover:text-brand-orange"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.productId, item.size)}
                        className="mt-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Subtotal */}
            <div className="self-start bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900">Subtotal</h2>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(subtotalCents / 100)}
              </p>
              <p className="mt-2 text-xs text-gray-500">Taxes and shipping calculated at checkout.</p>
              <button
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="mt-6 w-full rounded-xl bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {checkoutLoading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Redirecting...
                  </span>
                ) : (
                  'Checkout'
                )}
              </button>
              <Link
                href="/shop"
                className="mt-3 block w-full text-center text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
