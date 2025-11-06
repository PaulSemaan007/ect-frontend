import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

export const metadata = {
  title: 'Licenses & Insurance - ECT Security',
  description: 'ECT Security licensing and insurance information',
};

export default function LicensesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-8">
              Licenses & Insurance
            </Heading>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">California Licensed</h2>
                <p className="text-gray-300">
                  ECT Security operates under full compliance with California state regulations.
                  All security guards hold valid California Guard Cards and pass comprehensive background checks.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Insurance Coverage</h2>
                <p className="text-gray-300">
                  We maintain comprehensive general liability and workers' compensation insurance
                  to protect our clients, guards, and the public.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Certifications</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• California Bureau of Security & Investigative Services (BSIS)</li>
                  <li>• First Aid & CPR Certified Guards Available</li>
                  <li>• Crowd Control & De-escalation Training</li>
                  <li>• Emergency Response Protocols</li>
                </ul>
              </div>

              <div className="bg-gray-950 border border-neon/30 rounded-lg p-6">
                <h2 className="text-xl font-bold text-neon mb-3">Certificate Requests</h2>
                <p className="text-gray-300">
                  For certificate of insurance or license verification, please contact{' '}
                  <a href="mailto:info@ectsecurity.com" className="text-neon hover:underline">
                    info@ectsecurity.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
