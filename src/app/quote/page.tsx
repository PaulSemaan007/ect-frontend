import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
import { QuoteForm } from '@/components/QuoteForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Get a Quote - ECT Security',
  description: 'Request a custom security quote for your event or venue',
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-4 text-center">
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

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <QuoteForm />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
