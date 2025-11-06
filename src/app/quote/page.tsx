import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
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
              <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-neon hover:underline">
                {siteConfig.contact.phone}
              </a>
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <p className="text-gray-300 text-center mb-6">
                Form implementation in progress. Please contact us directly:
              </p>
              <div className="space-y-4 text-center">
                <p className="text-foreground font-semibold">
                  Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-neon hover:underline">{siteConfig.contact.email}</a>
                </p>
                <p className="text-foreground font-semibold">
                  Phone: <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-neon hover:underline">{siteConfig.contact.phone}</a>
                </p>
                <p className="text-gray-400">{siteConfig.contact.hours}</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-950 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">What to Include in Your Request</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Event name and type</li>
                <li>• Date, time, and location</li>
                <li>• Expected number of attendees</li>
                <li>• Security services needed</li>
                <li>• Any special requirements or concerns</li>
              </ul>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
