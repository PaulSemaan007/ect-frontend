import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GridBackground } from '@/components/ui/GridBackground';
import { SmoothScrollProvider } from '@/lib/smooth-scroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const BASE_URL = 'https://ectsecurity.com';

export const metadata: Metadata = {
  title: {
    default: 'ECT Security - Event Control Team',
    template: '%s | ECT Security',
  },
  description:
    'Professional security services and event management solutions across California and Nevada. Licensed guards, de-escalation trained.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ECT Security',
    title: 'ECT Security - Professional Event Security',
    description:
      'Professional security services across California and Nevada. Licensed guards, crowd management, and event security.',
    images: [
      {
        url: '/images/hero-festival.png',
        width: 1200,
        height: 630,
        alt: 'ECT Security team providing event security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECT Security - Professional Event Security',
    description:
      'Professional security services across California and Nevada. Licensed guards, crowd management, and event security.',
    images: ['/images/hero-festival.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero-festival.png" fetchPriority="high" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'ECT Security',
              description:
                'Professional security services and event management solutions across California and Nevada.',
              url: BASE_URL,
              telephone: '+17144744788',
              email: 'info@ectsecurity.com',
              areaServed: [
                { '@type': 'State', name: 'California' },
                { '@type': 'State', name: 'Nevada' },
              ],
              serviceType: [
                'Event Security',
                'Venue Security',
                'Corporate Security',
                'Parking Assistance',
              ],
              image: `${BASE_URL}/images/hero-festival.png`,
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-neon focus:text-gray-950 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to content
        </a>
        <SmoothScrollProvider>
          <GridBackground>{children}</GridBackground>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
