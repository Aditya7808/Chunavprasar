'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { formatWhatsAppLink } from '@/lib/utils';
import { VideoFacade } from '@/components/common/VideoFacade';
import { ArrowUpRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero;
  const waMsg =
    locale === 'hi'
      ? 'नमस्ते! मैं आधुनिक प्रचार प्रसार से लखनऊ स्थित अपनी परियोजना पर चर्चा करना चाहता हूँ।'
      : 'Hello! I would like to discuss our strategic communication campaign with Aadhunik Prachar Prasar.';
  const waUrl = formatWhatsAppLink(siteConfig.contact.whatsapp, waMsg);

  return (
    <section className="relative flex items-center pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden bg-paper bg-notepad-grid">
      {/* Delicate warm radial blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gold-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow with Lucknow location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-paper-border text-gold-700 text-xs sm:text-sm font-devanagari font-bold shadow-paper-sm backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-gold-700 shrink-0" />
              <span>{t.eyebrow}</span>
            </div>

            {/* H1 Heading in Editorial Serif */}
            <h1 className="text-3.5xl sm:text-5xl md:text-6xl font-extrabold text-ink font-editorial tracking-tight leading-[1.25] sm:leading-[1.2]">
              आधुनिक सोच।
              <span className="block mt-1 text-gold-800">
                प्रभावशाली प्रस्तुति।
              </span>
            </h1>

            {/* Subheadline (Hindi + English one-liner) with solid contrast */}
            <div className="space-y-2 max-w-2xl">
              <p className="text-base sm:text-lg text-ink-800 font-devanagari leading-[1.8] font-medium">
                {t.subheadline}
              </p>
              <p className="text-xs sm:text-sm text-ink-600 font-sans font-medium leading-relaxed">
                {t.subheadlineEn}
              </p>
            </div>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-extrabold text-sm sm:text-base font-devanagari shadow-paper-md active:scale-[0.98] transition-all"
              >
                <span>{locale === 'hi' ? 'हमारी सेवाएं देखें' : 'Explore Services'}</span>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-card bg-white text-ink-800 hover:text-ink-950 border border-paper-border hover:border-gold-500 text-sm sm:text-base font-devanagari font-semibold hover:bg-paper-warm transition-all shadow-paper-sm"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]/20" />
                <span>{t.ctaWhatsapp}</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 border-t border-paper-border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-devanagari text-ink-700 bg-white/90 p-2.5 rounded-lg border border-paper-border shadow-paper-sm"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                    <span className="truncate">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-craft Media Showreel Facade (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-2.5 rounded-card-xl bg-white/95 border border-[#DFD3C1]/80 ring-1 ring-gold-400/25 shadow-paper-lg">
              <VideoFacade
                title={locale === 'hi' ? 'आधुनिक प्रचार प्रसार मीडिया शोरील' : 'Aadhunik Prachar Prasar Showreel'}
                subtitle={
                  locale === 'hi'
                    ? 'क्रिएटिव अभियान · वीडियो प्रोडक्शन · डिजिटल रणनीति'
                    : 'Creative Campaigns · Video Production · Digital Strategy'
                }
                videoSrc="/brand-showreel.mp4"
                aspectRatio="16/9"
                badge="Brand Showreel 4K"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
