'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  once?: boolean;
}

const hiddenVariants = {
  up: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.95 },
} as const;

const visibleVariant = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
} as const;

export function AnimateOnScroll({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={hiddenVariants[direction]}
      whileInView={visibleVariant}
      viewport={{ once, amount: 0.2 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
