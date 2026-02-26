import Image from 'next/image';
import type { HomeHeroFields } from '@/types/wordpress';
import { HeroContent } from './HeroContent';

interface HeroProps {
  data: HomeHeroFields;
}

export function Hero({ data }: HeroProps) {
  const { headline, subheadline, ctaLabel, ctaUrl, backgroundImage } = data;
  const heroSrc = backgroundImage?.node?.sourceUrl || '/images/hero-festival.png';
  const heroAlt = backgroundImage?.node?.altText || 'ECT Security';

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden hero-scanlines">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={heroSrc} alt={heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-transparent neon-overlay" />
      </div>

      <HeroContent
        headline={headline}
        subheadline={subheadline ?? undefined}
        ctaLabel={ctaLabel}
        ctaUrl={ctaUrl}
      />
    </section>
  );
}
