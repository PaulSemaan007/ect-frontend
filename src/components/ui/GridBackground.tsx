'use client';

import { useRef, useEffect, useState } from 'react';

export function GridBackground({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" aria-hidden="true" />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, var(--color-neon-5), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
