'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { projectsData, ProjectCategory, WorkType } from '@/content/projects';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { ArrowUpRight, MapPin, Calendar, ArrowRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedWorkProps {
  locale: Locale;
}

export function FeaturedWork({ locale }: FeaturedWorkProps) {
  const t = translations[locale].featuredWork;

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeWorkType, setActiveWorkType] = useState<WorkType>('all');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t.filterAll },
    { key: 'design', label: t.filterDesign },
    { key: 'video', label: t.filterVideo },
    { key: 'digital-ads', label: t.filterDigital },
    { key: 'photography', label: t.filterPhoto },
    { key: 'print-outdoor', label: t.filterPrint },
  ];

  const filteredProjects = projectsData
    .filter((project) => {
      const matchCategory =
        activeCategory === 'all' || project.category === activeCategory;
      const matchWorkType =
        activeWorkType === 'all' || project.workType === activeWorkType;
      return matchCategory && matchWorkType;
    })
    .slice(0, 6);

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        {/* Filter Controls: Categories + WorkType Toggle */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-devanagari font-bold transition-all duration-150 border',
                  activeCategory === cat.key
                    ? 'bg-gold-600 text-white border-gold-600 shadow-paper-sm'
                    : 'bg-white text-ink-700 border-paper-border hover:border-gold-500/50 hover:text-ink'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Work Type Toggle: All / Client / Concept */}
          <div className="flex items-center bg-white p-1 rounded-full border border-paper-border text-xs font-devanagari font-bold shadow-paper-sm">
            <button
              type="button"
              onClick={() => setActiveWorkType('all')}
              className={cn(
                'px-3 py-1 rounded-full transition-all',
                activeWorkType === 'all'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-600 hover:text-ink'
              )}
            >
              {t.toggleAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkType('client')}
              className={cn(
                'px-3 py-1 rounded-full transition-all',
                activeWorkType === 'client'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-600 hover:text-ink'
              )}
            >
              {t.toggleClient}
            </button>
            <button
              type="button"
              onClick={() => setActiveWorkType('concept')}
              className={cn(
                'px-3 py-1 rounded-full transition-all',
                activeWorkType === 'concept'
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink-600 hover:text-ink'
              )}
            >
              {t.toggleConcept}
            </button>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-card-lg bg-white border border-paper-border hover:border-gold-500/60 shadow-paper-sm hover:shadow-paper-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Cover Facade */}
                <div className="relative">
                  <ImagePlaceholder
                    src={project.coverImage}
                    aspectRatio="16/9"
                    label={project.title[locale]}
                    category={project.category}
                    altGuidance={`परियोजना: ${project.title[locale]} (${project.summary[locale]})`}
                    isVideo={project.category === 'video'}
                  />

                  {/* Work Type badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm',
                        project.workType === 'concept'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-white/95 text-ink-800 border border-paper-border'
                      )}
                    >
                      {project.workType === 'concept'
                        ? (locale === 'hi' ? 'कॉन्सेप्ट' : 'Concept')
                        : (locale === 'hi' ? 'क्लाइंट वर्क' : 'Client Work')}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-ink-500 font-sans">
                    <span className="flex items-center gap-1 font-devanagari">
                      <MapPin className="w-3.5 h-3.5 text-gold-700" />
                      <span>{project.location[locale]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-ink-400" />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-editorial text-ink group-hover:text-gold-700 transition-colors line-clamp-2">
                    {project.title[locale]}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 font-devanagari leading-relaxed line-clamp-2">
                    {project.summary[locale]}
                  </p>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.deliverables[locale]?.slice(0, 3).map((d: string, i: number) => (
                      <span
                        key={i}
                        className="text-[11px] font-devanagari px-2 py-0.5 rounded bg-paper text-ink-700 border border-paper-border"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link CTA */}
              <div className="p-6 pt-0 border-t border-paper-border mt-3">
                <Link
                  href={`/${locale}/work/${project.slug}`}
                  className="inline-flex items-center justify-between w-full pt-3 text-xs sm:text-sm font-bold text-gold-700 group-hover:text-gold-800 font-devanagari transition-colors"
                >
                  <span>{t.viewProject}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Work Link */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card bg-white border border-paper-border text-ink hover:border-gold-500 text-sm font-bold font-devanagari shadow-paper-sm hover:shadow-paper-md transition-all"
          >
            <span>{t.viewAllWork}</span>
            <ArrowRight className="w-4 h-4 text-gold-700" />
          </Link>
        </div>

        {/* Non-partisan compliance note */}
        <div className="mt-10 p-3.5 rounded-card bg-[#F5EFE6] border border-paper-border flex items-center justify-center gap-2 text-xs text-ink-600 font-devanagari text-center">
          <Info className="w-4 h-4 text-gold-700 shrink-0" />
          <span>{t.conceptNotice}</span>
        </div>

      </div>
    </section>
  );
}
