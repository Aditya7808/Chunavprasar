'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, translations } from '@/content/translations';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/siteConfig';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[locale].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/work`, label: t.work },
    { href: `/${locale}#gallery`, label: locale === 'hi' ? 'गैलरी' : 'Gallery' },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/compliance`, label: t.compliance },
    { href: `/${locale}/contact`, label: t.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    if (href.includes('#')) {
      return false;
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-[#FAF6EE]/92 backdrop-blur-md border-b border-paper-border py-3 shadow-paper-sm'
            : 'bg-[#FAF6EE]/80 backdrop-blur-sm border-b border-paper-border/60 py-4 sm:py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1"
              aria-label="आधुनिक प्रचार प्रसार होम"
            >
              <BrandLogo locale={locale} size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="मुख्य नेविगेशन">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'h-9 px-2.5 xl:px-3 rounded-lg text-xs xl:text-sm inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-all duration-150',
                      locale === 'hi' ? 'font-devanagari' : 'font-sans font-medium',
                      active
                        ? 'text-gold-900 font-bold bg-[#EFE6D6] border border-[#DFD3C1] shadow-2xs'
                        : 'text-ink-700 hover:text-ink-950 hover:bg-[#F3ECE0]/80 font-medium'
                    )}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls: Language Toggle + CTA Button */}
            <div className="hidden sm:flex items-center gap-2.5">
              <LanguageToggle currentLocale={locale} />
              
              <Link
                href={`/${locale}/contact#enquiry`}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 h-9 px-3.5 xl:px-4 rounded-lg bg-gold-600 hover:bg-gold-700 text-white font-bold text-xs sm:text-sm shadow-paper-sm active:scale-[0.98] transition-all whitespace-nowrap shrink-0',
                  locale === 'hi' ? 'font-devanagari' : 'font-sans'
                )}
              >
                <span>{t.discussProject}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>

            {/* Mobile Actions: Language toggle + Menu hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageToggle currentLocale={locale} />
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-ink-700 hover:text-ink-950 hover:bg-[#F0E8DC] border border-paper-border focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold-700" />
                ) : (
                  <Menu className="w-6 h-6 text-ink-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-in Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF6EE]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="space-y-2 border-b border-paper-border pb-6 mb-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between p-3 rounded-card-sm text-lg font-devanagari transition-colors',
                    active
                      ? 'bg-white text-gold-700 font-bold border-l-4 border-gold-600 pl-4 shadow-paper-sm'
                      : 'text-ink-700 hover:bg-white/80 hover:text-ink-950'
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-gold-600" />
                </Link>
              );
            })}
          </div>

          <div className="space-y-4">
            <Link
              href={`/${locale}/contact#enquiry`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-bold text-base font-devanagari shadow-paper-md active:scale-[0.98] transition-all"
            >
              <span>{t.discussProject}</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-card bg-white text-ink-800 border border-paper-border font-medium text-sm font-devanagari hover:bg-paper-warm shadow-paper-sm"
            >
              <PhoneCall className="w-4 h-4 text-gold-700" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
          </div>

          {/* Non-partisan notice snippet */}
          <div className="mt-auto pt-6 text-center text-xs text-ink-500 font-devanagari border-t border-paper-border">
            {siteConfig.legal.nonPartisanDisclaimer[locale]}
          </div>
        </div>
      )}
    </>
  );
}
