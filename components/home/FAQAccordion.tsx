'use client';

import React, { useState } from 'react';
import { Locale, translations } from '@/content/translations';
import { homeFAQs } from '@/content/faq';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  locale: Locale;
}

export function FAQAccordion({ locale }: FAQAccordionProps) {
  const t = translations[locale].faq;
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="space-y-4">
          {homeFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  'rounded-card border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'border-gold-600 bg-white shadow-paper-md'
                    : 'border-paper-border hover:border-gold-500/50 bg-white/80 shadow-paper-sm'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-ink font-editorial leading-snug">
                    {faq.question[locale]}
                  </span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                      isOpen ? 'bg-gold-600 text-white rotate-180' : 'bg-paper text-ink-600 border border-paper-border'
                    )}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-ink-700 font-devanagari leading-[1.8] border-t border-paper-border">
                    <p>{faq.answer[locale]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
