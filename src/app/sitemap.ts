import type { MetadataRoute } from 'next';

const BASE_URL = 'https://ectsecurity.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/quote'];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }));
}
