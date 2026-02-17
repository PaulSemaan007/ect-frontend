import { fetchGraphQL } from '@/lib/graphql-client';
import type { HomePageData } from '@/types/wordpress';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeServices } from '@/components/HomeServices';
import { StatsCounter } from '@/components/StatsCounter';
import { WhyECT } from '@/components/WhyECT';
import { SectionDivider, Section, Container, Heading, Button } from '@/components/ui';

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

export default async function Home() {
  try {
    const data = await fetchGraphQL<HomePageData>(HOME_PAGE_QUERY);

    if (!data.page?.homeHero) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">
            Hero content not found. Please configure the Home Hero fields in WordPress.
          </p>
        </div>
      );
    }

    return (
      <>
        <Header />
        <main id="main-content">
          <Hero data={data.page.homeHero} />
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
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    return (
      <>
        <Header />
        <main id="main-content" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Unable to load page content
            </h1>
            <p className="text-gray-400">
              {error instanceof Error ? error.message : 'An unknown error occurred'}
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
