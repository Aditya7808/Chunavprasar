import React from 'react';
import Link from 'next/link';
import { Locale } from '@/content/translations';
import { insightsData } from '@/content/insights';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'ज्ञान एवं लेख | आधुनिक प्रचार प्रसार' : 'Insights & Perspectives | Aadhunik Prachar Prasar',
    description: isHi
      ? 'सार्वजनिक संचार, देवनागरी टाइपोग्राफी, वीडियो उत्पादन और डिजिटल विज्ञापन अनुपालन पर विचार।'
      : 'Authoritative perspectives on Devanagari typography, public communication ethics, and ad compliance.',
  };
}

export default function InsightsPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'लेख व विचार' : 'Insights',
              },
            ]}
          />
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'ज्ञान व तकनीकी विश्लेषण' : 'Insights & Research'}
          title={
            locale === 'hi'
              ? 'आधुनिक सार्वजनिक संचार पर शोधपरक लेख'
              : 'Research & Perspectives on Modern Public Communication'
          }
          subtitle={
            locale === 'hi'
              ? 'तटस्थ, गैर-पक्षपातपूर्ण और व्यावहारिक विश्लेषण — देवनागरी टाइपोग्राफी से लेकर डिजिटल विज्ञापन नियमों तक।'
              : 'Neutral, evidence-based, and non-partisan explorations of visual identity, short-form video craft, and platform compliance.'
          }
          theme="light"
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="rounded-card-lg bg-white border border-slate-200/90 hover:border-gold-500/50 overflow-hidden shadow-navy-sm hover:shadow-navy-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <ImagePlaceholder
                  src={article.coverImage}
                  aspectRatio="16/9"
                  label={article.title[locale]}
                  category={article.category[locale]}
                  altGuidance={`आलेख आवरण: ${article.title[locale]}`}
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-sans">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span className="font-devanagari">{article.readTime[locale]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.publishDate}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 font-devanagari leading-snug group-hover:text-gold-600 transition-colors line-clamp-2">
                    {article.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed line-clamp-3">
                    {article.summary[locale]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/${locale}/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-950 group-hover:text-gold-600 font-devanagari pt-3 transition-colors"
                >
                  <span>{locale === 'hi' ? 'विस्तार से पढ़ें' : 'Read Full Analysis'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
