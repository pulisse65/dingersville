'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart'
import { useEffect } from 'react'

export default function Navbar() {
  const { itemCount, items } = useCart()

  // Sync with CartProvider — actually using the cart state rather than external storage
  useEffect(() => {
    // CartProvider hydrates from localStorage on mount; we just read from context
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo: mascot mark + wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center">
            <Image
              src="/brand/dinger-don-mark-192.png"
              alt=""
              width={36}
              height={36}
              className="rounded-lg object-contain"
            />
          </div>
          <span className="font-brand text-xl text-gray-900">
            Dingersville
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right: cart + mobile menu button */}
        <div className="flex items-center gap-3">
          {/* Cart link with badge */}
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m0 0h3.75m-3.75 0h7.5m-7.5 0v-3.75a3.75 3.75 0 017.5 0v3.75" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5m-16.5 0a3 3 0 003 3h10.5a3 3 0 003-3m-10.5 0v-14.25" />
            </svg>
            <span className="ml-1.5">{itemCount > 0 ? String(itemCount) : 'Bag'}</span>
            {itemCount > 0 && (
              <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span className="ml-2">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div className="md:hidden hidden border-t border-gray-200 bg-white">
        <nav className="flex flex-col px-4 py-3 gap-1">
          <Link href="/shop" className="py-2 text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors">
            Shop
          </Link>
          <Link href="/about" className="py-2 text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors">
            About
          </Link>
          <Link href="/contact" className="py-2 text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
