import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Button } from './ui';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-xl lg:text-2xl font-bold">
              <span className="text-neon neon-glow-xs">ECT</span>
              <span className="text-foreground ml-1">Security</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* CTAs + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button href={siteConfig.ctas.primary.href} variant="primary" size="sm" className="hidden sm:inline-flex">
              {siteConfig.ctas.primary.label}
            </Button>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
