import type { MetadataRoute } from 'next';

const BASE_URL = 'https://ectsecurity.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/events',
    '/services/venues',
    '/services/corporate',
    '/services/parking',
    '/quote',
    '/careers',
    '/careers/apply',
    '/service-area',
    '/faq',
    '/privacy',
    '/terms',
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/services') ? 0.8 : 0.6,
  }));
}
