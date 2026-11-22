'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Phone, ArrowRight, Shield } from 'lucide-react';

interface CTABannerProps {
  locale: Locale;
}

export function CTABanner({ locale }: CTABannerProps) {
  const t = translations[locale].ctaBanner;

  return (
    <section className="py-10 sm:py-14 bg-[#F5EFE6] text-ink relative overflow-hidden border-t border-paper-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-gold-500/35 text-gold-800 text-xs font-sans uppercase font-bold tracking-widest shadow-paper-sm">
            <Shield className="w-3.5 h-3.5" />
            <span>Consultation & Project Initiation</span>
          </div>

          <h2 className="text-2.5xl sm:text-4xl md:text-4.5xl font-extrabold font-editorial tracking-tight text-ink leading-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-ink-700 font-devanagari leading-relaxed">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-card bg-white text-ink-800 hover:text-ink-950 border border-paper-border hover:border-gold-500 font-bold text-sm sm:text-base font-devanagari shadow-paper-sm hover:bg-paper-warm transition-all"
            >
              <Phone className="w-5 h-5 text-gold-700" />
              <span>{t.btnPhone}: {siteConfig.contact.displayPhone}</span>
            </a>

            <a
              href="#enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-extrabold text-sm sm:text-base font-devanagari shadow-paper-md active:scale-95 transition-all"
            >
              <span>{t.btnEnquiry}</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
