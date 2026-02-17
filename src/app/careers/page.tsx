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

export const metadata: Metadata = {
  title: 'Security Guard Jobs in California & Nevada',
  description:
    'Join ECT Security as a licensed security guard. Competitive pay, flexible scheduling, and professional training. Now hiring across California and Nevada.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading as="h1" gradient className="mb-6">
                Join the ECT Security Team
              </Heading>
              <p className="text-xl text-gray-300 mb-8">
                We&apos;re hiring licensed security professionals across California and Nevada
              </p>
              <Button href="/careers/apply" variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        <Section>
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us</h2>
                  <ul className="space-y-4">
                    {[
                      'Competitive pay rates',
                      'Flexible scheduling - weeknights, weekends, on-call',
                      'Work at premier events and venues',
                      'Professional development and training',
                      'Supportive team environment',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start text-gray-300">
                        <span className="text-neon mr-3 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll direction="right" delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Requirements</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Must be 18 years or older</li>
                    <li>• Valid California Guard Card (or ability to obtain)</li>
                    <li>• Authorized to work in the United States</li>
                    <li>• Pass background check</li>
                    <li>• Reliable transportation</li>
                    <li>• Professional attitude and appearance</li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        <Section className="bg-gray-900">
          <Container>
            <AnimateOnScroll direction="up">
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
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
