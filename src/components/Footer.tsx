import { siteConfig } from '@/config/site';
import { SectionDivider } from '@/components/ui';

export function Footer() {
  return (
    <footer className="bg-gray-950">
      <SectionDivider variant="glow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4">
          <div className="text-xl font-bold">
            <span className="text-neon neon-glow-xs">ECT</span>
            <span className="text-foreground ml-1">Security</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="text-gray-300 hover:text-neon transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gray-300 hover:text-neon transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ECT Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
