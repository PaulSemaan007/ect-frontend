import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';
import { siteConfig } from '@/config/site';

const serviceContent: Record<string, {
  title: string;
  description: string;
  features: string[];
  details: string[];
}> = {
  events: {
    title: 'Events & Festivals Security',
    description: 'Professional crowd control and security management for festivals, concerts, and large-scale events across Southern California.',
    features: [
      'Crowd Management & Control',
      'Access Control & Ticketing',
      'VIP & Backstage Protection',
      'Emergency Response Planning',
      'Bag Checks & Screening',
      'Perimeter Security',
    ],
    details: [
      'Our event security specialists are experienced in handling crowds of all sizes, from intimate gatherings to festivals with tens of thousands of attendees.',
      'We provide comprehensive security planning, risk assessment, and on-site coordination to ensure your event runs smoothly and safely.',
      'All guards are licensed, trained in de-escalation techniques, and equipped to handle any situation professionally.',
    ],
  },
  venues: {
    title: 'Venue Security Services',
    description: 'Comprehensive security solutions for theaters, arenas, concert halls, and entertainment venues.',
    features: [
      'Perimeter & Access Control',
      'Patron Screening & Bag Checks',
      'Incident Response & Management',
      '24/7 Monitoring & Patrol',
      'Staff Coordination',
      'Emergency Evacuation',
    ],
    details: [
      'We understand the unique security challenges of entertainment venues and provide tailored solutions for each location.',
      'Our team works seamlessly with your staff to create a safe environment while maintaining a welcoming atmosphere for guests.',
      'Licensed guards trained in customer service, conflict resolution, and emergency response.',
    ],
  },
  corporate: {
    title: 'Corporate Security Solutions',
    description: 'Executive protection, facility security, and risk management for corporate environments.',
    features: [
      'Executive & VIP Protection',
      'Facility Access Control',
      'Threat Assessment',
      'Workplace Violence Prevention',
      'Event Security',
      'Emergency Response',
    ],
    details: [
      'Protect your executives, employees, and assets with our professional corporate security services.',
      'We provide discreet, professional protection that maintains business operations while ensuring safety.',
      'Custom security plans tailored to your organization specific needs and risk profile.',
    ],
  },
  nightlife: {
    title: 'Nightlife & Hospitality Security',
    description: 'Specialized security services for bars, clubs, restaurants, and hospitality venues.',
    features: [
      'Door Security & ID Verification',
      'Crowd Control',
      'Conflict De-escalation',
      'Patron Safety',
      'Cash Handling Security',
      'Closing Procedures',
    ],
    details: [
      'Our nightlife security team is trained to maintain a safe, welcoming environment while managing the unique challenges of late-night venues.',
      'We handle everything from ID checks and crowd control to conflict resolution and emergency response.',
      'Professional guards who understand the balance between security and hospitality.',
    ],
  },
  private: {
    title: 'Private Security Services',
    description: 'Discreet personal protection, residential security, and private event security.',
    features: [
      'Personal Protection & Bodyguards',
      'Residential Security',
      'Private Event Security',
      'Travel Security',
      'Risk Assessment',
      'Surveillance Detection',
    ],
    details: [
      'Discrete, professional security services for high-net-worth individuals, families, and private events.',
      'Our private security specialists provide peace of mind without disrupting your lifestyle.',
      'Customized security plans based on thorough risk assessment and your specific needs.',
    ],
  },
};

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = serviceContent[resolvedParams.service];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container size="lg">
            <div className="max-w-3xl">
              <Heading as="h1" className="mb-6">
                {service.title}
              </Heading>
              <p className="text-xl text-gray-300">
                {service.description}
              </p>
            </div>
          </Container>
        </Section>

        {/* Features & Details */}
        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300">
                      <span className="text-neon mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose ECT?</h2>
                <div className="space-y-4 text-gray-300">
                  {service.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Service Areas */}
        <Section className="bg-gray-900">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Areas</h2>
              <p className="text-gray-300 mb-6">
                We provide security services throughout Southern California:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section>
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Heading as="h2" className="mb-4">
                Ready to Get Started?
              </Heading>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us today for a custom security quote tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" variant="primary" size="lg">
                  Get a Quote
                </Button>
                <Button href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} variant="outline" size="lg">
                  Call {siteConfig.contact.phone}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
