import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/Navbar/Navbar'

const ibm = Gothic_A1({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500'] })

export const metadata: Metadata = {
  title: 'Hanbyeol Kwon | Fullstack Developer',
  description: 'Fullstack JS/Ruby Developer based in Seoul.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
