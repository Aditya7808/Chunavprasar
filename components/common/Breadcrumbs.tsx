'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Locale } from '@/content/translations';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  return (
    <nav aria-label="ब्रेडक्रम्ब नेविगेशन" className="py-3 text-xs sm:text-sm font-devanagari">
      <ol className="flex items-center flex-wrap gap-1.5 text-slate-400">
        <li className="flex items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-gold-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{locale === 'hi' ? 'होम' : 'Home'}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-gold-300 font-semibold truncate max-w-[220px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-gold-400 transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
