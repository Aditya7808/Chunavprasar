'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/content/translations';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLocale: Locale;
  className?: string;
  variant?: 'pill' | 'header';
}

export function LanguageToggle({ currentLocale, className, variant = 'header' }: LanguageToggleProps) {
  const pathname = usePathname();

  // Replace /hi with /en or vice versa in current path
  const targetLocale: Locale = currentLocale === 'hi' ? 'en' : 'hi';
  
  let targetPath = `/${targetLocale}`;
  if (pathname) {
    if (pathname.startsWith('/hi')) {
      targetPath = pathname.replace(/^\/hi/, `/${targetLocale}`);
    } else if (pathname.startsWith('/en')) {
      targetPath = pathname.replace(/^\/en/, `/${targetLocale}`);
    } else {
      targetPath = `/${targetLocale}${pathname}`;
    }
  }

  return (
    <Link
      href={targetPath}
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border',
        'border-paper-border hover:border-gold-500 bg-white/80 text-ink-700 hover:text-gold-700 hover:bg-paper-warm shadow-paper-sm',
        className
      )}
      title={currentLocale === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
      aria-label={currentLocale === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
    >
      <Globe className="w-3.5 h-3.5 text-gold-600" />
      <span className={cn('px-1 py-0.5 rounded', currentLocale === 'hi' ? 'text-gold-700 font-bold' : 'text-ink-400')}>
        HI
      </span>
      <span className="text-ink-300 text-[10px]">/</span>
      <span className={cn('px-1 py-0.5 rounded', currentLocale === 'en' ? 'text-gold-700 font-bold' : 'text-ink-400')}>
        EN
      </span>
    </Link>
  );
}
