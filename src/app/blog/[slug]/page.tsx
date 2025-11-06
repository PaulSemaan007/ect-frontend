import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchGraphQL } from '@/lib/graphql-client';
import type { PostBySlugData } from '@/types/wordpress';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Section, Heading } from '@/components/ui';

const POST_BY_SLUG_QUERY = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      excerpt
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;

  try {
    const data = await fetchGraphQL<PostBySlugData>(POST_BY_SLUG_QUERY, {
      slug: resolvedParams.slug,
    });

    if (!data.post) {
      notFound();
    }

    const post = data.post;

    return (
      <>
        <Header />
        <main className="min-h-screen">
          <article>
            {/* Featured Image */}
            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
              </div>
            )}

            <Section>
              <Container size="md">
                {/* Post Meta */}
                <time className="text-sm text-neon block mb-4">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                {/* Title */}
                <Heading as="h1" className="mb-8">
                  {post.title}
                </Heading>

                {/* Content */}
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-neon prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-ul:text-gray-300 prose-ol:text-gray-300
                    prose-blockquote:border-l-neon prose-blockquote:text-gray-400
                    prose-code:text-neon prose-code:bg-gray-900 prose-code:px-1 prose-code:rounded
                    prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
                    prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Container>
            </Section>
          </article>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    notFound();
  }
}
