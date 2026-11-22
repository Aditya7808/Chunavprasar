'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Palette, Video, Layers, Cpu } from 'lucide-react';

interface CapabilitiesGridProps {
  locale: Locale;
}

export function CapabilitiesGrid({ locale }: CapabilitiesGridProps) {
  const t = translations[locale].capabilities;

  const icons = [Palette, Video, Layers, Cpu];

  return (
    <section className="py-12 sm:py-16 bg-[#F5EFE6] border-y border-paper-border text-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="rounded-card-lg p-6 bg-white border border-paper-border hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group shadow-paper-sm hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-card-sm bg-[#F7EFE3] border border-gold-500/40 flex items-center justify-center text-gold-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink font-editorial">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-600 font-devanagari mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-paper-border">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-gold-700">
                    {item.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
