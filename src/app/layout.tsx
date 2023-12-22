import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/Navbar/Navbar'

const noto = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
