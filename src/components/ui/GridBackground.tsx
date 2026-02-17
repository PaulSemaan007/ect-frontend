'use client';

import { useRef, useCallback, useEffect } from 'react';

export function GridBackground({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, var(--color-neon-5), transparent 40%)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" aria-hidden="true" />
      <div
        ref={glowRef}
        className="fixed inset-0 pointer-events-none z-0 hidden lg:block"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
