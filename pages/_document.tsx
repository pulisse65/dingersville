import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://images-api.printify.com" />
      </Head>
      <body className="bg-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
