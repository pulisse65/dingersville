import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'
import { CartProvider } from '@/lib/cart'
import '../styles/globals.css'
import '../styles/cart.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={SITE.description} />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body className="bg-white antialiased">
          <Navbar />
          <main id="main-content" className="min-h-screen">
            <Component {...pageProps} />
          </main>
          <Footer />
        </body>
      </>
    </CartProvider>
  )
}
