import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Container,
  Section,
  Heading,
  Button,
  AnimateOnScroll,
  SectionDivider,
} from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Service Area - California & Nevada Security',
  description:
    'ECT Security provides professional event security, venue security, and corporate security services across California and Nevada.',
  alternates: {
    canonical: '/service-area',
  },
};

const californiaRegions = [
  {
    name: 'Southern California',
    cities: [
      'Los Angeles',
      'San Diego',
      'Anaheim',
      'Santa Ana',
      'Irvine',
      'Long Beach',
      'Riverside',
      'San Bernardino',
      'Ontario',
      'Pasadena',
      'Torrance',
      'Pomona',
    ],
  },
  {
    name: 'Central California',
    cities: ['Fresno', 'Bakersfield', 'Stockton', 'Modesto', 'Visalia', 'Santa Barbara'],
  },
  {
    name: 'Northern California',
    cities: [
      'San Francisco',
      'San Jose',
      'Oakland',
      'Sacramento',
      'Santa Rosa',
      'Sunnyvale',
      'Fremont',
      'Hayward',
    ],
  },
];

const nevadaCities = ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City'];

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container size="md">
            <Heading as="h1" gradient className="mb-6 text-center">
              Our Service Area
            </Heading>
            <p className="text-xl text-gray-300 text-center">
              Professional security services throughout California and Nevada
            </p>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        {/* California */}
        <Section>
          <Container size="lg">
            <AnimateOnScroll direction="up">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">California</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {californiaRegions.map((region, i) => (
                <AnimateOnScroll key={region.name} direction="up" delay={i * 100}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-neon/30 transition-colors">
                    <h3 className="text-lg font-semibold text-neon mb-4">{region.name}</h3>
                    <ul className="space-y-2">
                      {region.cities.map((city) => (
                        <li key={city} className="text-gray-300 flex items-center">
                          <span className="text-neon/60 mr-2 text-xs">&#9679;</span>
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        {/* Nevada */}
        <Section className="bg-gray-900">
          <Container size="lg">
            <AnimateOnScroll direction="up">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nevada</h2>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={100}>
              <div className="max-w-2xl mx-auto bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-neon/30 transition-colors">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {nevadaCities.map((city) => (
                    <div key={city} className="text-gray-300 flex items-center">
                      <span className="text-neon/60 mr-2 text-xs">&#9679;</span>
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        {/* Services Available */}
        <Section>
          <Container>
            <AnimateOnScroll direction="up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Services Available in All Areas
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {siteConfig.nav.services.map((service, i) => (
                <AnimateOnScroll key={service.href} direction="up" delay={i * 75}>
                  <a
                    href={service.href}
                    className="block bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-neon/50 transition-all hover-lift"
                  >
                    <span className="text-foreground font-medium">{service.label}</span>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        {/* CTA */}
        <Section className="bg-gray-900">
          <Container>
            <AnimateOnScroll direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <Heading as="h2" className="mb-4">
                  Need Security in Your Area?
                </Heading>
                <p className="text-gray-300 mb-8 text-lg">
                  Contact us for a free quote — we serve all of California and Nevada
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/quote" variant="primary" size="lg">
                    Get a Quote
                  </Button>
                  <Button
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    variant="outline"
                    size="lg"
                  >
                    Call {siteConfig.contact.phone}
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
