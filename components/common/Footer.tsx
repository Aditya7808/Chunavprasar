'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { servicesData } from '@/content/services';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale].footer;

  return (
    <footer className="bg-[#1C1815] text-[#D8CFBF] border-t border-[#A8762A]/40 relative overflow-hidden font-sans">
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#38302A]">
          
          {/* Brand Block (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 group"
              aria-label="होम पेज"
            >
              <BrandLogo locale={locale} theme="dark" size="md" />
            </Link>

            <p className="text-sm text-[#BCB2A1] font-devanagari leading-[1.7] max-w-sm">
              {siteConfig.description[locale]}
            </p>

            <div className="pt-2 space-y-2 text-xs font-devanagari text-[#A49A89]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B50] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.officeAddress[locale]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B50] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89B50] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C89B50] shrink-0" />
                <span>{siteConfig.contact.workingHours[locale]}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans border-b border-[#A8762A]/40 pb-2 inline-block">
              {t.colCompany}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-devanagari">
              <li>
                <Link href={`/${locale}/about`} className="hover:text-[#F3C97E] transition-colors">
                  {translations[locale].nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/work`} className="hover:text-[#F3C97E] transition-colors">
                  {translations[locale].nav.work}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#gallery`} className="hover:text-[#F3C97E] transition-colors">
                  {locale === 'hi' ? 'अभियान गैलरी' : 'Campaign Gallery'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/compliance`} className="hover:text-[#F3C97E] transition-colors">
                  {translations[locale].nav.compliance}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-[#F3C97E] transition-colors">
                  {translations[locale].nav.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/styleguide`} className="hover:text-[#F3C97E] transition-colors text-xs text-[#8F8474]">
                  डिजाइन गाइड (Brand Kit)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans border-b border-[#A8762A]/40 pb-2 inline-block">
              {t.colServices}
            </h3>
            <ul className="space-y-2 text-xs font-devanagari">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${locale}/services/${s.slug}`}
                    className="hover:text-[#F3C97E] transition-colors block py-0.5 truncate"
                  >
                    {s.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Registration */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans border-b border-[#A8762A]/40 pb-2 inline-block">
              {t.colLegal}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-devanagari">
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-[#F3C97E] transition-colors">
                  {locale === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-[#F3C97E] transition-colors">
                  {locale === 'hi' ? 'नियम व शर्तें' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/disclaimer`} className="hover:text-[#F3C97E] transition-colors">
                  {locale === 'hi' ? 'अस्वीकरण' : 'Disclaimer'}
                </Link>
              </li>
            </ul>

            {/* Corporate Registration Placeholders */}
            <div className="pt-3 border-t border-[#38302A] text-[11px] font-sans text-[#A49A89] space-y-1">
              <div>Legal: {siteConfig.legalName}</div>
              <div>CIN: {siteConfig.legal.cin}</div>
              <div>GST: {siteConfig.legal.gstin}</div>
            </div>
          </div>

        </div>

        {/* Mandatory Non-Partisan Disclaimer Banner */}
        <div className="pt-8 pb-6 border-b border-[#38302A]">
          <div className="p-4 rounded-card bg-[#28211C] border border-[#B87D32]/40 text-xs font-devanagari text-[#DDD4C4] leading-relaxed">
            <strong className="text-[#F3C97E] block mb-1">
              {locale === 'hi' ? 'वैधानिक गैर-दलीय उद्घोषणा:' : 'Statutory Non-Partisan Declaration:'}
            </strong>
            {siteConfig.legal.nonPartisanDisclaimer[locale]}
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F8474] font-devanagari gap-4">
          <div>© {new Date().getFullYear()} {siteConfig.name[locale]}. All rights reserved.</div>
          <div className="flex items-center gap-4 text-[11px] font-sans">
            <span>Lucknow, Uttar Pradesh</span>
            <span>·</span>
            <span>Bilingual Hindi & English Platform</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
