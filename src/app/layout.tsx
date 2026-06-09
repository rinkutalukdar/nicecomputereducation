import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: 'NICE Computer Education — Pathsala, Assam',
    template: '%s | NICE Computer Education',
  },
  description:
    'Professional computer education and IT training in Pathsala, Assam. ISO-certified courses in DCA, ADCA, Web Design, Tally GST, Digital Marketing and more.',
  keywords: [
    'computer education Pathsala',
    'computer course Assam',
    'DCA ADCA Pathsala',
    'Tally GST course',
    'web design course Pathsala',
    'NICE computer education',
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicecomputereducation.in'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'NICE Computer Education',
    title: 'NICE Computer Education — Pathsala, Assam',
    description:
      'Government certified computer education in Pathsala, Assam. DCA, ADCA, Web Design, Tally GST, Digital Marketing and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NICE Computer Education — Pathsala, Assam',
    description:
      'Government certified computer education in Pathsala, Assam. DCA, ADCA, Web Design, Tally GST, Digital Marketing and more.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  )
}