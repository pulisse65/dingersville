import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand lockup */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <ImageWrappedMascot />
              </div>
              <span className="text-lg font-brand font-bold text-gray-900">Dingersville</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Golf apparel for the way you actually play.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shop" className="text-sm text-gray-500 hover:text-orange transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=polos" className="text-sm text-gray-500 hover:text-orange transition-colors">Polos</Link></li>
              <li><Link href="/shop?category=hats" className="text-sm text-gray-500 hover:text-orange transition-colors">Hats</Link></li>
              <li><Link href="/shop?category=shorts" className="text-sm text-gray-500 hover:text-orange transition-colors">Shorts</Link></li>
              <li><Link href="/shop?category=hoodies" className="text-sm text-gray-500 hover:text-orange transition-colors">Hoodies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-orange transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="mailto:hello@dingersville.com" className="text-sm text-gray-500 hover:text-orange transition-colors">hello@dingersville.com</a></li>
              <li><Link href="/shop" className="text-sm text-gray-500 hover:text-orange transition-colors">Shipping & returns</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dingersville. Made to order. Secure checkout via Stripe.</p>
        </div>
      </div>
    </footer>
  )
}

function ImageWrappedMascot() {
  return (
    <img
      src="/brand/dinger-don-nav.png"
      alt=""
      width={32}
      height={32}
      className="rounded-lg object-contain"
      aria-hidden="true"
    />
  )
}
