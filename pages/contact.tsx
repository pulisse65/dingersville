import Link from 'next/link'
import { useState } from 'react'
import { BRAND_COLORS } from '@/lib/utils'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // In production, send to an API route or email service
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormState('success')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 uppercase tracking-wide">Dingersville</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Contact</h1>
          <p className="mt-3 text-lg text-gray-600">Questions, wholesale inquiries, or just want to say hey — we'd love to hear from you.</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            {formState === 'success' ? (
              <div className="flex flex-col items-center text-center py-8">
                <div
                  className="mx-auto h-12 w-12 rounded-full bg-brand-teal/10 flex items-center justify-center"
                >
                  <svg className="h-6 w-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Message sent!</h3>
                <p className="mt-2 text-sm text-gray-500">We'll get back to you within 1-2 business days.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50 resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I'm interested in</label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={e => setFormData(f => ({ ...f, interest: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 bg-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange/50"
                  >
                    <option value="">Select a topic...</option>
                    <option value="products">Product questions / sizing</option>
                    <option value="wholesale">Wholesale / partnership</option>
                    <option value="collab">Collaboration / brand deal</option>
                    <option value="feedback">Feedback / suggestions</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full rounded-xl bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors disabled:cursor-not-allowed disabled:bg-gray-300 flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Get in touch</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Email</dt>
                  <dd className="mt-1 text-sm text-gray-700">hello@dingersville.com</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Response time</dt>
                  <dd className="mt-1 text-sm text-gray-700">1-2 business days</dd>
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">Address</dt>
                  <dd className="mt-1 text-sm text-gray-700">Dingersville — dropshipping via Printify, everywhere and nowhere.</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Follow along</h2>
              <p className="mt-2 text-sm text-gray-500">The gopher posts here first. New drops, course stories, and the occasional questionable golf opinion.</p>
              <div className="mt-4 flex gap-3">
                {[
                  { label: 'Instagram', handle: '@dingersville' },
                  { label: 'TikTok', handle: '@dingersville' },
                ].map(social => (
                  <div
                    key={social.label}
                    className="flex-1 rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
                  >
                    <p className="text-sm font-semibold text-gray-900">{social.label}</p>
                    <p className="mt-1 text-sm text-brand-orange">{social.handle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-brand-cream p-6">
              <h2 className="text-lg font-semibold text-gray-900">Wholesale & partnerships</h2>
              <p className="mt-2 text-sm text-gray-600">
                Interested in carrying Dingersville at your pro shop, course, or brand? Reach out via the form and we'll talk.
              </p>
              <Link
                href="/shop"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors"
              >
                Shop first
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
