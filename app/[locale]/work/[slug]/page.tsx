import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/content/translations';
import { projectsData } from '@/content/projects';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { StatBadge } from '@/components/common/StatBadge';
import {
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Users,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  const locales = ['hi', 'en'];

  for (const loc of locales) {
    for (const project of projectsData) {
      params.push({ locale: loc, slug: project.slug });
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
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title[loc]} | केस स्टडी | आधुनिक प्रचार प्रसार`,
    description: project.summary[loc],
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const related = projectsData.filter((p) => project.relatedSlugs?.includes(p.slug));

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'हमारा काम' : 'Our Work',
                href: `/${locale}/work`,
              },
              {
                label: project.title[locale],
              },
            ]}
          />
        </div>

        {/* Case Study Header Card */}
        <div className="rounded-card-lg bg-navy-hero text-white p-8 sm:p-12 border border-gold-500/30 mb-10 shadow-navy-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-jaali-pattern bg-[length:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider border',
                  project.workType === 'client'
                    ? 'bg-navy-900 text-gold-300 border-gold-500/50'
                    : 'bg-slate-900 text-slate-300 border-slate-700'
                )}
              >
                {project.tag[locale]}
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-300 font-devanagari">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>{project.location[locale]}</span>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-300 font-sans">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>{project.year}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-devanagari tracking-tight text-white leading-tight">
              {project.title[locale]}
            </h1>

            <div className="p-3 rounded-card bg-navy-900/90 border border-slate-800 text-xs sm:text-sm font-devanagari text-slate-300">
              <strong className="text-gold-400 font-sans uppercase tracking-wider block mb-0.5">
                {locale === 'hi' ? 'क्लाइंट / संस्था विवरण:' : 'Client / Institutional Context:'}
              </strong>
              <span>{project.clientName[locale]}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-200 font-devanagari leading-relaxed pt-2">
              {project.summary[locale]}
            </p>
          </div>
        </div>

        {/* Master Visual Asset Placeholder */}
        <div className="mb-12">
          <ImagePlaceholder
            src={project.coverImage}
            aspectRatio="16/9"
            label={project.title[locale]}
            category={project.tag[locale]}
            altGuidance={`केस स्टडी आवरण: ${project.title[locale]}`}
            isVideo={project.category === 'video'}
            className="shadow-navy-md"
          />
        </div>

        {/* Metrics Grid (Verified Placeholders) */}
        {project.metricsPlaceholder && (
          <div className="mb-14">
            <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-600" />
              <span>{locale === 'hi' ? 'सत्यापित प्रदर्शन मेट्रिक्स' : 'Verified Campaign Indicators'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metricsPlaceholder[locale].map((met, mIdx) => (
                <StatBadge
                  key={mIdx}
                  label={met.label}
                  value={met.value}
                  isPlaceholder={met.value.includes('PLACEHOLDER')}
                  subtext={locale === 'hi' ? 'स्वतंत्र प्लेटफॉर्म ऑडिट डेटा' : 'Independent Platform Audit'}
                />
              ))}
            </div>
          </div>
        )}

        {/* Context & Scope Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Context & Background (6 cols) */}
          <div className="lg:col-span-6 p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
              <Layers className="w-4 h-4" />
              <span>{locale === 'hi' ? 'पृष्ठभूमि व उद्देश्य' : 'Context & Background'}</span>
            </div>
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              {locale === 'hi' ? 'अभियान की पृष्ठभूमि' : 'The Challenge & Context'}
            </h2>
            <p className="text-sm text-slate-700 font-devanagari leading-[1.8]">
              {project.context[locale]}
            </p>
          </div>

          {/* Scope of Work (6 cols) */}
          <div className="lg:col-span-6 p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>{locale === 'hi' ? 'कार्य का दायरा' : 'Scope of Work'}</span>
            </div>
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              {locale === 'hi' ? 'रणनीतिक दायरा (Scope)' : 'Campaign Deliverable Scope'}
            </h2>
            <ul className="space-y-3">
              {project.scope[locale].map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm font-devanagari text-slate-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Creative Approach */}
        <div className="p-8 sm:p-10 rounded-card-lg bg-navy-950 text-white border border-gold-500/30 mb-14 shadow-navy-md space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-sans uppercase font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{locale === 'hi' ? 'क्रिएटिव व रणनीतिक दृष्टिकोण' : 'Creative & Strategic Approach'}</span>
          </div>
          <h2 className="text-2xl font-bold font-devanagari text-white">
            {locale === 'hi' ? 'संदेश की संरचना और सौंदर्यबोध' : 'Narrative & Aesthetic Architecture'}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-devanagari leading-[1.85]">
            {project.creativeApproach[locale]}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm mb-14">
          <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-6">
            {locale === 'hi' ? 'अंतिम सुपुर्दगी (Handed Deliverables)' : 'Final Delivered Collaterals'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.deliverables[locale].map((del, dIdx) => (
              <div key={dIdx} className="p-4 rounded-card bg-ivory-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {dIdx + 1}
                </span>
                <span className="text-xs sm:text-sm font-devanagari text-slate-800 leading-snug">
                  {del}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-6">
              {locale === 'hi' ? 'विजुअल गैलरी व लेआउट्स' : 'Visual Gallery & Formats'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((item, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <ImagePlaceholder
                    aspectRatio={item.aspectRatio}
                    label={item.caption[locale]}
                    category="Project Layout"
                    altGuidance={item.caption[locale]}
                    isVideo={item.type === 'video'}
                  />
                  <p className="text-xs text-slate-600 font-devanagari italic text-center">
                    {item.caption[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credits */}
        {project.credits && project.credits.length > 0 && (
          <div className="p-6 rounded-card bg-white border border-slate-200 mb-14">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-gold-600" />
              <h3 className="text-base font-bold font-devanagari text-navy-950">
                {locale === 'hi' ? 'प्रोजेक्ट टीम व क्रेडिट्स' : 'Production Credits'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-devanagari">
              {project.credits.map((cr, cIdx) => (
                <div key={cIdx} className="p-3 rounded bg-ivory-50 border border-slate-200">
                  <span className="text-slate-500 block mb-0.5">{cr.role[locale]}</span>
                  <span className="text-navy-950 font-bold">{cr.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="mb-14">
            <h3 className="text-2xl font-bold font-devanagari text-navy-950 mb-6">
              {locale === 'hi' ? 'संबंधित अन्य केस स्टडीज' : 'Related Case Studies'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <div key={rel.id} className="rounded-card-lg bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
                  <ImagePlaceholder
                    src={rel.coverImage}
                    aspectRatio="16/9"
                    label={rel.title[locale]}
                    category={rel.tag[locale]}
                    altGuidance={`केस स्टडी: ${rel.title[locale]}`}
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-navy-950 font-devanagari mb-2">
                      {rel.title[locale]}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-devanagari leading-relaxed mb-4">
                      {rel.summary[locale]}
                    </p>
                    <Link
                      href={`/${locale}/work/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-gold-600 font-devanagari"
                    >
                      <span>{locale === 'hi' ? 'केस स्टडी देखें' : 'View Case Study'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Work CTA */}
        <div className="text-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card bg-navy-950 text-white font-bold text-sm font-devanagari hover:bg-navy-900 transition-colors shadow-navy-sm"
          >
            <span>{locale === 'hi' ? '← सभी केस स्टडीज पर वापस जाएं' : '← Back to All Case Studies'}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
