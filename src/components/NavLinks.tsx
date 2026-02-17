'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {siteConfig.nav.main.slice(0, -1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-link text-gray-300 hover:text-neon font-medium transition-colors ${
            pathname === link.href ? 'active text-neon' : ''
          }`}
          aria-current={pathname === link.href ? 'page' : undefined}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
