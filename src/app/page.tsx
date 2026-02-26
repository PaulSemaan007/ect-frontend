import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'ECT Security - Event Control Team',
  description:
    'Professional security services across California and Nevada. Contact us for a free quote.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const heroData = {
    headline: 'ECT Security — Event Control Team',
    subheadline: null,
    ctaLabel: 'Get a Quote',
    ctaUrl: '/quote',
    backgroundImage: null,
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero data={heroData} />

        {/* Contact Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="text-xl font-semibold text-neon neon-glow-sm hover:opacity-80 transition-opacity"
              >
                {siteConfig.contact.phone}
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xl font-semibold text-neon neon-glow-sm hover:opacity-80 transition-opacity"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
