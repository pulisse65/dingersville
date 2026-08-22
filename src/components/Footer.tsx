import Link from 'next/link'
import { BRAND_COLORS } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: BRAND_COLORS.orange }}
              >
                G
              </div>
              <span className="text-lg font-bold text-gray-900">Dingersville</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Golf apparel for the way you actually play.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=polos" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">Polos</Link></li>
              <li><Link href="/shop?category=hats" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">Hats</Link></li>
              <li><Link href="/shop?category=shorts" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">Shorts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-sm text-gray-500">Instagram: @dingersville</span></li>
              <li><span className="text-sm text-gray-500">TikTok: @dingersville</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dingersville. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
