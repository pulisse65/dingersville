import Image from 'next/image'
import Link from 'next/link'
import { BRAND_COLORS } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-orange">
              New Drop — Summer 2026
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Golf apparel for the way you{' '}
              <span className="text-brand-orange">actually play</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Fun, colorful, built for real rounds — not gallery posers.
              Dingersville is golf gear for players who care about the game but not the dress code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-full bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors"
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
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                      style={{ backgroundColor: ['#F47B20','#14B8A6','#7C3AED','#1A4D2E'][i-1] }}
                    />
                  ))}
                </div>
                <span className="text-xs">From 500+ rounds</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs">4.9/5 from early testers</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg lg:mx-0">
            <div
              className="aspect-square rounded-2xl bg-gradient-to-br from-brand-orange/20 via-brand-teal/10 to-brand-purple/20 ring-1 ring-inset ring-gray-200/50"
            >
              <svg className="absolute inset-0 h-full w-full text-gray-400" viewBox="0 0 200 200" fill="currentColor">
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="30" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="rounded-2xl bg-gradient-to-br from-brand-orange to-brand-deepGreen p-8 text-white shadow-2xl"
                  style={{ width: '70%', height: '70%' }}
                >
                  <svg className="h-24 w-24" viewBox="0 0 64 64" fill="currentColor">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="32" cy="32" r="20" fill="rgba(255,255,255,0.15)" />
                    <path d="M32 10 L32 54 M10 32 L54 32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="32" cy="32" r="6" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 shadow-lg">
              <span className="text-sm font-semibold text-gray-700">Coming Summer 2026</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
