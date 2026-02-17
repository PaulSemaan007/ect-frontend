import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Thank You',
  description:
    'Thank you for contacting ECT Security. We will review your request and respond within one business day.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <Container size="md">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
                <svg
                  className="checkmark-animated w-24 h-24"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    stroke="var(--color-neon-primary)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    stroke="var(--color-neon-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <Heading as="h1" className="mb-4">
                Thank You!
              </Heading>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;ve received your submission and will get back to you within 24 hours.
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
                    <span>You&apos;ll receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon mr-2">•</span>
                    <span>We&apos;ll contact you within 24 hours to discuss next steps</span>
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
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="text-neon hover:underline"
                  >
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
