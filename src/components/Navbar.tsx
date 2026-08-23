import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function Navbar() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#F47B20' }}>
            G
          </div>
          <span className="text-xl font-bold text-gray-900">Dingersville</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Shop</Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-2 top-1/2 h-5 w-5 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </Link>
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
