import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, AnimateOnScroll } from '@/components/ui';
import { QuoteForm } from '@/components/QuoteForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Get a Free Security Quote',
  description:
    'Request a free, custom security quote for your event, venue, or facility. ECT Security provides licensed guards across California and Nevada.',
  alternates: { canonical: '/quote' },
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" gradient className="mb-4 text-center">
              Get a Custom Security Quote
            </Heading>
            <p className="text-gray-300 text-center mb-12 text-lg">
              Fill out the form below or call us at{' '}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="text-neon hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </p>

            <AnimateOnScroll direction="scale">
              <div className="glass-neon elevated-neon border border-gray-800 rounded-lg p-8">
                <QuoteForm />
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
