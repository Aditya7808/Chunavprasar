import React from 'react';
import { Locale } from '@/content/translations';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { VideoFacade } from '@/components/common/VideoFacade';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { ShieldCheck, Info } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'हमारा काम एवं केस स्टडीज | आधुनिक प्रचार प्रसार' : 'Our Work & Portfolio | Aadhunik Prachar Prasar',
    description: isHi
      ? 'उत्तर प्रदेश में राजनीतिक संचार, वीडियो निर्माण, डिजिटल विज्ञापन और आउटडोर पब्लिसिटी के सफल प्रोजेक्ट्स।'
      : 'Portfolio of political communication campaigns, documentary films, digital ad flights, and outdoor branding across Uttar Pradesh.',
  };
}

export default function WorkPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  return (
    <div className="pt-28 pb-20 bg-white text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'हमारा काम' : 'Our Work',
              },
            ]}
          />
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'पोर्टफोलियो एवं केस स्टडीज' : 'Portfolio & Case Studies'}
          title={
            locale === 'hi'
              ? 'रणनीतिक दृष्टि। प्रभावशाली जमीनी उपस्थिति।'
              : 'Strategic Rigor. Tangible Ground Impact.'
          }
          subtitle={
            locale === 'hi'
              ? 'लखनऊ एवं उत्तर प्रदेश के विभिन्न जनपदों में संचालित अभियान, विकास रिपोर्ट कार्ड्स और लक्षित डिजिटल विज्ञापन मॉडल।'
              : 'A curated index of constituency report cards, documentary films, and micro-targeted digital ad flights across Uttar Pradesh.'
          }
          theme="light"
        />

        {/* Non-partisan & Confidentiality notice */}
        <div className="mb-8 p-4 rounded-card bg-[#FFFDF8] border border-[#DFD3C1]/80 shadow-paper-sm flex items-start gap-3 text-xs sm:text-sm text-ink-700 font-devanagari max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
          <p>
            {locale === 'hi'
              ? 'गोपनीयता नीति: चुनाव आचार संहिता और क्लाइंट गोपनीयता अनुबंध (NDA) के कारण कुछ परियोजनाएं प्रारूप (Concept Frameworks) के रूप में प्रदर्शित की गई हैं। अधिकृत क्लाइंट्स का विवरण केवल औपचारिक अनुमति के पश्चात ही साझा किया जाता है।'
              : 'Confidentiality Standard: In compliance with non-disclosure agreements, certain projects are presented as illustrative conceptual frameworks. Client names and metrics are disclosed only when formally authorized.'}
          </p>
        </div>

        {/* Official Brand Showreel Spotlight */}
        <div className="mb-14 p-2.5 sm:p-3 rounded-card-xl bg-white border border-[#DFD3C1]/80 ring-1 ring-gold-400/25 shadow-paper-md max-w-4xl mx-auto">
          <VideoFacade
            title={locale === 'hi' ? 'आधिकारिक ब्रांड शोरील · आधुनिक प्रचार प्रसार' : 'Official Brand Showreel · Aadhunik Prachar Prasar'}
            subtitle={
              locale === 'hi'
                ? 'सिनेमैटिक वीडियो, डिजिटल कैंपेन नेटवर्क और राजनीतिक संचार का एकीकृत प्रदर्शन (4K)'
                : 'Integrated showcase of cinematic production, digital campaign networks, and public outreach (4K)'
            }
            videoSrc="/brand-showreel.mp4"
            aspectRatio="16/9"
            badge="Brand Reel 4K"
          />
        </div>

        {/* Filterable Work Component */}
        <FeaturedWork locale={locale} />

      </div>
    </div>
  );
}
