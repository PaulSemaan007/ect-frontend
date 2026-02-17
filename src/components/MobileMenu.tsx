'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '@/config/site';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex flex-col items-center justify-center w-10 h-10 gap-1.5"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <motion.span
          className="block w-6 h-0.5 bg-foreground"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-foreground"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-foreground"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-950/98 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {siteConfig.nav.main.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 14,
                    delay: i * 0.06,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-bold transition-colors ${
                      pathname === link.href ? 'text-neon' : 'text-foreground hover:text-neon'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: siteConfig.nav.main.length * 0.06 + 0.1 }}
                className="mt-4"
              >
                <Link
                  href={siteConfig.ctas.primary.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center bg-neon text-gray-950 font-semibold px-8 py-4 text-lg rounded-lg"
                >
                  {siteConfig.ctas.primary.label}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: siteConfig.nav.main.length * 0.06 + 0.3 }}
                className="text-gray-400 text-sm"
              >
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-neon transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
