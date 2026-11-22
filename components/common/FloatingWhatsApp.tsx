'use client';

import React from 'react';
import { siteConfig } from '@/content/siteConfig';
import { formatWhatsAppLink } from '@/lib/utils';
import { Locale } from '@/content/translations';
import { MessageSquare } from 'lucide-react';

interface FloatingWhatsAppProps {
  locale: Locale;
}

export function FloatingWhatsApp({ locale }: FloatingWhatsAppProps) {
  const defaultMessage =
    locale === 'hi'
      ? 'नमस्ते! मैं आधुनिक प्रचार प्रसार से अपने प्रोजेक्ट/अभियान के संबंध में परामर्श करना चाहता हूँ।'
      : 'Hello! I would like to consult with Aadhunik Prachar Prasar regarding our upcoming campaign/project.';

  const waUrl = formatWhatsAppLink(siteConfig.contact.whatsapp, defaultMessage);

  return (
    <aside aria-label="WhatsApp Quick Support">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        aria-label={locale === 'hi' ? 'WhatsApp पर चैट करें' : 'Chat on WhatsApp'}
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-devanagari font-bold tracking-wide">
          {locale === 'hi' ? 'WhatsApp पर बात करें' : 'Chat on WhatsApp'}
        </span>
      </a>
    </aside>
  );
}
