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
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE.name} />
          <meta property="og:title" content={`${SITE.name} — ${SITE.tagline}`} />
          <meta property="og:description" content={SITE.description} />
          <meta property="og:image" content={`https://${SITE.domain}${SITE.ogImage}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${SITE.name} — ${SITE.tagline}`} />
          <meta name="twitter:description" content={SITE.description} />
          <meta name="twitter:image" content={`https://${SITE.domain}${SITE.ogImage}`} />
          <link rel="canonical" href={`https://${SITE.domain}`} />
          <link rel="icon" href="/brand/dinger-don-favicon.png" type="image/png" />
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
