import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
          {/* Copy column */}
          <div className="lg:pl-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">
              Latest Drop
            </div>

            {/* Headline — Chalkboard Bold */}
            <h1 className="mt-6 text-4xl font-brand font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Golf apparel for the way you{' '}
              <span className="text-orange">actually play</span>
            </h1>

            {/* Body copy — system font, regular */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Fun, colorful, built for real rounds — not gallery posers.
              Dingersville is golf gear for players who care about the game but not the dress code.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-full bg-orange px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange/90 transition-colors"
              >
                Shop the Drop
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Our Story
              </Link>
            </div>

            {/* Credibility strip */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-xs">Made to order</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="h-4 w-4 fill-orange text-orange" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs">Secure Stripe checkout</span>
              </div>
            </div>
          </div>

          {/* Mascot image column */}
          <div className="relative mx-auto max-w-lg lg:mx-0">
            <div
              className="aspect-square rounded-2xl bg-gradient-to-br from-orange/20 via-teal/10 to-purple/20 ring-1 ring-inset ring-gray-200/50"
            >
              <Image
                src="/brand/dinger-don-source.png"
                alt="Dinger Don, the Dingersville golfer mascot, swinging a club"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
