'use client';

import React, { useState } from 'react';
import { Locale, translations } from '@/content/translations';
import { servicesData } from '@/content/services';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface EnquiryFormProps {
  locale: Locale;
  preselectedService?: string;
}

export function EnquiryForm({ locale, preselectedService }: EnquiryFormProps) {
  const t = translations[locale].enquiry;

  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    phone: '',
    email: '',
    services: preselectedService ? [preselectedService] : ([] as string[]),
    budgetRange: '',
    timeline: '',
    message: '',
    consent: false,
    website_honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const handleServiceToggle = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceTitle);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceTitle)
          : [...prev.services, serviceTitle],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client side check for consent & service
    if (formData.services.length === 0) {
      setErrorMessage(
        locale === 'hi'
          ? 'कृपया कम से कम एक सेवा का चयन करें।'
          : 'Please select at least one service.'
      );
      return;
    }

    if (!formData.consent) {
      setErrorMessage(
        locale === 'hi'
          ? 'कृपया गोपनीयता नीति से सहमति दें।'
          : 'Please accept the privacy policy consent.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locale,
          ...formData,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setErrorMessage(
          data.error ||
            (locale === 'hi'
              ? 'त्रुटि हुई। कृपया पुनः प्रयास करें।'
              : 'Submission failed. Please check fields.')
        );
        setIsSubmitting(false);
        return;
      }

      setSubmittedSuccess(true);
      if (data.whatsappUrl) {
        setWhatsappUrl(data.whatsappUrl);
      }
    } catch {
      setErrorMessage(
        locale === 'hi'
          ? 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।'
          : 'Network error. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedSuccess) {
    return (
      <div className="rounded-card-lg bg-white border border-paper-border p-8 sm:p-12 text-ink font-devanagari text-center shadow-paper-md">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-editorial text-ink mb-3">
          {t.successTitle}
        </h3>
        <p className="text-sm sm:text-base text-ink-700 max-w-lg mx-auto mb-8 leading-relaxed">
          {t.successDesc}
        </p>

        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-card bg-[#25D366] text-white font-bold text-sm shadow-paper-sm hover:brightness-105 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>{t.whatsappDirectBtn}</span>
          </a>
        )}

        <div className="mt-8 pt-6 border-t border-paper-border text-xs text-ink-500">
          {locale === 'hi'
            ? 'गोपनीयता आश्वासन: आपकी सूचनाएं किसी भी अन्य संस्था या तीसरे पक्ष से साझा नहीं की जाएंगी।'
            : 'Confidentiality Assurance: Your submitted data is governed strictly by non-disclosure.'}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card-lg bg-white border border-paper-border p-6 sm:p-8 md:p-10 text-ink font-devanagari shadow-paper-md relative"
      noValidate
    >
      {/* Honeypot field (hidden from genuine users) */}
      <input
        type="text"
        name="website_honeypot"
        value={formData.website_honeypot}
        onChange={(e) => setFormData({ ...formData, website_honeypot: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-ink font-editorial mb-2">
          {t.title}
        </h3>
        <p className="text-sm text-ink-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-card bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>{errorMessage}</div>
        </div>
      )}

      {/* Services Multi-Select */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-ink mb-2.5">
          {t.serviceNeeded}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {servicesData.map((srv) => {
            const isSelected = formData.services.includes(srv.title[locale]);
            return (
              <button
                type="button"
                key={srv.id}
                onClick={() => handleServiceToggle(srv.title[locale])}
                className={cn(
                  'text-left p-3 rounded-card text-xs sm:text-sm transition-all duration-150 flex items-center justify-between border',
                  isSelected
                    ? 'bg-[#FAF4EA] text-gold-800 border-gold-600 font-bold shadow-sm'
                    : 'bg-[#FAF6EE] text-ink-700 border-paper-border hover:border-gold-500/50'
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'w-4 h-4 rounded border flex items-center justify-center shrink-0',
                      isSelected ? 'bg-gold-600 border-gold-600 text-white' : 'border-ink-300 bg-white'
                    )}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                  </span>
                  <span>{srv.title[locale]}</span>
                </div>
                {srv.isPopular && (
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold-700 bg-gold-100 px-2 py-0.5 rounded border border-gold-300">
                    {locale === 'hi' ? 'लोकप्रिय' : 'Popular'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {fieldErrors.services && (
          <p className="text-red-600 text-xs mt-1">{fieldErrors.services[0]}</p>
        )}
      </div>

      {/* Grid: Name & Organisation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.fullName}
          </label>
          <input
            type="text"
            required
            placeholder={t.fullNamePlaceholder}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          />
          {fieldErrors.fullName && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.organisation}
          </label>
          <input
            type="text"
            required
            placeholder={t.organisationPlaceholder}
            value={formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          />
          {fieldErrors.organisation && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.organisation[0]}</p>
          )}
        </div>
      </div>

      {/* Grid: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.phone}
          </label>
          <input
            type="tel"
            required
            placeholder={t.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          />
          {fieldErrors.phone && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.phone[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.email}
          </label>
          <input
            type="email"
            required
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          />
          {fieldErrors.email && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Grid: Budget Range & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.budgetRange}
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          >
            <option value="">{locale === 'hi' ? 'बजट दायरा चुनें' : 'Select Budget Tier'}</option>
            {t.budgetOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
            {t.timeline}
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors"
          >
            <option value="">{locale === 'hi' ? 'समयसीमा चुनें' : 'Select Desired Timeline'}</option>
            {t.timelineOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message textarea */}
      <div className="mb-5">
        <label className="block text-xs sm:text-sm font-semibold text-ink-700 mb-1.5">
          {t.message}
        </label>
        <textarea
          rows={4}
          required
          placeholder={t.messagePlaceholder}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-[#FAF6EE] border border-paper-border focus:border-gold-600 focus:bg-white text-ink text-sm outline-none transition-colors resize-y"
        />
        {fieldErrors.message && (
          <p className="text-red-600 text-xs mt-1">{fieldErrors.message[0]}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 rounded border-paper-border text-gold-600 focus:ring-gold-500 mt-1 shrink-0 bg-white"
          />
          <span className="text-xs text-ink-600 leading-relaxed">
            {t.consent}{' '}
            <Link
              href={`/${locale}/privacy`}
              target="_blank"
              className="text-gold-700 underline hover:text-gold-800"
            >
              {locale === 'hi' ? 'गोपनीयता नीति' : 'Privacy Notice'}
            </Link>
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="text-red-600 text-xs mt-1">{fieldErrors.consent[0]}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-card bg-gold-600 hover:bg-gold-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-paper-sm active:scale-[0.99] transition-all disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin text-white" />
            <span>{t.submitting}</span>
          </>
        ) : (
          <>
            <span>{t.submitBtn}</span>
            <Send className="w-4 h-4 text-white" />
          </>
        )}
      </button>

      <div className="mt-4 text-center">
        <span className="text-[11px] text-ink-500">
          {locale === 'hi'
            ? 'सुरक्षित सबमिशन · कोई स्पैम नहीं · सख्त गोपनीयता अनुबंध (NDA)'
            : 'Encrypted submission · Zero spam · Protected under NDA'}
        </span>
      </div>
    </form>
  );
}
