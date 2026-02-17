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
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description:
    'Common questions about ECT Security services, pricing, licensing, and event security across California and Nevada.',
  alternates: {
    canonical: '/faq',
  },
};

const faqs = [
  {
    question: 'What security services does ECT Security provide?',
    answer:
      'We provide professional security for events and festivals, venue security, corporate security, and parking assistance. Our licensed guards handle crowd management, access control, perimeter security, bag checks, and emergency response.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'ECT Security provides services throughout California and Nevada. We cover events and venues of all sizes across both states.',
  },
  {
    question: 'How do I request a security quote?',
    answer:
      'You can request a free quote through our online form at ectsecurity.com/quote, or call us directly at (714) 474-4788. We typically respond within one business day.',
  },
  {
    question: 'Are your security guards licensed?',
    answer:
      'Yes. All ECT Security guards hold valid California Guard Cards and undergo background checks. Our team is trained in de-escalation techniques, emergency response, and customer service.',
  },
  {
    question: 'How far in advance should I book security for my event?',
    answer:
      'We recommend booking at least 2-4 weeks in advance for standard events. For large festivals or multi-day events, 4-8 weeks is ideal. Contact us as early as possible to ensure availability.',
  },
  {
    question: 'Do you provide security for small events?',
    answer:
      'Yes. We provide security for events of all sizes, from private gatherings and corporate meetings to large-scale festivals with thousands of attendees.',
  },
  {
    question: 'How much does event security cost?',
    answer:
      'Pricing depends on the type of event, number of guards needed, duration, and specific requirements. Contact us for a free, no-obligation quote tailored to your event.',
  },
  {
    question: 'Can you provide security on short notice?',
    answer:
      'We do our best to accommodate last-minute requests depending on availability. Call us at (714) 474-4788 to discuss your needs and we will work to find a solution.',
  },
  {
    question: 'What should I expect from your security team at my event?',
    answer:
      'Our guards arrive in professional attire, conduct a site walkthrough, coordinate with your team, and maintain a visible but approachable presence. We provide crowd management, access control, and emergency response throughout your event.',
  },
  {
    question: 'How do I apply to work at ECT Security?',
    answer:
      'Visit our careers page at ectsecurity.com/careers to learn about requirements and submit an application. We are always looking for licensed, professional security personnel.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container size="md">
            <Heading as="h1" gradient className="mb-6 text-center">
              Frequently Asked Questions
            </Heading>
            <p className="text-xl text-gray-300 text-center">
              Common questions about our security services
            </p>
          </Container>
        </Section>

        <SectionDivider variant="gradient" />

        <Section>
          <Container size="md">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimateOnScroll key={index} direction="up" delay={index * 50}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-neon/30 transition-colors">
                    <h2 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h2>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        <SectionDivider variant="glow" />

        <Section className="bg-gray-900">
          <Container>
            <AnimateOnScroll direction="up">
              <div className="text-center max-w-2xl mx-auto">
                <Heading as="h2" className="mb-4">
                  Still Have Questions?
                </Heading>
                <p className="text-gray-300 mb-8 text-lg">
                  Contact us directly and we will be happy to help
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/quote" variant="primary" size="lg">
                    Get a Quote
                  </Button>
                  <Button
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    variant="outline"
                    size="lg"
                  >
                    Call {siteConfig.contact.phone}
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </Container>
        </Section>
      </main>
      <Footer />

      {/* FAQ structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
