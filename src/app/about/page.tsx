import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';

export const metadata = {
  title: 'About Us - ECT Security',
  description: 'Professional security services across California and Nevada. Licensed, trained guards.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading as="h1" className="mb-6">
                About ECT Security
              </Heading>
              <p className="text-xl text-gray-300">
                Professional event security and crowd control services across California and Nevada
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    ECT Security provides professional, reliable security services for events, venues, and facilities across California and Nevada. Our team of licensed guards brings expertise in crowd management, access control, and emergency response.
                  </p>
                  <p>
                    We understand that every event and venue has unique security needs. That's why we tailor our approach to match your specific requirements, ensuring safety without compromising the guest experience.
                  </p>
                </div>
              </div>

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
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
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
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
