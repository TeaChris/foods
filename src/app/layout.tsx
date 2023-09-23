import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const comfort = localFont({
  src: '../../public/fonts/Comfortaa-Light.ttf',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Ber-Foods',
  description: 'Your Home For Nourishing Diets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('antialiased light')}>
      <body
        className={`text-[1rem] font-bold text-neutral-950 w-screen bg-neutral-200 ${comfort.className}`}
      >
        <Navbar />
        <div className="w-full h-full pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
