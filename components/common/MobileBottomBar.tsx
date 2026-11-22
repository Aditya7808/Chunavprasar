'use client';

import React from 'react';
import Link from 'next/link';
import { Locale, translations } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { formatWhatsAppLink } from '@/lib/utils';
import { Phone, MessageSquare, Send } from 'lucide-react';

interface MobileBottomBarProps {
  locale: Locale;
}

export function MobileBottomBar({ locale }: MobileBottomBarProps) {
  const t = translations[locale].floating;
  const defaultMessage =
    locale === 'hi'
      ? 'नमस्ते! मैं आधुनिक प्रचार प्रसार से संपर्क करना चाहता हूँ।'
      : 'Hello! I want to enquire about services at Aadhunik Prachar Prasar.';

  const waUrl = formatWhatsAppLink(siteConfig.contact.whatsapp, defaultMessage);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF6EE]/96 backdrop-blur-lg border-t border-paper-border px-3 py-2 shadow-paper-lg">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-white text-ink-800 border border-paper-border active:scale-95 transition-transform shadow-paper-sm"
          aria-label={t.callNow}
        >
          <Phone className="w-4 h-4 text-gold-700 mb-0.5" />
          <span className="text-[11px] font-devanagari font-semibold text-ink-800">
            {t.callNow}
          </span>
        </a>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#25D366]/15 text-[#1B8A44] border border-[#25D366]/40 active:scale-95 transition-transform"
          aria-label={t.whatsapp}
        >
          <MessageSquare className="w-4 h-4 text-[#1B8A44] mb-0.5 fill-[#25D366]/30" />
          <span className="text-[11px] font-devanagari font-bold text-[#1B8A44]">
            {t.whatsapp}
          </span>
        </a>

        <Link
          href={`/${locale}/contact#enquiry`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gold-600 text-white font-bold active:scale-95 transition-transform shadow-paper-sm"
          aria-label={t.enquire}
        >
          <Send className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-devanagari font-extrabold text-white">
            {t.enquire}
          </span>
        </Link>
      </div>
    </div>
  );
}
