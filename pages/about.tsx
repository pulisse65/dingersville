import Image from 'next/image'
import Link from 'next/link'
import { BRAND_COLORS } from '@/lib/utils'

export default function AboutPage() {
  const milestones = [
    { year: '2025', text: 'Paul decides golf apparel deserves a personality — not a dress code.' },
    { year: '2026', text: 'Dingersville is born. Gopher mascot, colorful drops, zero pretension.' },
    { year: 'TBD', text: 'First real drop ships via Printify. The gopher goes live on the course.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Our Story</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl">
            Golf apparel for players who care about the game but not the dress code.
            We make colorful, fun gear that actually looks good on the course — no gallery posers allowed.
          </p>
        </div>
      </header>

      {/* Gopher intro */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <div
            className="aspect-square rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deepGreen flex items-center justify-center shadow-2xl"
          >
            <svg className="h-32 w-32 text-white" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="42" fill="rgba(255,255,255,0.15)"/>
              <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="14" fill="currentColor"/>
              <rect x="35" y="35" width="8" height="12" rx="2" fill="rgba(255,255,255,0.4)"/>
              <rect x="57" y="35" width="8" height="12" rx="2" fill="rgba(255,255,255,0.4)"/>
              <path d="M30 70 Q50 82 70 70" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">Meet the Dinger. Your new golf mascot.</p>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div
              className="mx-auto h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center"
            >
              <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Fun first</h3>
            <p className="mt-2 text-sm text-gray-500">
              Golf is supposed to be fun. We make gear that celebrates that — colorful, playful, and never stiff. If your outfit looks like you\'re headed to a board meeting, you\'re doing it wrong.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div
              className="mx-auto h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center"
            >
              <svg className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Built for the course</h3>
            <p className="mt-2 text-sm text-gray-500">
              Every piece is functional first — breathable, comfortable, and ready for a four-hour round. Style is a bonus, not a compromise.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div
              className="mx-auto h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center"
            >
              <svg className="h-5 w-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m8-4v10" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Printify-fulfilled</h3>
            <p className="mt-2 text-sm text-gray-500">
              We dropship through Printify — no inventory, no warehouse, no overhead. That means lower prices for you and a lean operation that can grow without blowing up.
            </p>
          </div>
        </div>
      </div>

      {/* Founder note */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
            <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">From the Founder</p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I started Dingersville because every golf brand out there looks like it was designed by someone who\'s never actually played a round. Collared polos at $90 that look great in a catalog and terrible in a sand trap. We\'re doing the opposite — colorful, comfortable, and priced so you don\'t feel guilty buying three.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The gopher is the mascot because — honestly — what else says "I\'m here to have fun and maybe shoot a decent round" better than a gopher? We\'re building Dingersville one drop at a time, and we\'re just getting started.
            </p>
            <p className="mt-6 text-sm text-gray-500">— Paul, Founder</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Where we\'re headed</h2>
        <div className="mt-6 relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-brand-orange/30" />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8">
                <div
                  className="absolute left-0 top-1 h-4 w-4 rounded-full bg-white border-2 border-brand-orange"
                  style={{ backgroundColor: m.year === 'TBD' ? '#E5E7EB' : undefined }}
                />
                <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-xs font-semibold text-brand-orange">
                  {m.year}
                </span>
                <p className="mt-1 text-gray-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors"
          >
            Shop the Drop
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
