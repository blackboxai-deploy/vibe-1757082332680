import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { MobileLayout } from '@/components/Layout/MobileLayout'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'J&Z CAKE WORLD - Premium Homemade Cakes',
  description: '100% Homemade Cakes – Delivered Fresh. Order premium cakes online from J&Z CAKE WORLD. Birthday, Wedding, Anniversary, Designer & Custom cakes.',
  keywords: 'premium cakes, homemade cakes, birthday cakes, wedding cakes, custom cakes, online cake delivery',
  authors: [{ name: 'J&Z CAKE WORLD' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased bg-gradient-to-br from-neutral-50 via-white to-gold-50 min-h-screen">
        <MobileLayout>
          {children}
        </MobileLayout>
      </body>
    </html>
  )
}