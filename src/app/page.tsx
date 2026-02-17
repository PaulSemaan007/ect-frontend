import { fetchGraphQL } from '@/lib/graphql-client';
import type { HomePageData } from '@/types/wordpress';
import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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
        <Hero data={data.page.homeHero} />
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Failed to fetch home page data:', error);
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Unable to load page content
            </h1>
            <p className="text-gray-400">
              {error instanceof Error ? error.message : 'An unknown error occurred'}
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
