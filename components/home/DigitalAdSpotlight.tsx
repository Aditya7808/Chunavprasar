'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  TrendingUp,
  MapPin,
  ShieldCheck,
  BarChart3,
  Users,
  Eye,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Info,
} from 'lucide-react';

interface DigitalAdSpotlightProps {
  locale: Locale;
}

export function DigitalAdSpotlight({ locale }: DigitalAdSpotlightProps) {
  const t = translations[locale].digitalSpotlight;

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative overflow-hidden" id="digital-spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          
          {/* Left Column: How Campaigns Run (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-gold-800 text-xs sm:text-sm uppercase tracking-wider font-sans font-bold mb-2">
                <TrendingUp className="w-4 h-4 text-gold-700" />
                <span>{t.howItWorksTitle}</span>
              </div>
              <p className="text-sm sm:text-base text-ink-900 font-devanagari font-medium leading-[1.8]">
                {locale === 'hi'
                  ? 'विधानसभा, जिला व नगर निगम स्तर पर सूक्ष्म भौगोलिक परिधि (Geo-Fencing) बनाकर विज्ञापन चलाए जाते हैं ताकि आपका संदेश केवल आपके प्रासंगिक क्षेत्र के नागरिकों तक पहुंचे।'
                  : 'Campaigns are hyper-localized using constituency boundary geo-fencing, ensuring ad spend is directed exclusively to registered voters within your target territory.'}
              </p>
            </div>

            {/* Steps Timeline with high-contrast, crystal-clear text */}
            <div className="space-y-3.5">
              {t.steps.map((st) => (
                <div
                  key={st.num}
                  className="p-4 sm:p-5 rounded-card bg-white border border-paper-border hover:border-gold-500/60 transition-all flex items-start gap-4 shadow-paper-sm"
                >
                  <div className="w-10 h-10 rounded-card-sm bg-[#F7EFE3] border border-gold-500/40 flex items-center justify-center shrink-0 text-gold-800 font-bold font-sans text-sm shadow-sm">
                    {st.num}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-ink-950 font-devanagari leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-800 font-devanagari font-normal leading-[1.7]">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Media Spend Notice with light gold hairline box */}
            <div className="p-4 rounded-card bg-[#FFFDF7] border border-gold-500/40 text-xs sm:text-sm text-ink-900 font-devanagari flex items-start gap-3 shadow-paper-sm">
              <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gold-900 block mb-0.5 font-bold">
                  {locale === 'hi' ? 'सीधा क्लाइंट भुगतान गारंटी:' : 'Direct Client Payment Guarantee:'}
                </strong>
                <span className="text-ink-800">{t.spendNotice}</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href={`/${locale}/services/digital-ad-marketing`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-bold text-sm font-devanagari active:scale-95 transition-all shadow-paper-sm"
              >
                <span>{locale === 'hi' ? 'डिजिटल विज्ञापन सेवा का विस्तृत विवरण' : 'Explore Digital Ad Marketing In-Depth'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Illustrative Performance Dashboard Mock (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dashboard Container: Refined Stationery / Cream Sheet Style */}
            <div className="rounded-card-lg bg-white border border-paper-border p-6 shadow-paper-md relative overflow-hidden">
              
              {/* Header of Mock */}
              <div className="flex items-center justify-between border-b border-paper-border pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span className="text-xs font-bold text-ink-800 font-sans uppercase tracking-wider">
                      Live Campaign Audit Mock
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-gold-800 font-editorial mt-0.5">
                    {t.mockTitle}
                  </h3>
                </div>
                <div className="text-[10px] bg-paper border border-paper-border px-2 py-1 rounded text-ink-600 font-sans font-medium">
                  Sample Figures
                </div>
              </div>

              {/* Geo-targeting parameters pill */}
              <div className="mb-5 p-3 rounded-card-sm bg-[#FAF6EE] border border-paper-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-ink-900 font-devanagari font-medium">
                  <MapPin className="w-4 h-4 text-gold-700" />
                  <span>विधानसभा क्षेत्र (Sample Radius 15km)</span>
                </div>
                <span className="text-[11px] text-emerald-800 font-bold font-sans">Active Fencing</span>
              </div>

              {/* 4 Metric Tiles */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-card-sm bg-[#FAF6EE] border border-paper-border">
                  <div className="flex items-center gap-1.5 text-ink-600 text-[11px] font-sans font-semibold">
                    <Users className="w-3.5 h-3.5 text-gold-700" />
                    <span>Unique Reach</span>
                  </div>
                  <div className="text-xl font-extrabold text-ink-950 font-sans mt-1">
                    2,45,800
                  </div>
                  <span className="text-[10px] text-emerald-800 font-semibold">98.2% in target geo</span>
                </div>

                <div className="p-3.5 rounded-card-sm bg-[#FAF6EE] border border-paper-border">
                  <div className="flex items-center gap-1.5 text-ink-600 text-[11px] font-sans font-semibold">
                    <Eye className="w-3.5 h-3.5 text-gold-700" />
                    <span>Impressions</span>
                  </div>
                  <div className="text-xl font-extrabold text-ink-950 font-sans mt-1">
                    7,12,400
                  </div>
                  <span className="text-[10px] text-ink-600 font-medium">Freq ~ 2.9x (optimal)</span>
                </div>

                <div className="p-3.5 rounded-card-sm bg-[#FAF6EE] border border-paper-border">
                  <div className="flex items-center gap-1.5 text-ink-600 text-[11px] font-sans font-semibold">
                    <BarChart3 className="w-3.5 h-3.5 text-gold-700" />
                    <span>Video 100% Views</span>
                  </div>
                  <div className="text-xl font-extrabold text-ink-950 font-sans mt-1">
                    1,18,900
                  </div>
                  <span className="text-[10px] text-emerald-800 font-semibold">VTR: 48.3%</span>
                </div>

                <div className="p-3.5 rounded-card-sm bg-[#FAF6EE] border border-paper-border">
                  <div className="flex items-center gap-1.5 text-ink-600 text-[11px] font-sans font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-700" />
                    <span>Effective CPC</span>
                  </div>
                  <div className="text-xl font-extrabold text-gold-800 font-sans mt-1">
                    ₹0.42
                  </div>
                  <span className="text-[10px] text-ink-600 font-medium">Direct platform rate</span>
                </div>
              </div>

              {/* A/B Test Creative Hook Comparison Simulation */}
              <div className="p-3.5 rounded-card-sm bg-[#FAF6EE] border border-paper-border mb-4">
                <span className="text-[11px] font-bold text-ink-700 font-sans uppercase block mb-2 tracking-wider">
                  A/B Creative Split Test Status
                </span>
                <div className="space-y-2 text-xs font-devanagari">
                  <div className="flex items-center justify-between text-ink-950 font-medium">
                    <span className="truncate pr-2">वेरिएंट A: विकास कार्य इन्फोग्राफिक</span>
                    <span className="text-emerald-800 font-sans font-bold">58% Winner</span>
                  </div>
                  <div className="w-full bg-paper-border h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full w-[58%]" />
                  </div>

                  <div className="flex items-center justify-between text-ink-700 pt-1">
                    <span className="truncate pr-2">वेरिएंट B: सामान्य वक्तव्य पोस्टर</span>
                    <span className="text-ink-600 font-sans font-semibold">42%</span>
                  </div>
                  <div className="w-full bg-paper-border h-2 rounded-full overflow-hidden">
                    <div className="bg-ink-400 h-full w-[42%]" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-2.5 rounded-lg bg-[#FAF5EB] border border-paper-border flex items-start gap-2 text-xs text-ink-700 font-devanagari">
                <Info className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.mockSubtitle}</span>
              </div>
            </div>

            {/* No-guarantee disclaimer box with light amber hairline border */}
            <div className="p-4 rounded-card bg-[#FFFDF8] border border-amber-300/60 text-amber-950 text-xs font-devanagari leading-relaxed flex items-start gap-2.5 shadow-paper-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{t.noGuaranteeNotice}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
