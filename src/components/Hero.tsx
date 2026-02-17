import Image from 'next/image';
import type { HomeHeroFields } from '@/types/wordpress';
import { HeroContent } from './HeroContent';

interface HeroProps {
  data: HomeHeroFields;
}

export function Hero({ data }: HeroProps) {
  const { headline, subheadline, ctaLabel, ctaUrl, backgroundImage } = data;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden hero-scanlines">
      {/* Background Image */}
      {backgroundImage?.node?.sourceUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.node.sourceUrl}
            alt={backgroundImage.node.altText || 'Hero background'}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/70 to-gray-950/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-transparent neon-overlay" />
        </div>
      )}

      <HeroContent
        headline={headline}
        subheadline={subheadline}
        ctaLabel={ctaLabel}
        ctaUrl={ctaUrl}
      />
    </section>
  );
}
