import Link from 'next/link';
import Image from 'next/image';
import { fetchGraphQL } from '@/lib/graphql-client';
import type { PostsData } from '@/types/wordpress';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

const POSTS_QUERY = `
  query Posts($first: Int = 10) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const metadata = {
  title: 'Blog - ECT Security',
  description: 'Security insights, event tips, and industry news from ECT Security',
};

export default async function BlogPage() {
  try {
    const data = await fetchGraphQL<PostsData>(POSTS_QUERY, { first: 12 });

    return (
      <>
        <Header />
        <main className="min-h-screen">
          <Section>
            <Container size="lg">
              <Heading as="h1" className="mb-12 text-center">
                Blog & Insights
              </Heading>

              {data.posts.nodes.length === 0 ? (
                <div className="text-center text-gray-400 py-20">
                  <p className="text-lg">No blog posts published yet. Check back soon!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.posts.nodes.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-neon/50 transition-all"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        {post.featuredImage?.node?.sourceUrl && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.featuredImage.node.sourceUrl}
                              alt={post.featuredImage.node.altText || post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <time className="text-sm text-neon">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                          <h2 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-neon transition-colors">
                            {post.title}
                          </h2>
                          <div
                            className="text-gray-400 text-sm line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </Container>
          </Section>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return (
      <>
        <Header />
        <main className="min-h-screen">
          <Section>
            <Container>
              <div className="text-center">
                <Heading as="h1" className="mb-4">Unable to Load Blog</Heading>
                <p className="text-gray-400">Please try again later.</p>
              </div>
            </Container>
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
