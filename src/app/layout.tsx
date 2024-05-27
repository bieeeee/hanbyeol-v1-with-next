import type { Metadata } from 'next'
import './globals.scss'
import Navbar from '@/components/Navbar/Navbar'

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
      <body className="font-PSN">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
