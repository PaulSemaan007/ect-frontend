import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Thank You - ECT Security',
  description: 'Thank you for contacting ECT Security',
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon/10 border-2 border-neon mb-6">
                <svg className="w-10 h-10 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <Heading as="h1" className="mb-4">
                Thank You!
              </Heading>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We've received your submission and will get back to you within 24 hours.
              </p>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8 max-w-md mx-auto">
                <h2 className="text-lg font-semibold text-foreground mb-3">What Happens Next?</h2>
                <ul className="text-left text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-neon mr-2">•</span>
                    <span>Our team will review your information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon mr-2">•</span>
                    <span>You'll receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon mr-2">•</span>
                    <span>We'll contact you within 24 hours to discuss next steps</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button href="/" variant="primary">
                  Back to Home
                </Button>
                <Button href="/services" variant="outline">
                  View Services
                </Button>
              </div>

              <div className="text-gray-400">
                <p className="mb-2">Need immediate assistance?</p>
                <p className="text-foreground">
                  Call us at{' '}
                  <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-neon hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
