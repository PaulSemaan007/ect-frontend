import { describe, it, expect } from 'vitest';
import { siteConfig } from '@/config/site';

describe('siteConfig', () => {
  it('has correct contact information', () => {
    expect(siteConfig.contact.phone).toBe('(714) 474-4788');
    expect(siteConfig.contact.email).toBe('info@ectsecurity.com');
  });

  it('has required navigation links', () => {
    expect(siteConfig.nav.main.length).toBeGreaterThanOrEqual(4);

    const navLabels = siteConfig.nav.main.map((n) => n.label);
    expect(navLabels).toContain('Home');
    expect(navLabels).toContain('Services');
    expect(navLabels).toContain('About');
    expect(navLabels).toContain('Careers');
  });

  it('has all 4 active services', () => {
    expect(siteConfig.nav.services).toHaveLength(4);

    const serviceLabels = siteConfig.nav.services.map((s) => s.label);
    expect(serviceLabels).toContain('Events & Festivals');
    expect(serviceLabels).toContain('Venues');
    expect(serviceLabels).toContain('Corporate');
    expect(serviceLabels).toContain('Parking Assistance');
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
