import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, AnimateOnScroll, SectionDivider } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Service Area - ECT Security',
  description: 'ECT Security provides professional security services across California and Nevada',
};

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" gradient className="mb-8 text-center">
              Our Service Area
            </Heading>

            <p className="text-xl text-gray-300 text-center mb-12">
              ECT Security provides professional security services throughout California and Nevada
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {siteConfig.serviceAreas.map((area, i) => (
                <AnimateOnScroll key={area} delay={i * 100}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-neon/50 transition-all hover-lift card-shimmer">
                    <h2 className="text-xl font-bold text-foreground">{area}</h2>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <SectionDivider variant="gradient" />

            <AnimateOnScroll direction="up">
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Coverage Details
                </h2>
                <p className="text-gray-300 mb-6 text-center">
                  We provide security services across California and Nevada, including:
                </p>
                <ul className="space-y-2 text-gray-300 max-w-lg mx-auto">
                  <li>• Events & festivals of all sizes</li>
                  <li>• Venues & entertainment facilities</li>
                  <li>• Corporate campuses & offices</li>
                  <li>• Parking management & traffic direction</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={200}>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact us for security services anywhere in California and Nevada
                </p>
                <p className="text-gray-400">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="text-neon hover:underline text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
