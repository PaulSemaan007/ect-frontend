'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Events Secured' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 2, suffix: '', label: 'States Licensed' },
  { value: 100, suffix: '%', label: 'Licensed Guards' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-neon neon-glow-sm mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
