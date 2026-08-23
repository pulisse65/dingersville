import Head from 'next/head'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import { SITE } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{`${SITE.name} — ${SITE.tagline}`}</title>
        <meta name="description" content={SITE.description} />
      </Head>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
