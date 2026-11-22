'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-4xl mb-12 sm:mb-16 border-t border-paper-border pt-6',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-2 mb-3', align === 'center' && 'justify-center')}>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase font-sans text-gold-800">
            {eyebrow}
          </span>
          <span className="w-8 h-[1px] bg-paper-border inline-block" />
        </div>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold tracking-tight font-editorial leading-[1.25] sm:leading-[1.2] text-ink',
        )}
      >
        {title}
      </h2>

      <div
        className={cn(
          'h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-transparent rounded-full mt-3.5 mb-3.5',
          align === 'center' ? 'w-20 mx-auto' : 'w-20'
        )}
      />

      {subtitle && (
        <p
          className="text-base sm:text-lg leading-[1.75] font-devanagari font-medium text-ink-800 max-w-3xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
