import type { Metadata } from 'next'
import './globals.css'
import { cn } from '../utils'
import { inter, roadrage, roboto } from '@/fonts'
import { Header } from '@/components/nav'

export const metadata: Metadata = {
  title: {
    default: 'Ticz - Event Ticketing Platform',
    template: '%s | Ticz',
  },
  description:
    'A modern event ticketing platform for tech conferences and meetups',
  keywords: ['events', 'tickets', 'tech conferences', 'meetups', 'booking'],
  authors: [{ name: 'Ticz Team' }],
  creator: 'Ticz Team',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#001a1a' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ticz.com',
    title: 'Ticz - Event Ticketing Platform',
    description:
      'A modern event ticketing platform for tech conferences and meetups',
    siteName: 'Ticz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticz - Event Ticketing Platform',
    description:
      'A modern event ticketing platform for tech conferences and meetups',
    creator: '@ticz',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main
          className={cn(
            'main-custom-style mx-auto min-h-screen max-w-[1440px] scroll-smooth bg-[#001a1a] text-white antialiased',
            roboto.className,
            roadrage.variable,
            inter.variable
          )}
        >
          <Header />
          <section className="pt-28">
            <div className="container mx-auto max-w-[800px] rounded-[20px] border border-[#0E464F] bg-[#041E23] px-4 py-12 md:p-[12px] lg:rounded-[40px] lg:p-[48px]">
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
