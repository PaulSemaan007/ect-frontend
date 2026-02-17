import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from './ui';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-xl lg:text-2xl font-bold">
              <span className="text-neon">ECT</span>
              <span className="text-foreground ml-1">Security</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.main.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button href={siteConfig.ctas.secondary.href} variant="ghost" size="sm" className="hidden sm:inline-flex">
              {siteConfig.ctas.secondary.label}
            </Button>
            <Button href={siteConfig.ctas.primary.href} variant="primary" size="sm">
              {siteConfig.ctas.primary.label}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
