import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button, AnimateOnScroll, SectionDivider } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Security Services - ECT Security',
  description: 'Professional security services for events, venues, and corporate clients across California and Nevada',
};

const services = [
  {
    title: 'Events & Festivals',
    href: '/services/events',
    description: 'Professional crowd control and security for festivals, concerts, and large-scale events.',
    features: ['Crowd Management', 'Access Control', 'Emergency Response'],
  },
  {
    title: 'Venue Security',
    href: '/services/venues',
    description: 'Comprehensive security solutions for theaters, arenas, and entertainment venues.',
    features: ['Perimeter Security', 'Bag Checks', 'Incident Response'],
  },
  {
    title: 'Corporate Security',
    href: '/services/corporate',
    description: 'Executive protection and facility security for corporate environments.',
    features: ['Executive Protection', 'Facility Security', 'Access Management', 'Threat Assessment'],
  },
  {
    title: 'Parking Assistance',
    href: '/services/parking',
    description: 'Professional parking management and traffic direction for events, venues, and facilities.',
    features: ['Traffic & Lot Management', 'Parking Direction', 'ADA Compliance', 'Event Parking Planning'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Heading as="h1" gradient className="mb-6">
                Professional Security Services
              </Heading>
              <p className="text-xl text-gray-300 mb-8">
                Licensed, trained guards for events, venues, and facilities across California and Nevada
              </p>
              <Button href="/quote" variant="primary" size="lg">
                Get a Custom Quote
              </Button>
            </div>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        {/* Services Grid */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <AnimateOnScroll key={service.href} delay={i * 100}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-neon/50 transition-all group hover-lift hover-glow card-shimmer h-full">
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-neon transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300 text-sm">
                          <span className="text-neon mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-neon hover:underline font-medium"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
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
                Ready to Secure Your Event?
              </Heading>
              <p className="text-gray-300 mb-8 text-lg">
                Get a custom quote tailored to your specific security needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" variant="primary" size="lg">
                  Request a Quote
                </Button>
                <Button href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} variant="outline" size="lg">
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
