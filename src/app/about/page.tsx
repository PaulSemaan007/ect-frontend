import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';
import {
  Container,
  Section,
  Heading,
  Button,
  AnimateOnScroll,
  SectionDivider,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Professional security services across California and Nevada. Licensed, trained guards.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-team.png"
              alt="ECT Security team standing in formation"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/85 via-gray-950/70 to-gray-950/85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-transparent" />
          </div>
          <Container>
            <div className="relative z-10 max-w-3xl mx-auto text-center py-20">
              <Heading as="h1" gradient className="mb-6">
                About ECT Security
              </Heading>
              <p className="text-xl text-gray-300">
                Professional event security and crowd control services across California and Nevada
              </p>
            </div>
          </Container>
        </section>

        <SectionDivider variant="gradient" />

        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      ECT Security provides professional, reliable security services for events,
                      venues, and facilities across California and Nevada. Our team of licensed
                      guards brings expertise in crowd management, access control, and emergency
                      response.
                    </p>
                    <p>
                      We understand that every event and venue has unique security needs.
                      That&apos;s why we tailor our approach to match your specific requirements,
                      ensuring safety without compromising the guest experience.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right" delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us</h2>
                  <ul className="space-y-4">
                    {[
                      'All guards are licensed and background-checked',
                      'Specialized training in de-escalation and conflict resolution',
                      'Experience with events of all sizes',
                      'Professional, tactical approach to security',
                    ].map((item) => (
                      <li key={item} className="flex items-start text-gray-300">
                        <span className="text-neon mr-3 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        <Section>
          <Container>
            <AnimateOnScroll direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <Heading as="h2" className="mb-4">
                  Ready to Work Together?
                </Heading>
                <p className="text-gray-300 mb-8 text-lg">
                  Get a custom security quote for your event or venue
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/quote" variant="primary" size="lg">
                    Get a Quote
                  </Button>
                  <Button href="/careers" variant="outline" size="lg">
                    Join Our Team
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />

      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ECT Security',
            url: 'https://ectsecurity.com',
            logo: 'https://ectsecurity.com/images/hero-festival.png',
            description:
              'Professional event security and crowd control services across California and Nevada.',
            telephone: siteConfig.contact.phone,
            email: siteConfig.contact.email,
            areaServed: siteConfig.serviceAreas.map((area) => ({
              '@type': 'State',
              name: area,
            })),
            sameAs: Object.values(siteConfig.socials),
            knowsAbout: [
              'Event Security',
              'Venue Security',
              'Corporate Security',
              'Parking Assistance',
              'Crowd Management',
              'Access Control',
            ],
          }),
        }}
      />
    </>
  );
}
