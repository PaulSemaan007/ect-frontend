import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

export const metadata = {
  title: 'Terms of Service - ECT Security',
  description: 'ECT Security terms of service and conditions',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-8">
              Terms of Service
            </Heading>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Agreement</h2>
              <p className="text-gray-300">
                By engaging ECT Security services, you agree to these terms and conditions. All
                security services are provided subject to availability and proper licensing
                requirements.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cancellation Policy</h2>
              <p className="text-gray-300">
                Cancellations must be made at least 48 hours in advance. Late cancellations may
                incur fees.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Liability</h2>
              <p className="text-gray-300">
                ECT Security maintains appropriate liability insurance as required by California
                law. Our guards are trained professionals acting within their scope of authority.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
              <p className="text-gray-300">
                Questions about terms of service? Contact info@ectsecurity.com
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
