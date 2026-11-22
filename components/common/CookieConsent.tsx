'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/content/translations';
import { ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

interface CookieConsentProps {
  locale: Locale;
}

export function CookieConsent({ locale }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('app_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('app_cookie_consent', 'accepted');
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      (window as unknown as { __initAnalytics?: () => void }).__initAnalytics?.();
    }
  };

  const decline = () => {
    localStorage.setItem('app_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="कुकी एवं गोपनीयता सहमति"
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto z-50 max-w-md bg-white/98 backdrop-blur-xl border border-paper-border rounded-card p-5 shadow-paper-lg text-ink font-devanagari animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0" />
          <h4 className="text-sm font-bold text-ink font-editorial">
            {locale === 'hi' ? 'गोपनीयता एवं कुकी वरीयता' : 'Privacy & Cookie Consent'}
          </h4>
        </div>
        <button
          onClick={decline}
          className="text-ink-400 hover:text-ink p-1 rounded focus:outline-none"
          aria-label="बंद करें"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-ink-600 leading-relaxed mb-4">
        {locale === 'hi'
          ? 'हम साइट अनुभव बेहतर बनाने तथा कानूनी अनुपालन हेतु आवश्यक कुकीज़ का उपयोग करते हैं।'
          : 'We use essential cookies to maintain security and optimize compliance reporting.'}
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={acceptAll}
          className="px-3.5 py-1.5 rounded-md bg-gold-600 hover:bg-gold-700 text-white text-xs font-bold font-devanagari shadow-paper-sm transition-all"
        >
          {locale === 'hi' ? 'स्वीकार करें' : 'Accept All'}
        </button>
        <button
          onClick={decline}
          className="px-3 py-1.5 rounded-md bg-paper border border-paper-border hover:bg-paper-warm text-ink-700 text-xs font-devanagari transition-all"
        >
          {locale === 'hi' ? 'केवल आवश्यक' : 'Essential Only'}
        </button>
        <Link
          href={`/${locale}/privacy`}
          className="text-[11px] text-ink-500 hover:text-gold-700 underline ml-auto"
        >
          {locale === 'hi' ? 'विवरण' : 'Details'}
        </Link>
      </div>
    </div>
  );
}
