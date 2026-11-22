import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/content/translations';
import { servicesData, ServiceItem } from '@/content/services';
import { projectsData } from '@/content/projects';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { VideoFacade } from '@/components/common/VideoFacade';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import {
  Palette,
  Video,
  TrendingUp,
  Smartphone,
  Maximize2,
  Camera,
  Megaphone,
  CheckCircle2,
  ShieldCheck,
  Share2,
  PlayCircle,
  MessageSquare,
  HelpCircle,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const locales = ['hi', 'en'];

  for (const loc of locales) {
    for (const service of servicesData) {
      params.push({ locale: loc, slug: service.slug });
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
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title[loc]} | आधुनिक प्रचार प्रसार`,
    description: service.summary[loc],
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ElementType> = {
    Palette,
    Video,
    TrendingUp,
    Smartphone,
    Maximize2,
    Camera,
    Megaphone,
    Share2,
    PlayCircle,
    MessageSquare,
  };

  const IconComponent = iconMap[service.iconName] || Palette;
  const isDigitalAd = service.slug === 'digital-ad-marketing';

  // Sample work related to this service
  const relatedProjects = projectsData.filter((p) => {
    if (service.slug === 'creative-design-branding') return p.category === 'design';
    if (service.slug === 'video-production-editing') return p.category === 'video';
    if (service.slug === 'digital-ad-marketing') return p.category === 'digital-ads';
    if (service.slug === 'photography-event-coverage') return p.category === 'photography';
    if (service.slug === 'print-outdoor-advertising') return p.category === 'print-outdoor';
    return true;
  }).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'सेवाएं' : 'Services',
                href: `/${locale}/services`,
              },
              {
                label: service.title[locale],
              },
            ]}
          />
        </div>

        {/* Hero Header */}
        <div className="rounded-card-lg bg-navy-hero text-white p-8 sm:p-12 border border-gold-500/30 mb-12 shadow-navy-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-jaali-pattern bg-[length:24px_24px] opacity-15 pointer-events-none" />
          
          <div className="relative max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-sans font-bold uppercase tracking-wider">
              <IconComponent className="w-4 h-4" />
              <span>{service.isCore ? (locale === 'hi' ? 'मुख्य सेवा' : 'Core Service') : (locale === 'hi' ? 'सहायक सेवा' : 'Supporting Discipline')}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-devanagari tracking-tight text-white leading-tight">
              {service.title[locale]}
            </h1>

            <p className="text-base sm:text-xl text-gold-300 font-devanagari leading-relaxed">
              {service.shortPromise[locale]}
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-devanagari leading-[1.75] pt-2">
              {service.overview[locale]}
            </p>
          </div>
        </div>

        {/* Video Production Showreel Feature */}
        {service.slug === 'video-production-editing' && (
          <div className="mb-14 p-2.5 sm:p-3 rounded-card-xl bg-white border border-[#DFD3C1]/80 ring-1 ring-gold-400/25 shadow-paper-lg">
            <VideoFacade
              title={locale === 'hi' ? 'सिनेमैटिक वीडियो शोरील · आधुनिक प्रचार प्रसार' : 'Cinematic Production Reel · Aadhunik Prachar Prasar'}
              subtitle={
                locale === 'hi'
                  ? 'उत्तर प्रदेश के 75 जनपदों में ग्राउंड कवरेज, 4K सिनेमैटोग्राफी व इन-हाउस स्टूडियो पोस्ट-प्रोडक्शन'
                  : 'Ground documentary coverage, 4K cinematography and in-house studio post-production across Uttar Pradesh'
              }
              videoSrc="/brand-showreel.mp4"
              aspectRatio="16/9"
              badge="Production Reel 4K"
            />
          </div>
        )}

        {/* Deliverables & Capabilities Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Deliverables (8 cols) */}
          <div className="lg:col-span-8 p-8 rounded-card-lg bg-white border border-slate-200/90 shadow-navy-sm">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
              <CheckCircle2 className="w-5 h-5 text-gold-600" />
              <h2 className="text-xl font-bold font-devanagari text-navy-950">
                {locale === 'hi' ? 'प्रमुख परिणाम एवं डिलीवरेबल्स' : 'Key Deliverables & Specifications'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables[locale].map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-card bg-ivory-50/70 border border-slate-200 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {dIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-devanagari text-slate-800 leading-snug">
                    {del}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Standards (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-card-lg bg-navy-950 text-white border border-gold-500/25 shadow-navy-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-gold-400 text-xs font-sans uppercase font-bold tracking-wider">
                <Layers className="w-4 h-4" />
                <span>{locale === 'hi' ? 'तकनीकी उपकरण व मानक' : 'Tools & Infrastructure'}</span>
              </div>
              <h3 className="text-lg font-bold font-devanagari text-white mb-4">
                {locale === 'hi' ? 'उद्योग-मानक तकनीक' : 'Enterprise Tools'}
              </h3>
              <ul className="space-y-3">
                {service.toolsCapabilities.map((tool, tIdx) => (
                  <li key={tIdx} className="text-xs sm:text-sm text-slate-300 font-sans flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-navy-800 text-xs text-slate-400 font-devanagari">
              {locale === 'hi'
                ? 'सभी एसेट्स सुरक्षित, लाइसेंस-प्राप्त और कॉपीराइट-सुरक्षित रखे जाते हैं।'
                : 'All workflows enforce digital asset security and commercial licensing.'}
            </div>
          </div>

        </div>

        {/* ================= SPECIAL SECTION FOR DIGITAL AD MARKETING ================= */}
        {isDigitalAd && service.digitalAdDetails && (
          <div className="mb-20 space-y-12">
            
            {/* Direct Client Ad Spend Banner */}
            <div className="rounded-card-lg bg-navy-900 border-2 border-gold-500/50 p-6 sm:p-8 text-white shadow-navy-md">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-gold-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-devanagari text-gold-300 mb-2">
                    {locale === 'hi' ? 'पारदर्शी बिलिंग व प्रत्यक्ष मीडिया भुगतान गारंटी' : 'Transparent Direct Platform Billing Policy'}
                  </h3>
                  <p className="text-sm text-slate-200 font-devanagari leading-relaxed">
                    {service.digitalAdDetails.adSpendNote[locale]}
                  </p>
                </div>
              </div>
            </div>

            {/* Platforms Covered */}
            <div>
              <h3 className="text-2xl font-bold font-devanagari text-navy-950 mb-6">
                {locale === 'hi' ? 'समर्थित विज्ञापन प्लेटफॉर्म्स' : 'Advertising Platforms Covered'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.digitalAdDetails.platforms.map((plat, idx) => {
                  const PlatIcon = iconMap[plat.icon] || Share2;
                  return (
                    <div key={idx} className="p-6 rounded-card bg-white border border-slate-200 shadow-sm space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-950 text-gold-400 flex items-center justify-center">
                        <PlatIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-navy-950 font-sans">
                        {plat.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed">
                        {locale === 'hi' ? plat.hiDesc : plat.enDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Targeting Options & Creative Formats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Targeting */}
              <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-4">
                  {locale === 'hi' ? 'सूक्ष्म ऑडियंस लक्ष्यीकरण (Targeting Options)' : 'Micro-Targeting Options'}
                </h3>
                <div className="space-y-4">
                  {service.digitalAdDetails.targetingOptions.map((opt, oIdx) => (
                    <div key={oIdx} className="p-4 rounded-card bg-ivory-50/70 border border-slate-200">
                      <h4 className="text-sm font-bold text-navy-950 font-devanagari">
                        {opt.title[locale]}
                      </h4>
                      <p className="text-xs text-slate-600 font-devanagari mt-1 leading-relaxed">
                        {opt.desc[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Formats */}
              <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-4">
                  {locale === 'hi' ? 'समर्थित विज्ञापन प्रारूप (Creative Formats)' : 'Ad Creative Formats'}
                </h3>
                <div className="space-y-4">
                  {service.digitalAdDetails.creativeFormats.map((fmt, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-card bg-ivory-50/70 border border-slate-200">
                      <h4 className="text-sm font-bold text-navy-950 font-devanagari">
                        {fmt.title[locale]}
                      </h4>
                      <span className="text-[11px] font-sans text-gold-700 font-semibold block mt-0.5">
                        {fmt.specs}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reporting Metrics & Explanation */}
            <div className="p-8 rounded-card-lg bg-navy-950 text-white border border-gold-500/30">
              <h3 className="text-2xl font-bold font-devanagari text-white mb-2">
                {locale === 'hi' ? 'पारदर्शी रिपोर्टिंग मेट्रिक्स' : 'Verified Reporting Metrics'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-devanagari mb-6">
                {locale === 'hi'
                  ? 'हम निम्नलिखित सत्यापित मेट्रिक्स की साप्ताहिक और मासिक विस्तृत ऑडिट रिपोर्ट सौंपते हैं:'
                  : 'We furnish weekly and monthly audit reports covering these authenticated platform indicators:'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.digitalAdDetails.reportingMetrics.map((met, mIdx) => (
                  <div key={mIdx} className="p-4 rounded-card bg-navy-900 border border-navy-800">
                    <span className="text-xs font-bold text-gold-400 font-sans block">
                      {met.metric}
                    </span>
                    <span className="text-sm font-bold text-white font-devanagari block mt-1">
                      {locale === 'hi' ? met.hiLabel : met.enLabel}
                    </span>
                    <p className="text-[11px] text-slate-400 font-sans mt-2 leading-relaxed">
                      {met.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 90-Day Campaign Timeline */}
            <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gold-600" />
                <h3 className="text-2xl font-bold font-devanagari text-navy-950">
                  {locale === 'hi' ? '90-दिवसीय चुनाव/अभियान रोडमैप' : 'Sample 90-Day Campaign Roadmap'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-devanagari mb-8">
                {locale === 'hi'
                  ? 'नींव से लेकर अंतिम मतदान तक का सुनियोजित, 4-चरणीय वैज्ञानिक प्रचार मॉडल:'
                  : 'A structured 4-phase mobilization roadmap from foundation verification to GOTV:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.digitalAdDetails.campaignRoadmap90Days.map((rm, rIdx) => (
                  <div key={rIdx} className="p-5 rounded-card bg-ivory-50/80 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-sans font-bold text-gold-700 mb-2">
                        <span>{rm.phase}</span>
                        <span>{rm.weeks}</span>
                      </div>
                      <h4 className="text-base font-bold text-navy-950 font-devanagari mb-2">
                        {locale === 'hi' ? rm.hiTitle : rm.enTitle}
                      </h4>
                      <p className="text-xs text-slate-600 font-devanagari leading-relaxed">
                        {locale === 'hi' ? rm.hiDesc : rm.enDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Process Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-devanagari text-navy-950 mb-6">
            {locale === 'hi' ? 'कार्य प्रक्रिया (Step-by-Step Workflow)' : 'Step-by-Step Execution Workflow'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, sIdx) => (
              <div key={sIdx} className="p-6 rounded-card bg-white border border-slate-200 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-xs font-bold font-sans mb-3">
                  0{sIdx + 1}
                </span>
                <h4 className="text-base font-bold text-navy-950 font-devanagari mb-2">
                  {step.title[locale]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed">
                  {step.desc[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies / Sample Work */}
        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-devanagari text-navy-950 mb-6">
              {locale === 'hi' ? 'संबंधित केस स्टडीज व नमूना कार्य' : 'Related Case Studies & Sample Work'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div key={p.id} className="rounded-card-lg bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                  <ImagePlaceholder
                    src={p.coverImage}
                    aspectRatio="16/9"
                    label={p.title[locale]}
                    category={p.tag[locale]}
                    altGuidance={`केस स्टडी: ${p.title[locale]}`}
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-navy-950 font-devanagari mb-2">
                      {p.title[locale]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed mb-4">
                      {p.summary[locale]}
                    </p>
                    <Link
                      href={`/${locale}/work/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-gold-600 font-devanagari"
                    >
                      <span>{locale === 'hi' ? 'केस स्टडी देखें' : 'View Full Case Study'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs for this Service */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-gold-600" />
              <h3 className="text-2xl font-bold font-devanagari text-navy-950">
                {locale === 'hi' ? 'सेवा से संबंधित सामान्य प्रश्न' : 'Service FAQs'}
              </h3>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-6 rounded-card bg-white border border-slate-200">
                  <h4 className="text-base font-bold text-navy-950 font-devanagari mb-2">
                    {faq.question[locale]}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed">
                    {faq.answer[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Enquiry Form for this Service */}
        <div className="mt-16" id="enquiry">
          <EnquiryForm locale={locale} preselectedService={service.title[locale]} />
        </div>

      </div>
    </div>
  );
}
