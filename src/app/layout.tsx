import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Head from 'next/head'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cevithereza Paiva',
  description: 'Site de divulgação do serviço de advocacia, prestado pela empresa Cevithereza Paiva.',
  icons: {
    icon: [
      '/favicon/favicon.ico'
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
          <meta charSet="UTF-8" />
          <title>Cevithereza Paiva Advocacia</title>
          <meta name="description" content="Site de divulgação do serviço de advocacia, prestado pela empresa Cevithereza Paiva." key="desc" />
      </Head>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
