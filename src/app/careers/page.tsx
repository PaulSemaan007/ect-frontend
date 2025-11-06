import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';

export const metadata = {
  title: 'Careers - Join ECT Security',
  description: 'Join our team of professional security guards. Licensed positions available across Southern California.',
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading as="h1" className="mb-6">
                Join the ECT Security Team
              </Heading>
              <p className="text-xl text-gray-300 mb-8">
                We're hiring licensed security professionals across Southern California
              </p>
              <Button href="/careers/apply" variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us</h2>
                <ul className="space-y-4">
                  {[
                    'Competitive pay rates',
                    'Flexible scheduling - weeknights, weekends, on-call',
                    'Work at premier events and venues',
                    'Professional development and training',
                    'Supportive team environment',
                    'Opportunities for advancement',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start text-gray-300">
                      <span className="text-neon mr-3 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Requirements</h2>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• Must be 18 years or older</li>
                  <li>• Valid California Guard Card (or ability to obtain)</li>
                  <li>• Authorized to work in the United States</li>
                  <li>• Pass background check</li>
                  <li>• Reliable transportation</li>
                  <li>• Professional attitude and appearance</li>
                </ul>

                <div className="bg-gray-900 border border-neon/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-neon mb-3">Open Positions</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Event Security Officers</li>
                    <li>• Venue Security Guards</li>
                    <li>• Crowd Control Specialists</li>
                    <li>• VIP Protection Officers</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-gray-900">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Heading as="h2" className="mb-4">
                Ready to Apply?
              </Heading>
              <p className="text-gray-300 mb-8 text-lg">
                Submit your application and join our professional security team
              </p>
              <Button href="/careers/apply" variant="primary" size="lg">
                Submit Application
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
