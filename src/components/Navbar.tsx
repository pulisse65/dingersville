'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo: mascot mark + wordmark */}
        <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
          <Image
            src="/brand/dinger-don-mark-192.png"
            alt=""
            width={36}
            height={36}
            className="rounded-lg object-contain"
          />
          <span className="font-brand text-xl text-gray-900">Dingersville</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Shop</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative inline-flex min-h-11 items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={closeMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 21h12M9 21V4m0 0c2.2-1.6 4.4-1.6 6.6 0C17.2 5.2 18 5.2 19 4v7c-1 .9-1.8.9-3.4 0C13.4 9.4 11.2 9.4 9 11" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h8" />
            </svg>
            <span className="ml-1.5">{itemCount > 0 ? String(itemCount) : 'Bag'}</span>
            {itemCount > 0 && (
              <span className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center" aria-label={`${itemCount} items in bag`}>
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </Link>

          {/* Functional mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="inline-flex min-h-11 items-center rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
            <span className="ml-2">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-navigation"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-gray-200 bg-brand-cream md:hidden`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile navigation">
          <Link href="/shop" onClick={closeMenu} className="min-h-11 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-white hover:text-brand-orange transition-colors">Shop</Link>
          <Link href="/about" onClick={closeMenu} className="min-h-11 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-white hover:text-brand-orange transition-colors">About</Link>
          <Link href="/contact" onClick={closeMenu} className="min-h-11 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-white hover:text-brand-orange transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
