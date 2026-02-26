import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';

describe('siteConfig', () => {
  it('has correct contact information', () => {
    expect(siteConfig.contact.phone).toBe('562-716-8376');
    expect(siteConfig.contact.email).toBe('Rsemaan1@yahoo.com');
  });

  it('has required navigation links', () => {
    expect(siteConfig.nav.main.length).toBeGreaterThanOrEqual(2);

    const navLabels = siteConfig.nav.main.map((n) => n.label);
    expect(navLabels).toContain('Home');
    expect(navLabels).toContain('Contact');
  });

  it('covers California and Nevada', () => {
    expect(siteConfig.serviceAreas).toContain('California');
    expect(siteConfig.serviceAreas).toContain('Nevada');
  });

  it('has brand colors defined', () => {
    expect(siteConfig.brand.neonGreen).toBe('#39FF14');
    expect(siteConfig.brand.background).toBe('#0a0a0a');
    expect(siteConfig.brand.foreground).toBe('#ededed');
  });

  it('has primary CTA pointing to quote page', () => {
    expect(siteConfig.ctas.primary.href).toBe('/quote');
  });
});
