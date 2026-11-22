'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { ShieldCheck, CheckCircle2, ArrowRight, FileCheck } from 'lucide-react';

interface ComplianceTeaserProps {
  locale: Locale;
}

export function ComplianceTeaser({ locale }: ComplianceTeaserProps) {
  const t = translations[locale].complianceTeaser;

  return (
    <section className="py-10 sm:py-14 bg-paper bg-notepad-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-card-lg bg-white/95 border border-gold-500/40 p-7 sm:p-10 shadow-paper-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EFE3] text-gold-700 border border-gold-500/40 text-xs font-sans font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-700" />
                <span>{t.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink font-editorial leading-snug">
                {t.title}
              </h3>

              <p className="text-sm sm:text-base text-ink-700 font-devanagari leading-relaxed">
                {t.desc}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-devanagari text-ink-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{t.bullet1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{t.bullet2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{t.bullet3}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                href={`/${locale}/compliance`}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-extrabold text-sm sm:text-base font-devanagari shadow-paper-md active:scale-95 transition-all text-center"
              >
                <FileCheck className="w-5 h-5 text-white" />
                <span>{t.btn}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
