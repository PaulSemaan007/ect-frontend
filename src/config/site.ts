/**
 * Centralized site configuration
 * All contact info, branding, and content settings
 */

export const siteConfig = {
  name: 'ECT Security',
  title: 'ECT Security - Event Control Team',
  description: 'Professional security services and event management solutions across Southern California',

  // Contact Information
  contact: {
    email: 'info@ectsecurity.com',
    phone: '(555) 555-0199',
    hours: '24/7',
  },

  // Social Media Links
  socials: {
    instagram: 'https://instagram.com/ectsecurity',
    linkedin: 'https://linkedin.com/company/ectsecurity',
    facebook: 'https://facebook.com/ectsecurity',
    tiktok: 'https://tiktok.com/@ectsecurity',
  },

  // Service Areas (Southern California)
  serviceAreas: [
    'Los Angeles County',
    'Orange County',
    'San Diego County',
    'Riverside County',
    'San Bernardino County',
    'Ventura County',
  ],

  // Brand Colors
  brand: {
    neonGreen: '#39FF14',
    neonGreenDim: '#2ecc11',
    background: '#0a0a0a',
    foreground: '#ededed',
  },

  // Primary CTAs
  ctas: {
    primary: {
      label: 'Get a Quote',
      href: '/quote',
    },
    secondary: {
      label: 'Apply Now',
      href: '/careers/apply',
    },
  },

  // Navigation Links
  nav: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/quote' },
    ],
    services: [
      { label: 'Events & Festivals', href: '/services/events' },
      { label: 'Venues', href: '/services/venues' },
      { label: 'Corporate', href: '/services/corporate' },
      { label: 'Nightlife', href: '/services/nightlife' },
      { label: 'Private Security', href: '/services/private' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Licenses & Insurance', href: '/licenses' },
      { label: 'Service Area', href: '/service-area' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
