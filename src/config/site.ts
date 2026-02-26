/**
 * Centralized site configuration
 * All contact info, branding, and content settings
 */

export const siteConfig = {
  name: 'ECT Security',
  title: 'ECT Security - Event Control Team',
  description: 'Professional security services across California and Nevada',

  // Contact Information
  contact: {
    email: 'Rsemaan1@yahoo.com',
    phone: '562-716-8376',
  },

  // Social Media Links
  socials: {
    instagram: 'https://instagram.com/ectsecurity',
    linkedin: 'https://linkedin.com/company/ectsecurity',
    facebook: 'https://facebook.com/ectsecurity',
    tiktok: 'https://tiktok.com/@ectsecurity',
  },

  // Service Areas
  serviceAreas: ['California', 'Nevada'],

  // Brand Colors
  brand: {
    neonGreen: '#39FF14',
    neonGreenDim: '#2ecc11',
    background: '#0a0a0a',
    foreground: '#ededed',
  },

  // Primary CTA
  ctas: {
    primary: {
      label: 'Get a Quote',
      href: '/quote',
    },
  },

  // Navigation Links
  nav: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/quote' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
