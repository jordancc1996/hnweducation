import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2c5530" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="HNW Education" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HNW Education" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

