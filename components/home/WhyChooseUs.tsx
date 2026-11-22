'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  MapPin,
  Layers,
  Clock,
  ShieldCheck,
  Receipt,
  Scale,
} from 'lucide-react';

interface WhyChooseUsProps {
  locale: Locale;
}

export function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const t = translations[locale].whyUs;

  const cardIcons = [MapPin, Layers, Clock, ShieldCheck, Receipt, Scale];

  return (
    <section className="py-12 sm:py-16 bg-[#F5EFE6] border-y border-paper-border text-ink relative" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.cards.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="p-7 rounded-card-lg bg-white border border-paper-border hover:border-gold-500/60 hover:shadow-paper-md transition-all duration-300 flex flex-col justify-between group shadow-paper-sm"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-card-sm bg-[#F7EFE3] text-gold-700 flex items-center justify-center border border-gold-500/30 group-hover:scale-110 group-hover:border-gold-500 transition-all shadow-paper-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink font-editorial group-hover:text-gold-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 font-devanagari leading-[1.8]">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-paper-border flex items-center justify-between text-[11px] font-sans font-semibold text-ink-500">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-gold-700 font-devanagari">सत्यापित मानक</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
