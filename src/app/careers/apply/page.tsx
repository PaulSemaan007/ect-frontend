import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
import { ApplyForm } from '@/components/ApplyForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Apply Now - ECT Security Careers',
  description: 'Submit your application to join the ECT Security team',
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-4 text-center">
              Join Our Team
            </Heading>
            <p className="text-gray-300 text-center mb-12 text-lg">
              Submit your application below or email your resume to{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-neon hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <ApplyForm />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
