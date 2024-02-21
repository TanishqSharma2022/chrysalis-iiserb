
import Footer from 'components/Footer'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body className="bg-white text-black" suppressHydrationWarning>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
