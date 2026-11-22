'use client';

import React from 'react';
import { Locale, translations } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface EnquirySectionProps {
  locale: Locale;
}

export function EnquirySection({ locale }: EnquirySectionProps) {
  const t = translations[locale].officeDetails;

  return (
    <section className="py-12 sm:py-16 bg-paper bg-notepad-grid text-ink relative" id="enquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Left/Main (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm locale={locale} />
          </div>

          {/* Office Details & Map Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-card-lg bg-white border border-[#DFD3C1]/80 ring-1 ring-gold-400/20 p-6 sm:p-8 shadow-paper-md space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-ink font-editorial">
                  {t.title}
                </h3>
                <span className="text-xs text-gold-700 font-sans tracking-wider uppercase font-semibold block mt-1">
                  Lucknow Strategic Secretariat · Darulshafa, Hazratganj
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-devanagari text-ink-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block mb-0.5">{t.addressLabel}</strong>
                    <span>{siteConfig.contact.officeAddress[locale]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block mb-0.5">{t.hoursLabel}</strong>
                    <span>{siteConfig.contact.workingHours[locale]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block mb-0.5">{t.phoneLabel}</strong>
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold-700 transition-colors">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink block mb-0.5">{t.emailLabel}</strong>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold-700 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map of Darulshafa, Hazratganj, Lucknow */}
              <div className="rounded-card-lg overflow-hidden border border-[#DFD3C1]/90 ring-1 ring-gold-400/25 shadow-paper-sm bg-white">
                <div className="p-3 bg-[#FAF6ED] border-b border-[#DFD3C1]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-700 shrink-0" />
                    <div>
                      <span className="text-xs font-devanagari text-ink font-bold block">
                        {locale === 'hi' ? 'दारुलशफ़ा, हजरतगंज, लखनऊ' : 'Darulshafa, Hazratganj, Lucknow'}
                      </span>
                      <span className="text-[11px] text-ink-600 font-sans block">
                        Vidhan Sabha Marg, Hazratganj, UP - 226001
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Darulshafa,+Hazratganj,+Lucknow,+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-gold-800 hover:text-gold-900 bg-white px-2.5 py-1 rounded-md border border-[#DFD3C1] shadow-2xs hover:border-gold-500 transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-gold-700" />
                  </a>
                </div>
                <div className="relative w-full h-[250px] sm:h-[280px] bg-[#EFECE6]">
                  <iframe
                    title="Google Map of Darulshafa, Hazratganj, Lucknow"
                    src="https://maps.google.com/maps?q=Darulshafa,+Hazratganj,+Lucknow,+Uttar+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
