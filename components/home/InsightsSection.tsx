'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { insightsData } from '@/content/insights';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface InsightsSectionProps {
  locale: Locale;
}

export function InsightsSection({ locale }: InsightsSectionProps) {
  const t = translations[locale].insightsSnapshot;

  return (
    <section className="py-12 sm:py-16 bg-[#F5EFE6] border-y border-paper-border text-ink relative" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="rounded-card-lg bg-white border border-paper-border hover:border-gold-500/60 overflow-hidden shadow-paper-sm hover:shadow-paper-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Cover */}
                <ImagePlaceholder
                  src={article.coverImage}
                  aspectRatio="16/9"
                  label={article.title[locale]}
                  category={article.category[locale]}
                  altGuidance={`लेख आवरण: ${article.title[locale]}`}
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-ink-500 font-sans">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-700" />
                      <span className="font-devanagari">{article.readTime[locale]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-ink-400" />
                      <span>{article.publishDate}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink font-editorial leading-snug group-hover:text-gold-700 transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 font-devanagari leading-relaxed line-clamp-3">
                    {article.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-paper-border mt-2">
                <Link
                  href={`/${locale}/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gold-700 group-hover:text-gold-800 font-devanagari pt-3 transition-colors"
                >
                  <span>{locale === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Article'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all insights */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card bg-white border border-paper-border text-ink hover:border-gold-500 text-sm font-bold font-devanagari shadow-paper-sm hover:shadow-paper-md transition-all"
          >
            <span>{locale === 'hi' ? 'सभी अंतर्दृष्टि लेख देखें' : 'Browse All Insights'}</span>
            <ArrowRight className="w-4 h-4 text-gold-700" />
          </Link>
        </div>
      </div>
    </section>
  );
}
