'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { servicesData } from '@/content/services';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  Palette,
  Video,
  TrendingUp,
  Smartphone,
  Maximize2,
  Camera,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServicesGridProps {
  locale: Locale;
}

export function ServicesGrid({ locale }: ServicesGridProps) {
  const t = translations[locale].servicesSection;

  // Map icon names to Lucide icons
  const iconMap: Record<string, React.ElementType> = {
    Palette,
    Video,
    TrendingUp,
    Smartphone,
    Maximize2,
    Camera,
    Megaphone,
  };

  // 5 core services
  const coreServices = servicesData.filter((s) => s.isCore);

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Palette;
            const isFeatured = service.isPopular;

            return (
              <div
                key={service.slug}
                className={cn(
                  'rounded-card-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group',
                  isFeatured
                    ? 'bg-[#FFFDF7] text-ink border border-gold-500/50 shadow-paper-md ring-1 ring-gold-400/25 hover:border-gold-600/70 scale-[1.01] md:scale-100 lg:scale-[1.01]'
                    : 'bg-white/95 text-ink border border-[#DFD3C1]/75 hover:border-gold-500/50 hover:shadow-paper-md shadow-paper-sm'
                )}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-6 bg-gold-600 text-white font-extrabold text-[11px] font-sans uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <span>★</span>
                    <span>{t.popularBadge}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-card-sm flex items-center justify-center transition-colors',
                      isFeatured
                        ? 'bg-[#F7EFE3] border border-gold-600/40 text-gold-700'
                        : 'bg-[#F7EFE3] border border-paper-border text-gold-700 group-hover:bg-[#F3ECE0]'
                    )}
                  >
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title & 1-line promise */}
                  <div>
                    <h3 className="text-xl font-bold font-editorial mb-2 text-ink group-hover:text-gold-700 transition-colors">
                      {service.title[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm font-devanagari leading-relaxed min-h-[40px] text-ink-600">
                      {service.shortPromise[locale]}
                    </p>
                  </div>

                  {/* 3 Deliverables List */}
                  <div className="pt-3 border-t border-paper-border space-y-2">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-ink-500 block">
                      {locale === 'hi' ? 'प्रमुख परिणाम (Deliverables)' : 'Key Deliverables'}
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables[locale]?.slice(0, 3).map((item: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm font-devanagari text-ink-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Link */}
                <div className="mt-6 pt-4 border-t border-paper-border">
                  <Link
                    href={`/${locale}/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-devanagari text-gold-700 group-hover:text-gold-800 transition-colors"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Services Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-ink-600 font-devanagari">
            {locale === 'hi'
              ? 'सपोर्टिंग सेवाएं: फोटोग्राफी एवं इवेंट कवरेज · पीआर एवं मीडिया समन्वय'
              : 'Supporting Services: Photography & Event Coverage · PR & Media Coordination'}
          </p>
        </div>
      </div>
    </section>
  );
}
