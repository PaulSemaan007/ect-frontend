import { notFound } from 'next/navigation';
import { fetchGraphQL } from '@/lib/graphql-client';
import type { PageByUriData } from '@/types/wordpress';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

const PAGE_BY_URI_QUERY = `
  query PageByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        title
        content
        slug
        date
      }
    }
  }
`;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const uri = `/${resolvedParams.slug}`;

  let page;
  try {
    const data = await fetchGraphQL<PageByUriData>(PAGE_BY_URI_QUERY, { uri });
    if (!data.nodeByUri) {
      notFound();
    }
    page = data.nodeByUri;
  } catch {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <Container size="lg">
            <Heading as="h1" className="mb-8">
              {page.title}
            </Heading>
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
