'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { SectionHeading } from '@/components/common/SectionHeading';

interface ProcessStepsProps {
  locale: Locale;
}

// 5 High-Craft Institutional Process Icons
function BriefingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor">
      <rect x="10" y="8" width="28" height="34" rx="4" strokeWidth="2" className="text-gold-700" />
      <path d="M18 6H30V12H18V6Z" fill="#FAF5EB" strokeWidth="2" className="text-ink-900" />
      <line x1="16" y1="20" x2="32" y2="20" strokeWidth="2" strokeLinecap="round" className="text-gold-600" />
      <line x1="16" y1="26" x2="28" y2="26" strokeWidth="2" strokeLinecap="round" className="text-ink-800" />
      <line x1="16" y1="32" x2="24" y2="32" strokeWidth="2" strokeLinecap="round" className="text-ink-800" />
      <circle cx="33" cy="33" r="5" fill="#FAF5EB" strokeWidth="1.75" className="text-gold-700" />
      <path d="M33 30V36M30 33H36" strokeWidth="1.5" strokeLinecap="round" className="text-gold-700" />
    </svg>
  );
}

function PlanningIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor">
      <rect x="8" y="10" width="32" height="30" rx="4" strokeWidth="2" className="text-ink-900" />
      <line x1="8" y1="18" x2="40" y2="18" strokeWidth="2" className="text-gold-600" />
      <line x1="16" y1="6" x2="16" y2="12" strokeWidth="2.5" strokeLinecap="round" className="text-gold-700" />
      <line x1="32" y1="6" x2="32" y2="12" strokeWidth="2.5" strokeLinecap="round" className="text-gold-700" />
      <circle cx="16" cy="26" r="2" fill="currentColor" className="text-gold-700" />
      <circle cx="24" cy="26" r="2" fill="currentColor" className="text-gold-700" />
      <circle cx="32" cy="26" r="2" fill="currentColor" className="text-gold-700" />
      <circle cx="16" cy="33" r="2" fill="currentColor" className="text-ink-400" />
      <circle cx="24" cy="33" r="2" fill="currentColor" className="text-ink-400" />
      <path d="M29 34L32 37L37 31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1F8A5B]" />
    </svg>
  );
}

function CreativeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor">
      <rect x="6" y="12" width="28" height="24" rx="4" strokeWidth="2" className="text-ink-900" />
      <circle cx="20" cy="24" r="6" strokeWidth="2" className="text-gold-700" />
      <circle cx="20" cy="24" r="2" fill="currentColor" className="text-gold-700" />
      <path d="M34 18L42 13V35L34 30V18Z" strokeWidth="2" strokeLinejoin="round" className="text-gold-600" fill="#FAF5EB" />
      <path d="M12 8L15 12" strokeWidth="2" strokeLinecap="round" className="text-gold-700" />
      <path d="M24 8L27 12" strokeWidth="2" strokeLinecap="round" className="text-gold-700" />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor">
      <path d="M24 6L38 12V24C38 32.5 32 39 24 42C16 39 10 32.5 10 24V12L24 6Z" strokeWidth="2" className="text-gold-700" fill="#FAF5EB" />
      <path d="M24 16V30" strokeWidth="2" strokeLinecap="round" className="text-ink-900" />
      <path d="M18 20H30" strokeWidth="2" strokeLinecap="round" className="text-ink-900" />
      <path d="M16 26L18 20L20 26H16Z" fill="currentColor" className="text-gold-700" />
      <path d="M28 26L30 20L32 26H28Z" fill="currentColor" className="text-gold-700" />
      <path d="M20 34L23 37L28 32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1F8A5B]" />
    </svg>
  );
}

function BroadcastIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor">
      <path d="M24 24L24 40" strokeWidth="2.5" strokeLinecap="round" className="text-ink-900" />
      <path d="M18 40H30" strokeWidth="2" strokeLinecap="round" className="text-ink-900" />
      <circle cx="24" cy="20" r="4" fill="currentColor" className="text-gold-700" />
      <path d="M16 14C11.5 18 11.5 24 16 28" strokeWidth="2" strokeLinecap="round" className="text-gold-600" />
      <path d="M32 14C36.5 18 36.5 24 32 28" strokeWidth="2" strokeLinecap="round" className="text-gold-600" />
      <path d="M11 9C5 15 5 27 11 33" strokeWidth="2" strokeLinecap="round" className="text-gold-400" />
      <path d="M37 9C43 15 43 27 37 33" strokeWidth="2" strokeLinecap="round" className="text-gold-400" />
      <circle cx="24" cy="8" r="2" fill="#1F8A5B" />
    </svg>
  );
}

export function ProcessSteps({ locale }: ProcessStepsProps) {
  const t = translations[locale].process;

  const stepsWithIcons = [
    { icon: BriefingIcon },
    { icon: PlanningIcon },
    { icon: CreativeIcon },
    { icon: ComplianceIcon },
    { icon: BroadcastIcon },
  ];

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
          theme="light"
        />

        {/* Desktop View: Horizontal Flow with Refined Corporate Badges */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-[48px] left-12 right-12 h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-500/60 to-gold-500/20 z-0" />

          {t.steps.map((st, idx) => {
            const IconComponent = stepsWithIcons[idx % stepsWithIcons.length].icon;

            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center p-5 rounded-card bg-white border border-paper-border shadow-paper-sm hover:border-gold-500/70 hover:shadow-paper-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Refined Corporate Emblem Badge */}
                <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F2E8D8] border border-paper-border p-3 shadow-paper-sm flex items-center justify-center text-gold-800 group-hover:border-gold-500 group-hover:shadow-md transition-all">
                    <IconComponent />
                  </div>
                  {/* Step Sequence Badge */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-ink text-[#F5EDE0] text-[9px] font-sans font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                    0{idx + 1}
                  </span>
                </div>

                {/* Step Subtitle */}
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-gold-800 mb-1">
                  {st.step}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-ink-950 font-editorial mb-2 leading-snug">
                  {st.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-ink-800 font-devanagari leading-[1.7]">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet View: Vertical Timeline with Refined Badges */}
        <div className="lg:hidden space-y-6 relative border-l-2 border-gold-500/40 ml-4 pl-6">
          {t.steps.map((st, idx) => {
            const IconComponent = stepsWithIcons[idx % stepsWithIcons.length].icon;

            return (
              <div key={idx} className="relative group">
                {/* Node on vertical line */}
                <div className="absolute -left-[38px] top-1.5 w-10 h-10 rounded-xl bg-white border border-gold-600/60 text-gold-800 flex items-center justify-center shadow-sm p-1.5">
                  <IconComponent />
                </div>

                <div className="p-5 rounded-card bg-white border border-paper-border shadow-paper-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold-800">
                      {st.step}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] bg-paper text-ink-700 font-mono font-bold">
                      0{idx + 1}/05
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-ink-950 font-editorial mb-1.5">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-800 font-devanagari leading-[1.7]">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
