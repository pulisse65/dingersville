import Link from 'next/link'
import { BRAND_COLORS } from '@/lib/utils'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: BRAND_COLORS.orange }}
          >
            G
          </div>
          <span className="text-xl font-bold text-gray-900">Dingersville</span>
        </Link>
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
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  )
}
