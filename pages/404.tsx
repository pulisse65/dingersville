import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <div
          className="mx-auto h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center"
        >
          <svg className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page not found. The gopher didn't see this one coming.</p>
        <p className="mt-1 text-sm text-gray-500">Let\'s get you back to where you were.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="/"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Go to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
