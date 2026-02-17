import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'ECT Security terms of service — service agreements, cancellation policies, and conditions for security services.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
  const p = 'text-gray-300 mb-4 leading-relaxed';
  const ul = 'list-disc list-inside text-gray-300 mb-4 space-y-1';

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-4">
              Terms of Service
            </Heading>
            <p className="text-gray-400 mb-8">Effective Date: February 17, 2026</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className={p}>
                These Terms of Service (&quot;Terms&quot;) govern your use of the ECT Security
                website and the security services provided by ECT Security (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). By accessing our website or engaging our
                services, you agree to be bound by these Terms. If you do not agree, please do not
                use our website or services.
              </p>

              <h2 className={h2}>1. Services Overview</h2>
              <p className={p}>
                ECT Security provides professional security guard services for events, festivals,
                venues, corporate properties, and parking assistance throughout California and
                Nevada. All services are performed by trained, licensed security personnel in
                compliance with applicable state regulations, including the California Bureau of
                Security and Investigative Services (BSIS) requirements.
              </p>

              <h2 className={h2}>2. Service Requests and Agreements</h2>
              <p className={p}>
                Submitting a quote request through our website does not constitute a binding
                agreement. A service agreement is formed only when both parties have agreed to
                specific terms, including scope of services, scheduling, staffing, and pricing. All
                service agreements are subject to personnel availability and will be confirmed in
                writing.
              </p>

              <h2 className={h2}>3. Pricing and Payment</h2>
              <ul className={ul}>
                <li>
                  Pricing is determined on a per-event or per-contract basis and will be provided in
                  your service quote
                </li>
                <li>
                  Payment terms, including deposits and final payment deadlines, will be outlined in
                  your service agreement
                </li>
                <li>
                  Late payments may be subject to a fee as specified in your service agreement
                </li>
                <li>All prices are quoted in U.S. dollars and are subject to applicable taxes</li>
              </ul>

              <h2 className={h2}>4. Cancellation and Rescheduling</h2>
              <p className={p}>
                We understand plans change. Our cancellation policy is as follows:
              </p>
              <ul className={ul}>
                <li>
                  <strong>More than 72 hours before service:</strong> Full refund of any deposit
                  paid
                </li>
                <li>
                  <strong>48–72 hours before service:</strong> 50% of the deposit may be retained as
                  a cancellation fee
                </li>
                <li>
                  <strong>Less than 48 hours before service:</strong> The full deposit may be
                  retained as a cancellation fee
                </li>
                <li>
                  Rescheduling requests are accommodated whenever possible and are subject to
                  personnel availability
                </li>
              </ul>

              <h2 className={h2}>5. Client Responsibilities</h2>
              <p className={p}>When engaging our services, you agree to:</p>
              <ul className={ul}>
                <li>
                  Provide accurate and complete information about the event, venue, or property
                </li>
                <li>
                  Notify us of any known safety hazards, special requirements, or changes to the
                  event scope
                </li>
                <li>
                  Ensure our security personnel have reasonable access to the venue or property
                </li>
                <li>Comply with all applicable laws and regulations at your event or property</li>
                <li>
                  Treat our security personnel with respect and not request them to perform duties
                  outside their scope of authority
                </li>
              </ul>

              <h2 className={h2}>6. Scope of Security Services</h2>
              <p className={p}>
                Our security guards are trained to observe, report, and deter. The scope of services
                will be defined in your service agreement and may include access control, crowd
                management, parking assistance, patrol, and incident reporting. Our personnel act
                within the authority granted by California and Nevada state law and will not perform
                duties outside their legal scope.
              </p>

              <h2 className={h2}>7. Insurance and Liability</h2>
              <p className={p}>
                ECT Security maintains general liability insurance and workers&apos; compensation
                coverage as required by California and Nevada law. Our liability is limited to the
                scope outlined in your service agreement. We are not liable for:
              </p>
              <ul className={ul}>
                <li>
                  Loss, theft, or damage to personal property unless caused by the gross negligence
                  or willful misconduct of our personnel
                </li>
                <li>
                  Acts of third parties, including event attendees, trespassers, or other
                  contractors
                </li>
                <li>Circumstances beyond our reasonable control (force majeure)</li>
                <li>
                  Indirect, incidental, or consequential damages arising from the use of our
                  services
                </li>
              </ul>

              <h2 className={h2}>8. Employment Applications</h2>
              <p className={p}>
                Job applications submitted through our website are subject to our hiring process.
                Submitting an application does not guarantee employment. All security personnel must
                meet applicable state licensing requirements, pass background checks, and complete
                our training program. We are an equal opportunity employer.
              </p>

              <h2 className={h2}>9. Website Use</h2>
              <p className={p}>You agree not to:</p>
              <ul className={ul}>
                <li>Use our website for any unlawful purpose or in violation of these Terms</li>
                <li>Submit false, misleading, or fraudulent information through our forms</li>
                <li>
                  Attempt to gain unauthorized access to our systems or interfere with website
                  functionality
                </li>
                <li>
                  Reproduce, distribute, or modify any content on our website without our written
                  consent
                </li>
              </ul>

              <h2 className={h2}>10. Intellectual Property</h2>
              <p className={p}>
                All content on this website — including text, graphics, logos, images, and software
                — is the property of ECT Security and is protected by applicable intellectual
                property laws. You may not use our trademarks, trade names, or branding without our
                prior written consent.
              </p>

              <h2 className={h2}>11. Indemnification</h2>
              <p className={p}>
                You agree to indemnify and hold harmless ECT Security, its officers, employees, and
                agents from any claims, damages, losses, or expenses (including reasonable
                attorney&apos;s fees) arising out of your breach of these Terms, misuse of our
                services, or violation of any applicable law.
              </p>

              <h2 className={h2}>12. Governing Law</h2>
              <p className={p}>
                These Terms are governed by and construed in accordance with the laws of the State
                of California, without regard to conflict of law principles. Any disputes arising
                from these Terms or our services shall be resolved in the state or federal courts
                located in Orange County, California.
              </p>

              <h2 className={h2}>13. Severability</h2>
              <p className={p}>
                If any provision of these Terms is found to be invalid or unenforceable, the
                remaining provisions shall remain in full force and effect.
              </p>

              <h2 className={h2}>14. Changes to These Terms</h2>
              <p className={p}>
                We may update these Terms from time to time. Changes will be posted on this page
                with an updated effective date. Your continued use of our website or services after
                changes are posted constitutes your acceptance of the revised Terms.
              </p>

              <h2 className={h2}>15. Contact Us</h2>
              <p className={p}>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className={ul}>
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-neon hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}`}
                    className="text-neon hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
