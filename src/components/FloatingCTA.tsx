'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Don't show on quote page or apply page
  if (pathname === '/quote' || pathname === '/careers/apply') return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gray-950/95 backdrop-blur-sm border-t border-gray-800 px-4 py-3">
        <Link
          href="/quote"
          className="block w-full bg-neon text-gray-950 font-semibold text-center py-3 rounded-lg hover:bg-neon-dim transition-colors shadow-lg shadow-neon/20"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
