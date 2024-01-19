import type { Metadata } from 'next'
import './globals.scss'
import Navbar from '@/components/Navbar/Navbar'
import localFont from 'next/font/local'

const neo = localFont({
  src: "./fonts/neodgm_code.woff2",
  display: "swap"
})

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
      <body className={neo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
