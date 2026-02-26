/**
 * TypeScript types for WordPress GraphQL responses
 */

export interface BackgroundImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface HomeHeroFields {
  headline: string;
  subheadline: string | null;
  ctaLabel: string;
  ctaUrl: string;
  backgroundImage: BackgroundImage | null;
}

export interface HomePageData {
  page: {
    homeHero: HomeHeroFields;
  };
}

export interface WPPage {
  title: string;
  content: string;
  slug: string;
  date: string;
}

export interface PageByUriData {
  nodeByUri: WPPage | null;
}

export interface WPPost {
  title: string;
  content: string;
  slug: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface PostsData {
  posts: {
    nodes: WPPost[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

export interface PostBySlugData {
  post: WPPost | null;
}
