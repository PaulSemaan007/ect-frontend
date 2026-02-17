import { notFound } from 'next/navigation';
import Image from 'next/image';
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

const serviceImages: Record<string, { src: string; alt: string }> = {
  events: { src: '/images/services-event.png', alt: 'Large outdoor event secured by ECT Security' },
  venues: { src: '/images/services-corporate.png', alt: 'Venue entrance secured by ECT Security' },
  corporate: {
    src: '/images/services-corporate.png',
    alt: 'Corporate facility secured by ECT Security',
  },
  parking: { src: '/images/services-event.png', alt: 'Event parking managed by ECT Security' },
};

const serviceContent: Record<
  string,
  {
    title: string;
    description: string;
    features: string[];
    details: string[];
  }
> = {
  events: {
    title: 'Events & Festivals Security',
    description:
      'Professional crowd control and security management for festivals, concerts, and large-scale events across California and Nevada.',
    features: [
      'Crowd Management & Control',
      'Access Control & Ticketing',
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
    description:
      'Comprehensive security solutions for theaters, arenas, concert halls, and entertainment venues.',
    features: [
      'Perimeter & Access Control',
      'Patron Screening & Bag Checks',
      'Incident Response & Management',
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
    description:
      'Executive protection, facility security, and risk management for corporate environments.',
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
  parking: {
    title: 'Parking Assistance',
    description:
      'Professional parking lot management and traffic direction for events, venues, and facilities across California and Nevada.',
    features: [
      'Traffic & Lot Management',
      'Parking Direction & Guidance',
      'ADA Compliance Monitoring',
      'Valet Coordination',
      'Event Parking Planning',
      'Lot Security & Patrols',
    ],
    details: [
      'Our parking assistance team ensures smooth traffic flow and organized parking for events of all sizes.',
      'We handle everything from directing vehicles and managing lots to coordinating with valet services and ensuring ADA compliance.',
      'Professional staff trained in traffic management, customer service, and emergency procedures.',
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
        <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={serviceImages[resolvedParams.service]?.src || '/images/services-event.png'}
              alt={serviceImages[resolvedParams.service]?.alt || 'ECT Security services'}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-950/70 to-gray-950/85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-transparent" />
          </div>
          <Container size="lg">
            <div className="relative z-10 max-w-3xl py-20">
              <Heading as="h1" gradient className="mb-6">
                {service.title}
              </Heading>
              <p className="text-xl text-gray-300">{service.description}</p>
            </div>
          </Container>
        </section>

        <SectionDivider variant="gradient" />

        {/* Features & Details */}
        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <AnimateOnScroll direction="left">
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
              </AnimateOnScroll>

              {/* Details */}
              <AnimateOnScroll direction="right" delay={200}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose ECT?</h2>
                  <div className="space-y-4 text-gray-300">
                    {service.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        {/* Service Areas */}
        <Section className="bg-gray-900">
          <Container>
            <AnimateOnScroll direction="up">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Areas</h2>
                <p className="text-gray-300 mb-6">
                  We provide security services throughout California and Nevada:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {siteConfig.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-gray-950 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-neon/50 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        {/* CTA */}
        <Section>
          <Container>
            <AnimateOnScroll direction="up">
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
