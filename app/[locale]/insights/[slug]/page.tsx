import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/content/translations';
import { insightsData } from '@/content/insights';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const locales = ['hi', 'en'];

  for (const loc of locales) {
    for (const article of insightsData) {
      params.push({ locale: loc, slug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const loc = (params.locale === 'en' ? 'en' : 'hi') as Locale;
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title[loc]} | आधुनिक प्रचार प्रसार`,
    description: article.summary[loc],
  };
}

export default function InsightDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const otherArticles = insightsData.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'लेख व विचार' : 'Insights',
                href: `/${locale}/insights`,
              },
              {
                label: article.title[locale],
              },
            ]}
          />
        </div>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-navy-950 text-gold-400">
              {article.category[locale]}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-sans">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime[locale]}</span>
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-sans">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishDate}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4.5xl font-extrabold text-navy-950 font-devanagari tracking-tight leading-tight">
            {article.title[locale]}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-devanagari leading-relaxed">
            {article.summary[locale]}
          </p>

          <div className="flex items-center gap-3 pt-3 border-t border-slate-200 text-xs font-devanagari text-slate-600">
            <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
              आ
            </div>
            <div>
              <span className="font-bold text-navy-950 block">{article.author.name}</span>
              <span className="text-slate-500">{article.author.role[locale]}</span>
            </div>
          </div>
        </header>

        {/* Featured Visual */}
        <div className="mb-10">
          <ImagePlaceholder
            src={article.coverImage}
            aspectRatio="16/9"
            label={article.title[locale]}
            category={article.category[locale]}
            altGuidance={`लेख आवरण: ${article.title[locale]}`}
            className="shadow-navy-md"
          />
        </div>

        {/* Body Content */}
        <article className="prose prose-slate max-w-none font-devanagari text-slate-800 text-base sm:text-lg leading-[1.9] space-y-6 bg-white p-8 sm:p-12 rounded-card-lg border border-slate-200/90 shadow-navy-sm">
          <div
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: article.content[locale]
                .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-navy-950 mt-8 mb-4">$1</h3>')
                .replace(/^#### (.*$)/gim, '<h4 class="text-xl font-bold text-navy-900 mt-6 mb-2 text-gold-700">$1</h4>')
                .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-navy-950 font-bold">$1</strong>'),
            }}
          />
        </article>

        {/* Editorial Policy & Non-Partisan Notice */}
        <div className="mt-8 p-4 rounded-card bg-ivory-100 border border-slate-200 text-xs text-slate-600 font-devanagari">
          <p>
            {locale === 'hi'
              ? 'संपादकीय नीति: यह लेख आधुनिक प्रचार प्रसार के शोध दल द्वारा विशुद्ध रूप से शैक्षणिक एवं तकनीकी मार्गदर्शन के उद्देश्य से तैयार किया गया है। यह किसी राजनीतिक दल अथवा विचारधारा का प्रचार नहीं करता।'
              : 'Editorial Policy: This analysis is published by Aadhunik Prachar Prasar Research Desk strictly for educational and technical guidance. It does not endorse any political party or ideology.'}
          </p>
        </div>

        {/* Other Insights */}
        {otherArticles.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-6">
              {locale === 'hi' ? 'संबंधित अन्य लेख' : 'Related Perspectives'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.map((oa) => (
                <div key={oa.id} className="p-6 rounded-card bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-gold-700">
                      {oa.category[locale]}
                    </span>
                    <h4 className="text-base font-bold text-navy-950 font-devanagari leading-snug">
                      {oa.title[locale]}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={`/${locale}/insights/${oa.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-gold-600 font-devanagari"
                    >
                      <span>{locale === 'hi' ? 'लेख पढ़ें' : 'Read Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
