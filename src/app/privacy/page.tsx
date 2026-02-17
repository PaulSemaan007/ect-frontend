import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'ECT Security privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
  const h3 = 'text-xl font-semibold text-foreground mt-6 mb-3';
  const p = 'text-gray-300 mb-4 leading-relaxed';
  const ul = 'list-disc list-inside text-gray-300 mb-4 space-y-1';

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <Container size="md">
            <Heading as="h1" className="mb-4">
              Privacy Policy
            </Heading>
            <p className="text-gray-400 mb-8">Effective Date: February 17, 2026</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className={p}>
                ECT Security (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website, request a quote, apply
                for employment, or use our security services. By using our website or services, you
                consent to the practices described in this policy.
              </p>

              <h2 className={h2}>1. Information We Collect</h2>

              <h3 className={h3}>Personal Information You Provide</h3>
              <p className={p}>
                When you interact with us — such as requesting a quote, submitting a job
                application, or contacting us — we may collect:
              </p>
              <ul className={ul}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Event details (date, location, type, expected attendance)</li>
                <li>Employment history and qualifications (for job applicants)</li>
                <li>Guard card and certification information (for job applicants)</li>
                <li>Any additional information you choose to provide in messages or forms</li>
              </ul>

              <h3 className={h3}>Information Collected Automatically</h3>
              <p className={p}>
                When you visit our website, we may automatically collect certain technical
                information, including:
              </p>
              <ul className={ul}>
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or search terms</li>
              </ul>

              <h2 className={h2}>2. How We Use Your Information</h2>
              <p className={p}>We use the information we collect to:</p>
              <ul className={ul}>
                <li>Respond to quote requests and service inquiries</li>
                <li>Provide, manage, and improve our security services</li>
                <li>Process employment applications</li>
                <li>Communicate with you about your events, bookings, or applications</li>
                <li>Send service-related updates (we do not send marketing emails)</li>
                <li>Analyze website usage to improve our site and user experience</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>

              <h2 className={h2}>3. Information Sharing</h2>
              <p className={p}>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className={ul}>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist us
                  in operating our website, conducting business, or servicing you (e.g., email
                  delivery services), provided they agree to keep your information confidential
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, subpoena, court order,
                  or government regulation
                </li>
                <li>
                  <strong>Safety:</strong> When we believe disclosure is necessary to protect the
                  rights, property, or safety of ECT Security, our clients, or others
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                  sale of all or a portion of our assets
                </li>
              </ul>

              <h2 className={h2}>4. Data Security</h2>
              <p className={p}>
                We implement industry-standard security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or destruction. These
                measures include encrypted data transmission (HTTPS/TLS), secure hosting
                infrastructure, and restricted access controls. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>

              <h2 className={h2}>5. Cookies and Tracking Technologies</h2>
              <p className={p}>
                Our website may use cookies and similar technologies to enhance your browsing
                experience and collect analytics data. You can control cookie preferences through
                your browser settings. Disabling cookies may limit certain features of the website.
              </p>

              <h2 className={h2}>6. Your California Privacy Rights (CCPA)</h2>
              <p className={p}>
                If you are a California resident, the California Consumer Privacy Act (CCPA)
                provides you with specific rights regarding your personal information:
              </p>
              <ul className={ul}>
                <li>
                  <strong>Right to Know:</strong> You may request that we disclose the categories
                  and specific pieces of personal information we have collected about you
                </li>
                <li>
                  <strong>Right to Delete:</strong> You may request that we delete any personal
                  information we have collected from you, subject to certain exceptions
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not discriminate against you
                  for exercising your privacy rights
                </li>
              </ul>
              <p className={p}>
                To exercise these rights, contact us at{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-neon hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                . We will respond to verifiable requests within 45 days.
              </p>

              <h2 className={h2}>7. Third-Party Links</h2>
              <p className={p}>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of those sites. We encourage you to review the
                privacy policies of any third-party sites you visit.
              </p>

              <h2 className={h2}>8. Children&apos;s Privacy</h2>
              <p className={p}>
                Our website and services are not directed to individuals under the age of 18. We do
                not knowingly collect personal information from children. If we learn that we have
                collected information from a child under 18, we will promptly delete it.
              </p>

              <h2 className={h2}>9. Data Retention</h2>
              <p className={p}>
                We retain personal information only for as long as necessary to fulfill the purposes
                described in this policy, comply with legal obligations, resolve disputes, and
                enforce our agreements. Quote request data is retained for up to 24 months.
                Employment application data is retained in accordance with applicable labor laws.
              </p>

              <h2 className={h2}>10. Changes to This Policy</h2>
              <p className={p}>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated effective date. We encourage you to review this policy
                periodically. Your continued use of our website after changes are posted constitutes
                your acceptance of the updated policy.
              </p>

              <h2 className={h2}>11. Contact Us</h2>
              <p className={p}>
                If you have questions about this Privacy Policy or wish to exercise your privacy
                rights, please contact us:
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
