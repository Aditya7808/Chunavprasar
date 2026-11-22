'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Compass, Target, ArrowRight } from 'lucide-react';

interface AboutSnapshotProps {
  locale: Locale;
}

export function AboutSnapshot({ locale }: AboutSnapshotProps) {
  const t = translations[locale].aboutSnapshot;

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Vision Box */}
          <div className="p-6 sm:p-8 rounded-card-lg bg-white/95 border border-[#DFD3C1]/75 shadow-paper-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-paper-md transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-card-sm bg-[#F7EFE3] border border-gold-500/30 flex items-center justify-center text-gold-700">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink font-editorial">
                {t.visionTitle}
              </h3>
              <p className="text-sm sm:text-base text-ink-700 font-devanagari leading-[1.8]">
                {t.visionDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DFD3C1]/50 text-xs text-gold-700 font-sans uppercase tracking-wider font-semibold">
              Integrity · Restraint · Excellence
            </div>
          </div>

          {/* Mission Box */}
          <div className="p-6 sm:p-8 rounded-card-lg bg-white/95 border border-[#DFD3C1]/75 shadow-paper-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-paper-md transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-card-sm bg-[#F7EFE3] border border-gold-500/30 flex items-center justify-center text-gold-700">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink font-editorial">
                {t.missionTitle}
              </h3>
              <p className="text-sm sm:text-base text-ink-700 font-devanagari leading-[1.8]">
                {t.missionDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#DFD3C1]/50 text-xs text-gold-700 font-sans uppercase tracking-wider font-semibold">
              Constituency Focus · Verifiable Impact
            </div>
          </div>
        </div>

        {/* Link to About */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-gold-700 hover:text-gold-800 font-devanagari group border-b border-gold-600/40 pb-1"
          >
            <span>{t.readMore}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
