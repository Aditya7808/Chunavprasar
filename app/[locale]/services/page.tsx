import React from 'react';
import Link from 'next/link';
import { Locale } from '@/content/translations';
import { servicesData } from '@/content/services';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  Palette,
  Video,
  TrendingUp,
  Smartphone,
  Maximize2,
  Camera,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'सेवाएं | आधुनिक प्रचार प्रसार' : 'Services | Aadhunik Prachar Prasar',
    description: isHi
      ? 'क्रिएटिव डिजाइन, वीडियो प्रोडक्शन, डिजिटल विज्ञापन, सोशल मीडिया और आउटडोर प्रचार समाधान।'
      : 'Integrated creative design, video production, digital ad marketing, social media, and outdoor advertising.',
  };
}

export default function ServicesPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  const iconMap: Record<string, React.ElementType> = {
    Palette,
    Video,
    TrendingUp,
    Smartphone,
    Maximize2,
    Camera,
    Megaphone,
  };

  const coreServices = servicesData.filter((s) => s.isCore);
  const supportingServices = servicesData.filter((s) => !s.isCore);

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
              },
            ]}
          />
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'पूर्ण एकीकृत समाधान' : 'Integrated Capabilities'}
          title={
            locale === 'hi'
              ? 'पेशेवर राजनीतिक संचार एवं मीडिया सेवाएं'
              : 'Professional Political Communication & Media Services'
          }
          subtitle={
            locale === 'hi'
              ? 'लखनऊ मुख्यालय से संचालित 5 मुख्य और 2 सहायक विशिष्ट सेवाएं — डिजाइन और सिनेमाई वीडियो से लेकर पिन-पॉइंट डिजिटल विज्ञापन तक।'
              : '5 core capabilities and 2 supporting disciplines operated from our Lucknow headquarters — from design and cinema-line video to precision digital distribution.'
          }
          theme="light"
        />

        {/* Core Services Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-3">
            <span className="w-3 h-3 rounded-full bg-gold-500 inline-block" />
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              {locale === 'hi' ? '5 मुख्य सेवाएं (Core Services)' : '5 Core Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Palette;
              const isPopular = service.isPopular;

              return (
                <div
                  key={service.slug}
                  className={cn(
                    'rounded-card-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group',
                    isPopular
                      ? 'bg-navy-950 text-white border-2 border-gold-500 shadow-navy-lg'
                      : 'bg-white text-navy-950 border border-slate-200/90 hover:border-gold-500/50 hover:shadow-navy-md shadow-navy-sm'
                  )}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 right-6 bg-gold-gradient text-navy-950 font-extrabold text-[11px] font-sans uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {locale === 'hi' ? '★ लोकप्रिय' : '★ Popular'}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div
                      className={cn(
                        'w-12 h-12 rounded-card-sm flex items-center justify-center',
                        isPopular
                          ? 'bg-navy-900 border border-gold-500/40 text-gold-400'
                          : 'bg-ivory-100 border border-slate-200 text-navy-900'
                      )}
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <div>
                      <h3
                        className={cn(
                          'text-xl font-bold font-devanagari mb-2',
                          isPopular ? 'text-white' : 'text-navy-950'
                        )}
                      >
                        {service.title[locale]}
                      </h3>
                      <p
                        className={cn(
                          'text-xs sm:text-sm font-devanagari leading-relaxed min-h-[40px]',
                          isPopular ? 'text-slate-300' : 'text-slate-600'
                        )}
                      >
                        {service.shortPromise[locale]}
                      </p>
                    </div>

                    <div className={cn('pt-3 border-t', isPopular ? 'border-navy-800' : 'border-slate-100')}>
                      <span
                        className={cn(
                          'text-[11px] font-bold uppercase tracking-wider font-sans block mb-2',
                          isPopular ? 'text-gold-400' : 'text-slate-500'
                        )}
                      >
                        {locale === 'hi' ? 'प्रमुख परिणाम:' : 'Deliverables'}:
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables[locale].slice(0, 3).map((item, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              'text-xs font-devanagari flex items-start gap-2 leading-snug',
                              isPopular ? 'text-slate-300' : 'text-slate-700'
                            )}
                          >
                            <CheckCircle2
                              className={cn(
                                'w-3.5 h-3.5 shrink-0 mt-0.5',
                                isPopular ? 'text-gold-400' : 'text-gold-600'
                              )}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={cn('mt-8 pt-4 border-t', isPopular ? 'border-navy-800' : 'border-slate-100')}>
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className={cn(
                        'inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-devanagari group-hover:gap-2 transition-all',
                        isPopular ? 'text-gold-400 hover:text-gold-300' : 'text-navy-950 hover:text-gold-600'
                      )}
                    >
                      <span>{locale === 'hi' ? 'विस्तृत विवरण व प्रक्रिया' : 'View Full Details & Process'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Services Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-3">
            <span className="w-3 h-3 rounded-full bg-slate-400 inline-block" />
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              {locale === 'hi' ? '2 सहायक सेवाएं (Supporting Services)' : '2 Supporting Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportingServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Palette;
              return (
                <div
                  key={service.slug}
                  className="rounded-card-lg p-7 sm:p-8 bg-white border border-slate-200/90 hover:border-gold-500/50 shadow-navy-sm flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-card-sm bg-ivory-100 border border-slate-200 text-navy-900 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-2">
                        {service.title[locale]}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed">
                        {service.shortPromise[locale]}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider font-sans text-slate-500 block mb-2">
                        {locale === 'hi' ? 'प्रमुख परिणाम:' : 'Deliverables'}:
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables[locale].slice(0, 3).map((item, idx) => (
                          <li key={idx} className="text-xs font-devanagari text-slate-700 flex items-start gap-2 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-devanagari text-navy-950 group-hover:text-gold-600 transition-colors"
                    >
                      <span>{locale === 'hi' ? 'विस्तार से पढ़ें' : 'Read Full Overview'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-card-lg bg-navy-950 text-white p-8 sm:p-10 border border-gold-500/30 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-sans uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Stack Integration</span>
            </div>
            <h3 className="text-2xl font-extrabold font-devanagari text-white">
              {locale === 'hi'
                ? 'क्या आप कई सेवाओं का समन्वित पैकेज चाहते हैं?'
                : 'Need an Integrated Multi-Service Campaign Package?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-devanagari leading-relaxed">
              {locale === 'hi'
                ? 'हम आपके अभियान के आकार और बजट के अनुसार डिजाइन, वीडियो, डिजिटल मार्केटिंग और आउटडोर का एक अनुकूलित पैकेज तैयार करते हैं।'
                : 'We formulate tailored retainer packages combining design, cinema documentary, digital distribution, and outdoor branding mapped to your constituency timeline.'}
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}/contact#enquiry`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-card bg-gold-gradient text-navy-950 font-bold text-sm font-devanagari shadow-gold-glow hover:brightness-105 active:scale-95 transition-all"
              >
                <span>{locale === 'hi' ? 'कस्टम पैकेज हेतु चर्चा करें' : 'Discuss Custom Campaign Scope'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
