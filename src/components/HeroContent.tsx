'use client';

import { motion } from 'motion/react';
import { Button } from './ui';

interface HeroContentProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
} as const;

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 120, damping: 14 },
  },
};

export function HeroContent({ headline, subheadline, ctaLabel, ctaUrl }: HeroContentProps) {
  const words = headline?.split(' ') || [];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 lg:py-32 text-center">
      {/* Background glow */}
      <motion.div
        className="hero-glow"
        aria-hidden="true"
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Headline with word-by-word reveal */}
      {headline && (
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span key={i} className="inline-block mr-[0.3em]" variants={wordReveal}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
      )}

      {/* Subheadline fade in */}
      {subheadline && (
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 16,
            delay: words.length * 0.08 + 0.3,
          }}
        >
          {subheadline}
        </motion.p>
      )}

      {/* CTA Button */}
      {ctaLabel && ctaUrl && (
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 18,
            delay: words.length * 0.08 + 0.5,
          }}
        >
          <Button href={ctaUrl} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
