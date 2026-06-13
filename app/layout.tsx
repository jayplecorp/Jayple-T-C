import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jayple.in'),
  title: {
    default: 'Jayple — Book Salon Appointments Instantly | No Waiting in Trichy',
    template: '%s | Jayple',
  },
  description:
    'Discover & book verified salons in Trichy instantly. Zero wait time, wallet cashback, secure UPI payments. Download Jayple — India\'s premium salon booking app.',
  keywords: [
    'salon booking Trichy',
    'book salon appointment',
    'haircut booking app India',
    'Jayple',
    'best salons Trichy',
    'instant salon booking',
    'beauty booking app',
    'wellness booking India',
  ],
  authors: [{ name: 'Jayple' }],
  creator: 'Jayple',
  publisher: 'Jayple',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jayple.in',
    siteName: 'Jayple',
    title: 'Jayple — Book Salon Appointments Instantly',
    description: 'Discover trusted salons in Trichy, compare services, book instant appointments, and earn cashback.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jayple — Premium Salon Booking' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayple — India\'s Premium Salon Booking Platform',
    description: 'Book verified salons in Trichy. Zero wait time, instant confirmation, wallet cashback.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://jayple.in/' },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#07132A',
  },
}

export const viewport: Viewport = {
  themeColor: '#07132A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Jayple',
                  url: 'https://jayple.in',
                  logo: 'https://jayple.in/logo.png',
                  sameAs: [
                    'https://instagram.com/jayple',
                    'https://linkedin.com/company/jayple',
                  ],
                },
                {
                  '@type': 'WebSite',
                  name: 'Jayple',
                  url: 'https://jayple.in',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://jayple.in/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'MobileApplication',
                  name: 'Jayple',
                  operatingSystem: 'ANDROID, IOS',
                  applicationCategory: 'LifestyleApplication',
                  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
