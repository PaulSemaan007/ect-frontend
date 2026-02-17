'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui';
import { siteConfig } from '@/config/site';

interface HeroContentProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const trustIndicators = [
  { value: 'CA & NV', label: 'Licensed' },
  { value: 'Trained', label: 'Guards' },
  { value: 'Parking', label: 'Assistance' },
];

export function HeroContent({ headline, subheadline, ctaLabel, ctaUrl }: HeroContentProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const words = headline?.split(' ') || [];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 lg:py-32 text-center">
      {/* Background glow */}
      <div className="hero-glow animate-pulse-neon" aria-hidden="true" />

      {/* Headline with word-by-word reveal */}
      {headline && (
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.3em] ${loaded ? 'animate-text-reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
      )}

      {/* Subheadline fade in */}
      {subheadline && (
        <p
          className={`text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: `${words.length * 100 + 200}ms` }}
        >
          {subheadline}
        </p>
      )}

      {/* Buttons scale in */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transitionDelay: `${words.length * 100 + 400}ms` }}
      >
        {ctaLabel && ctaUrl && (
          <Button href={ctaUrl} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        )}
        <Button href={siteConfig.ctas.secondary.href} variant="outline" size="lg">
          {siteConfig.ctas.secondary.label}
        </Button>
      </div>

      {/* Trust indicators with stagger */}
      <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-8 text-center">
        {trustIndicators.map((indicator, i) => (
          <div
            key={indicator.value}
            className={`transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${words.length * 100 + 600 + i * 150}ms` }}
          >
            <div className="text-3xl lg:text-4xl font-bold text-neon neon-glow-sm">
              {indicator.value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{indicator.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
