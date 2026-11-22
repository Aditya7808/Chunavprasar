'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { ShieldCheck, MapPin, Layers, CheckCircle2, Lock } from 'lucide-react';

interface TrustStripProps {
  locale: Locale;
}

export function TrustStrip({ locale }: TrustStripProps) {
  const t = translations[locale].trustStrip;

  const icons = [MapPin, Layers, CheckCircle2, ShieldCheck];

  return (
    <section className="bg-[#F5EFE6] border-y border-paper-border py-5 sm:py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3.5 rounded-card bg-white/90 border border-paper-border hover:border-gold-500/50 shadow-paper-sm transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F7EFE3] border border-gold-500/30 flex items-center justify-center shrink-0 text-gold-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink font-devanagari leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-600 font-devanagari mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client confidentiality notice instead of unverified logos */}
        <div className="mt-6 pt-4 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 font-devanagari gap-2">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-gold-700 shrink-0" />
            <span>{t.notice}</span>
          </div>
          <span className="text-[11px] font-sans text-ink-400">
            Strict Non-Disclosure & Compliance Standard
          </span>
        </div>
      </div>
    </section>
  );
}
