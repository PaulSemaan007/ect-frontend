import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Service Area - ECT Security',
  description: 'ECT Security serves all of Southern California including LA, Orange, San Diego, Riverside, San Bernardino, and Ventura counties',
};

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-8 text-center">
              Our Service Area
            </Heading>

            <p className="text-xl text-gray-300 text-center mb-12">
              ECT Security provides professional security services throughout Southern California
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {siteConfig.serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-neon/50 transition-all"
                >
                  <h2 className="text-xl font-bold text-foreground">{area}</h2>
                </div>
              ))}
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Coverage Details</h2>
              <p className="text-gray-300 mb-6 text-center">
                We serve all cities and communities within these six Southern California counties,
                providing security services for:
              </p>
              <ul className="space-y-2 text-gray-300 max-w-lg mx-auto">
                <li>• Events & festivals of all sizes</li>
                <li>• Venues & entertainment facilities</li>
                <li>• Corporate campuses & offices</li>
                <li>• Nightlife & hospitality venues</li>
                <li>• Private events & residences</li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact us for security services anywhere in Southern California
              </p>
              <p className="text-gray-400">
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="text-neon hover:underline text-lg">
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
