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
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-brand-cream shadow-sm ring-1 ring-brand-orange/15">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-teal/20 to-transparent" />
            <Image
              src="/brand/dinger-don-source.png"
              alt="Dinger Don, the Dingersville golfer mascot"
              fill
              className="relative z-10 object-contain p-10 sm:p-14"
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
                Dingersville started with a simple idea: golf is too much fun to take so seriously.
                I love the game — the early tee times, the lucky shots, the terrible shots,
                and the stories that come after the round. I wanted to build a golf brand that
                feels like that: colorful, relaxed, and genuinely fun.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Dingersville is for anyone who loves golf and wants their gear to show a little
                personality. We are here for the players who enjoy the walk, the laughs, the
                competition, and the occasional miracle shot.
              </p>
              <p className="mt-6 text-sm text-gray-500">— Paul, Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* What we believe */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">The Dingersville idea</p>
            <h2 className="mt-2 text-2xl font-brand font-bold text-gray-900">Golf is supposed to be fun.</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We make colorful golf apparel with personality — pieces that feel at home on the course,
              at the clubhouse, or wherever the day takes you. No stiff golf-club energy. Just good gear,
              a good round, and a reason to smile when the ball goes somewhere unexpected.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-brand-cream p-5">
              <h3 className="font-brand text-lg font-bold text-gray-900">Love the game</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Everything starts with a genuine love for golf — the good shots, bad shots, and stories after the round.</p>
            </div>
            <div className="rounded-2xl bg-brand-teal/10 p-5">
              <h3 className="font-brand text-lg font-bold text-gray-900">Bring the fun</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Color, character, and a little irreverence belong on the course.</p>
            </div>
            <div className="rounded-2xl bg-brand-purple/10 p-5">
              <h3 className="font-brand text-lg font-bold text-gray-900">Wear your round</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Our pieces are made for golfers who want their gear to feel as personal as their game.</p>
            </div>
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
