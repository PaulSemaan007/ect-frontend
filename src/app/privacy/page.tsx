import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

export const metadata = {
  title: 'Privacy Policy - ECT Security',
  description: 'ECT Security privacy policy and data protection information',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-8">
              Privacy Policy
            </Heading>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-300">
                ECT Security collects information you provide when requesting quotes, applying for
                positions, or contacting us. This may include name, email, phone number, and event
                details.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-300">
                We use collected information to provide security services, respond to inquiries,
                process applications, and communicate about our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Protection</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information and
                do not sell or share your data with third parties except as necessary to provide our
                services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-300">
                For questions about this privacy policy, please contact us at info@ectsecurity.com
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
