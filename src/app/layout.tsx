import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cevithereza Paiva',
  description: 'Site de divulgação do serviço de advocacia, prestado pela empresa Cevithereza Paiva',
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
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
