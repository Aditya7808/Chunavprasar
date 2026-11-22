'use client';

import React from 'react';
import { Locale } from '@/content/translations';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  locale?: Locale;
  variant?: 'full' | 'symbol';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Pixel-accurate vector icon of the official Aadhunik Prachar Prasar brand mark:
 * - Deep Navy Blue "A" (or Crisp White in Dark Mode)
 * - Dynamic Lime Green Swoop Crossbar (#8DC63F)
 * - Concentric Sky Cyan Radiating Broadcast Waves (#00A3E0)
 */
export function BrandSymbol({
  className = 'w-10 h-10',
  isDark = false,
}: {
  className?: string;
  isDark?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 select-none', className)}
      aria-hidden="true"
    >
      {/* 1. Deep Navy "A" (or White in Dark Mode) */}
      <path
        d="M42 12L14 84H28L36.5 61H46L49 53H39.5L42 43L42 12Z"
        fill={isDark ? '#FFFFFF' : '#0F2459'}
      />
      <path
        d="M42 12L42 36L48 48L64 84H50L44 69H42L40 74H25L42 12Z"
        fill={isDark ? '#FFFFFF' : '#0F2459'}
      />
      <path
        d="M48 66L56 84H71L54 50L48 66Z"
        fill={isDark ? '#FFFFFF' : '#0F2459'}
      />

      {/* 2. Vibrant Lime Green Dynamic Swoop Crossbar */}
      <path
        d="M24 62C32 62 40 56 48 45C51 41 53 36 55 31C52 38 45 49 32 54L24 62Z"
        fill="#8DC63F"
      />
      <path
        d="M24 61C33 61 41.5 54.5 49 43C42 51 33 54.5 24 55V61Z"
        fill="#7CB342"
      />

      {/* 3. Radiating Broadcast Waves (Lime Green & Sky Cyan) */}
      <path
        d="M55 32C60 33 64 37 66 42C67.5 45.5 68 49 68 52"
        stroke="#8DC63F"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M62 23C70 24 76 29 80 37C82.5 42 83.5 47 84 52"
        stroke="#00A3E0"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M69 14C80 16 88 23 93 33C96.5 40 98 47 98.5 52"
        stroke="#00A3E0"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLogo({
  locale = 'hi',
  variant = 'full',
  theme = 'light',
  className,
  size = 'md',
}: BrandLogoProps) {
  const isDark = theme === 'dark';

  const sizeStyles = {
    sm: {
      img: 'h-8 sm:h-9',
      symbol: 'w-8 h-8',
      title: 'text-base',
      subtitle: 'text-[9px]',
    },
    md: {
      img: 'h-10 sm:h-11',
      symbol: 'w-10 h-10 sm:w-11 sm:h-11',
      title: 'text-lg sm:text-xl',
      subtitle: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      img: 'h-12 sm:h-14',
      symbol: 'w-12 h-12 sm:w-14 sm:h-14',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-xs',
    },
  }[size];

  // 1. Symbol Only variant
  if (variant === 'symbol') {
    if (isDark) {
      return <BrandSymbol className={cn(sizeStyles.symbol, className)} isDark={true} />;
    }
    return (
      <div className={cn('relative inline-flex items-center shrink-0', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand-symbol-transparent.png"
          alt="आधुनिक प्रचार प्रसार सिंबल"
          className={cn(sizeStyles.img, 'w-auto object-contain')}
        />
      </div>
    );
  }

  // 2. Light Theme Full Logo (Transparent tight-crop matching any background seamlessly)
  if (!isDark && variant === 'full') {
    return (
      <div className={cn('relative inline-flex items-center select-none group', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand-logo-transparent.png"
          alt="आधुनिक प्रचार प्रसार - Aadhunik Prachar Prasar"
          className={cn(
            sizeStyles.img,
            'w-auto object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.03)] group-hover:scale-[1.02] transition-transform duration-200'
          )}
        />
      </div>
    );
  }

  // 3. Dark Theme Full Logo (Footer) with high-contrast text and luminous official mark
  return (
    <div className={cn('inline-flex items-center gap-3 select-none group', className)}>
      <BrandSymbol className={sizeStyles.symbol} isDark={true} />

      <div className="flex flex-col text-left">
        <span
          className={cn(
            sizeStyles.title,
            'font-extrabold font-devanagari tracking-tight leading-tight text-white group-hover:text-gold-300 transition-colors'
          )}
        >
          आधुनिक प्रचार प्रसार
        </span>
        <span
          className={cn(
            sizeStyles.subtitle,
            'font-sans font-medium tracking-wider uppercase mt-0.5 text-gold-400'
          )}
        >
          Aadhunik Prachar Prasar · Lucknow
        </span>
      </div>
    </div>
  );
}
