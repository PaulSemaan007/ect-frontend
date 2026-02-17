import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
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
              Submit your application or email your resume to{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-neon hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <p className="text-gray-300 text-center mb-6">
                Form implementation in progress. Please email your application to:
              </p>
              <div className="space-y-4 text-center">
                <p className="text-foreground font-semibold">
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-neon hover:underline text-xl">{siteConfig.contact.email}</a>
                </p>
                <p className="text-gray-400">We'll review your application and get back to you within 2-3 business days</p>
              </div>
            </div>

            <div className="mt-12 bg-gray-950 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Include in Your Application</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Resume (PDF format)</li>
                <li>• Guard Card number (if applicable)</li>
                <li>• Relevant certifications (CPR, First Aid, etc.)</li>
                <li>• Previous security experience</li>
                <li>• Availability (weeknights, weekends, on-call)</li>
              </ul>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
