import React from 'react';
import { Locale } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'कानूनी अस्वीकरण | आधुनिक प्रचार प्रसार' : 'Legal Disclaimer | Aadhunik Prachar Prasar',
    description: 'Non-partisan legal disclaimer and regulatory boundaries.',
  };
}

export default function DisclaimerPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'कानूनी अस्वीकरण' : 'Disclaimer',
              },
            ]}
          />
        </div>

        <div className="rounded-card-lg bg-white border border-slate-200/90 p-8 sm:p-12 shadow-navy-sm space-y-6 font-devanagari">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Non-Partisan Legal Declaration</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy-950 font-devanagari">
            {locale === 'hi' ? 'कानूनी अस्वीकरण एवं गैर-पक्षपात घोषणा' : 'Legal Disclaimer & Non-Partisan Status'}
          </h1>

          <div className="p-4 rounded-card bg-navy-950 text-white border-l-4 border-gold-500 text-xs sm:text-sm font-devanagari leading-relaxed">
            <strong className="text-gold-300 block mb-1">
              {locale === 'hi' ? 'मूल घोषणा:' : 'Core Statutory Declaration:'}
            </strong>
            {siteConfig.legal.nonPartisanDisclaimer[locale]}
          </div>

          <hr className="border-slate-200" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '1. स्वतंत्र वाणिज्यिक स्वरूप' : '1. Commercial Independence'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? `${siteConfig.legalName} एक स्वतंत्र व्यावसायिक मीडिया प्रोडक्शन एवं विज्ञापन कंपनी है। यह किसी भी राजनीतिक दल, गठबंधन, सरकारी मंत्रालय या चुनाव प्राधिकरण का आधिकारिक मुखपत्र नहीं है। वेबसाइट पर प्रस्तुत सेवाएं व्यावसायिक अनुबंध के आधार पर उपलब्ध कराई जाती हैं।`
                : `${siteConfig.legalName} operates as an independent commercial agency. It is not an organ of any political party, alliance, government department, or statutory election commission. Services are rendered strictly under commercial contracts.`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '2. कोई चुनावी या मत गारंटी नहीं' : '2. No Electoral Outcome Guarantee'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'आधुनिक प्रचार प्रसार किसी भी प्रत्याशी, संगठन अथवा अभियान को चुनाव में जीत, वोटों की संख्या या जनमत परिणाम की कोई गारंटी नहीं देता है। लोकतांत्रिक व्यवस्था में मतदान का निर्णय नागरिकों का व्यक्तिगत और संप्रभु अधिकार है। हमारी जिम्मेदारी केवल तकनीकी पहुंच, क्रिएटिव गुणवत्ता और पारदर्शी विज्ञापन प्रबंधन तक सीमित है।'
                : 'Aadhunik Prachar Prasar makes zero guarantees or promises regarding election outcomes, voter margins, or ballot tallies. Democratic voting decisions belong entirely to citizens. Our contractual commitment is confined strictly to verified creative execution, technical ad pacing, and transparent reporting.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '3. नमूना सामग्री एवं प्लेसहोल्डर्स' : '3. Concept Works & Placeholders'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'वेबसाइट पर प्रदर्शित कुछ परियोजनाएं केवल डिजाइन क्षमताओं और तकनीकी कार्यप्रणाली को प्रदर्शित करने हेतु कॉन्सेप्ट प्रारूप के रूप में प्रस्तुत की गई हैं। जहाँ भी [PLACEHOLDER] अंकित है, वह सूचना वास्तविक सत्यापन के उपरांत ही अपडेट की जाएगी।'
                : 'Certain case studies are displayed as conceptual proofs to protect client non-disclosure boundaries. Any metrics or profile items marked with [PLACEHOLDER] are illustrative placeholders awaiting formal sign-off.'}
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
