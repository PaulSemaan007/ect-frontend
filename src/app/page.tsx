import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { fetchGraphQL } from '@/lib/graphql-client';
import type { HomePageData, HomeHeroFields } from '@/types/wordpress';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionDivider, Section, Container, Heading, Button } from '@/components/ui';

const HomeServices = dynamic(() =>
  import('@/components/HomeServices').then((mod) => ({ default: mod.HomeServices })),
);
const StatsCounter = dynamic(() =>
  import('@/components/StatsCounter').then((mod) => ({ default: mod.StatsCounter })),
);
const WhyECT = dynamic(() =>
  import('@/components/WhyECT').then((mod) => ({ default: mod.WhyECT })),
);

export const metadata: Metadata = {
  title: 'Professional Event Security Across California & Nevada',
  description:
    'ECT Security provides licensed guards, crowd management, and event security services across California and Nevada. Get a free quote today.',
  alternates: {
    canonical: '/',
  },
};

const HOME_PAGE_QUERY = `
  query HomePageQuery {
    page(id: "/", idType: URI) {
      homeHero {
        headline
        subheadline
        ctaLabel: ctalabel
        ctaUrl: ctaurl
        backgroundImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const fallbackHero: HomeHeroFields = {
  headline: 'Professional Event Security Across California & Nevada',
  subheadline: 'Licensed guards, de-escalation trained, and ready to secure your next event.',
  ctaLabel: 'Get a Quote',
  ctaUrl: '/quote',
  backgroundImage: null,
};

export default async function Home() {
  let heroData = fallbackHero;

  try {
    const data = await fetchGraphQL<HomePageData>(HOME_PAGE_QUERY);
    if (data.page?.homeHero) {
      heroData = data.page.homeHero;
    }
  } catch {
    // WordPress unavailable — use fallback content
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero data={heroData} />
        <SectionDivider variant="gradient" />
        <HomeServices />
        <StatsCounter />
        <SectionDivider variant="glow" />
        <WhyECT />
        <SectionDivider variant="gradient" />

        {/* CTA Banner */}
        <Section className="bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Heading as="h2" gradient className="mb-4">
                Ready to Secure Your Event?
              </Heading>
              <p className="text-gray-300 mb-8 text-lg">
                Get a custom security quote tailored to your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/quote" variant="primary" size="lg">
                  Get a Free Quote
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View Services
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
