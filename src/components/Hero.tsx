import Image from 'next/image';
import type { HomeHeroFields } from '@/types/wordpress';
import { Button } from './ui';
import { siteConfig } from '@/config/site';

interface HeroProps {
  data: HomeHeroFields;
}

export function Hero({ data }: HeroProps) {
  const { headline, subheadline, ctaLabel, ctaUrl, backgroundImage } = data;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
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
          {/* Dark overlay + neon gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/70 to-gray-950/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-transparent neon-overlay" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 lg:py-32 text-center">
        {headline && (
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            {headline}
          </h1>
        )}

        {subheadline && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaLabel && ctaUrl && (
            <Button href={ctaUrl} variant="primary" size="lg">
              {ctaLabel}
            </Button>
          )}
          <Button href={siteConfig.ctas.secondary.href} variant="outline" size="lg">
            {siteConfig.ctas.secondary.label}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-neon">24/7</div>
            <div className="text-sm text-gray-400 mt-1">Availability</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-neon">Licensed</div>
            <div className="text-sm text-gray-400 mt-1">Guards</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-neon">6</div>
            <div className="text-sm text-gray-400 mt-1">Counties</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-neon">Expert</div>
            <div className="text-sm text-gray-400 mt-1">Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
