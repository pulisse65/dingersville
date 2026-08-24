import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const milestones = [
    { year: '2025', text: 'Paul decides golf apparel deserves a personality — not a dress code.' },
    { year: '2026', text: 'Dingersville is born. Colorful drops, zero pretension, made to order.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville</p>
          <h1 className="mt-2 text-3xl font-brand font-bold text-gray-900">Our Story</h1>
          <p className="mt-3 text-lg text-gray-600">
            A small golf apparel brand built for players who care about the game but not the dress code.
          </p>
        </div>
      </header>

      {/* Mascot intro */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deepGreen flex items-center justify-center shadow-2xl">
            <Image
              src="/brand/dinger-don-source.png"
              alt="Dinger Don, the Dingersville golfer mascot"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Meet Dinger Don. Your new golf mascot.</p>
        </div>
      </div>

      {/* Founder letter */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-xl font-brand font-bold text-gray-900">Why Dingersville</h2>
            <div className="mt-4">
              <p className="text-gray-700 leading-relaxed">
                I started Dingersville because every golf brand out there looks like it was
                designed by someone who's never actually played a round. Collared polos at $90
                that look great in a catalog and terrible in a sand trap. We're doing the opposite —
                colorful, comfortable, and priced so you don't feel guilty buying three.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The mascot is the heart of Dingersville — honestly, what else says
                "I'm here to have fun and maybe shoot a decent round" better than a golfer
                mascot in a bright orange shirt? We're building Dingersville one drop at a time,
                and we're just getting started.
              </p>
              <p className="mt-6 text-sm text-gray-500">— Paul, Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mx-auto h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.328M11 7.328A2 2 0 0113 8.5V10a2 2 0 002 2h2a2 2 0 002-2v-.5a2 2 0 012-1.5h-2.328a2 2 0 00-1.164.836l-.94 2.94a2 2 0 001.664 1.664l2.94-.94a2 2 0 011.664 1.664l-.94 2.94a2 2 0 00.836 1.164H17a2 2 0 002-2v-.5a2 2 0 012-1.5h-2.328z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-brand font-bold text-gray-900">Made to order</h3>
            <p className="mt-2 text-sm text-gray-500">
              We dropship through Printify — no inventory, no warehouse. That means less waste
              and more flexibility to try new designs without guessing demand.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mx-auto h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-4 2.924-4C13.076 6 16 6.5 16 7.5c0 1.5-1.076 2.5-2.5 2.5" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-brand font-bold text-gray-900">Fun first</h3>
            <p className="mt-2 text-sm text-gray-500">
              Nobody ever improved their swing by taking themselves more seriously.
              Dingersville is for the player who knows golf is a game.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mx-auto h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m8-4v10" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-brand font-bold text-gray-900">Reasonable prices</h3>
            <p className="mt-2 text-sm text-gray-500">
              Colorful, comfortable, and priced so you don't feel guilty buying three.
              No $90 collared polos here.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mx-auto h-10 w-10 rounded-full bg-brand-deepGreen/10 flex items-center justify-center">
              <svg className="h-5 w-5 text-brand-deepGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.95q.384.074.76.14a2 2 0 011.24 0q.384-.067.76-.14V19a2 2 0 002 2h2.95q.76.14 1.24.14a2 2 0 011.24 0q.384-.067.76-.14V21a2 2 0 002 2 2 2 0 012 2v1a2 2 0 012 2 2 2 0 01-2 2h-5.055M9 11h2m-1 4h2m-1 4H8" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-brand font-bold text-gray-900">US shipping</h3>
            <p className="mt-2 text-sm text-gray-500">
              Orders ship from Printify to anywhere in the United States.
              Secure checkout via Stripe.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-brand font-bold text-gray-900">Timeline</h2>
          <div className="mt-6 space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white text-sm font-bold">
                  {m.year}
                </div>
                <p className="text-gray-700">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-orange p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-brand font-bold">Ready to play?</h2>
          <p className="mt-2 text-lg text-white/90">Shop the collection and find your round.</p>
          <div className="mt-6">
            <Link
              href="/shop"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-orange shadow-sm hover:bg-brand-cream transition-colors"
            >
              Shop Now
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              Dingersville — golf apparel with a little more character.
            </p>
            <div className="flex gap-4">
              <Link href="/shop" className="text-sm text-gray-500 hover:text-orange transition-colors">Shop</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-orange transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
