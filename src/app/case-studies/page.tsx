import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading, Button } from '@/components/ui';

export const metadata = {
  title: 'Case Studies - ECT Security',
  description: 'Success stories from events and venues we have secured across Southern California',
};

const caseStudies = [
  {
    title: 'Major Music Festival - 50,000 Attendees',
    type: 'Festival Security',
    description: 'Provided comprehensive security for a three-day music festival in Los Angeles, managing crowd control, VIP protection, and emergency response.',
    results: ['Zero major incidents', '50+ guards deployed', '3-day event', 'Smooth operations'],
  },
  {
    title: 'Corporate Event Center',
    type: 'Venue Security',
    description: 'Long-term security partnership with premium event venue, providing access control, patron screening, and incident management.',
    results: ['24/7 coverage', 'Professional staff', 'Client retention', 'Positive feedback'],
  },
  {
    title: 'Nightclub Security Program',
    type: 'Nightlife Security',
    description: 'Implemented comprehensive security program for high-volume nightclub, including door security, ID verification, and conflict de-escalation.',
    results: ['Reduced incidents by 60%', 'Improved safety', 'Better atmosphere', 'Ongoing partnership'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Heading as="h1" className="mb-6">
                Success Stories
              </Heading>
              <p className="text-xl text-gray-300">
                Real results from events and venues we've secured
              </p>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="space-y-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-neon/50 transition-all"
                >
                  <div className="mb-4">
                    <span className="text-neon text-sm font-semibold">{study.type}</span>
                    <h2 className="text-2xl font-bold text-foreground mt-2">{study.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result) => (
                      <div key={result} className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
                        <p className="text-sm text-gray-400">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-gray-900">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Heading as="h2" className="mb-4">
                Your Event Could Be Next
              </Heading>
              <p className="text-gray-300 mb-8 text-lg">
                Get a custom quote for professional security services
              </p>
              <Button href="/quote" variant="primary" size="lg">
                Request a Quote
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
