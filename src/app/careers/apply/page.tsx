import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, AnimateOnScroll } from '@/components/ui';
import { ApplyForm } from '@/components/ApplyForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Apply for Security Guard Positions',
  description:
    'Apply to become a licensed security guard with ECT Security. We provide training, competitive pay, and flexible scheduling for events, venues, and corporate sites.',
  alternates: { canonical: '/careers/apply' },
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" gradient className="mb-4 text-center">
              Join Our Team
            </Heading>
            <p className="text-gray-300 text-center mb-12 text-lg">
              Submit your application below or email your resume to{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-neon hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>

            <AnimateOnScroll direction="scale">
              <div className="glass-neon elevated-neon border border-gray-800 rounded-lg p-8">
                <ApplyForm />
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
