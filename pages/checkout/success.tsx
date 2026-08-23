import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { Stripe } from 'stripe'

interface SuccessPageProps {
  session: Stripe.Checkout.Session
}

export default function CheckoutSuccess({ session }: SuccessPageProps) {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <svg className="h-8 w-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Order confirmed!</h1>
            <p className="mt-3 text-lg text-gray-600">Thanks for your purchase. Your gear is being picked and packed.</p>

            {session?.payment_intent && (
              <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-left text-sm">
                <p className="font-semibold text-gray-700">Order summary</p>
                <div className="mt-2 space-y-1 text-gray-500">
                  <p>Amount paid: <span className="font-semibold text-gray-900">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: session.currency || 'usd', minimumFractionDigits: 2 }).format((session.amount_total || 0) / 100)}
                  </span></p>
                  <p> receipt: <span className="font-mono text-xs">{[String(session.payment_intent)]}</span></p>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/shop" className="inline-flex items-center rounded-full bg-brand-orange px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#E56A1A] transition-colors">
                Continue shopping
              </Link>
              <Link href="/" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string
  if (!sessionId) {
    return { redirect: { destination: '/cart', permanent: false } }
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-10-28.acacia' })
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    if (!session || session.payment_status !== 'paid') {
      return { redirect: { destination: '/cart', permanent: false } }
    }
    return { props: { session } }
  } catch {
    return { redirect: { destination: '/cart', permanent: false } }
  }
}
