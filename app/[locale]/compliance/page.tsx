import React from 'react';
import { Locale } from '@/content/translations';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck2,
  FileText,
  Lock,
  Music,
  CreditCard,
  Download,
  AlertTriangle,
  Scale,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi
      ? 'मानक, अनुपालन एवं आचार संहिता | आधुनिक प्रचार प्रसार'
      : 'Professional Standards & Ad Compliance | Aadhunik Prachar Prasar',
    description: isHi
      ? 'विज्ञापन अनुमोदन, MCMC प्री-सर्टिफिकेशन समन्वय, कॉपीराइट संगीत लाइसेंसिंग और पारदर्शी बिलिंग मानक।'
      : 'Advertising approvals, MCMC pre-certification assistance, commercial licensing, and electoral compliance standards.',
  };
}

export default function CompliancePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  const complianceSections = [
    {
      icon: FileCheck2,
      title: locale === 'hi' ? '1. लिखित पूर्व-अनुमोदन प्रलेखन' : '1. Mandatory Pre-Publication Sign-Off',
      desc:
        locale === 'hi'
          ? 'हमारे यहाँ किसी भी डिजाइन, वीडियो अथवा सोशल मीडिया पोस्ट को क्लाइंट के अधिकृत प्रतिनिधि द्वारा लिखित अथवा डिजिटल स्वीकृति मिले बिना सार्वजनिक नहीं किया जाता। प्रत्येक अभियान के लिए एक सुरक्षित ऑडिट ट्रेल रखी जाती है।'
          : 'Zero unapproved content. Every graphic, video, and social message requires explicit digital or written approval from the designated client liaison prior to release. An unalterable audit log is maintained.',
    },
    {
      icon: Scale,
      title:
        locale === 'hi'
          ? '2. राजनीतिक विज्ञापनों का प्री-सर्टिफिकेशन समन्वय (MCMC)'
          : '2. MCMC Pre-Certification Coordination',
      desc:
        locale === 'hi'
          ? 'चुनाव अवधि के दौरान इलेक्ट्रॉनिक एवं प्रिंट विज्ञापनों हेतु सक्षम मीडिया प्रमाणन व अनुवीक्षण समिति (MCMC) में आवेदन आवश्यक होता है। हम संबंधित तकनीकी फाइल्स, स्क्रिप्ट्स और शपथ-पत्रों का प्रलेखन तैयार करने में सहयोग करते हैं।'
          : 'During active election periods, electoral advertisements on television, radio, cinema, and digital media require statutory pre-certification by relevant Media Certification and Monitoring Committees (MCMC). We prepare technical dossier formats for client submissions.',
    },
    {
      icon: Music,
      title: locale === 'hi' ? '3. कॉपीराइट एवं संगीत लाइसेंसिंग सत्यापन' : '3. Copyright & Commercial Music Licensing',
      desc:
        locale === 'hi'
          ? 'हम किसी भी चोरी किए गए ऑडियो या अवैध स्टॉक एसेट का उपयोग नहीं करते। सभी वीडियो में उपयोग किए जाने वाले बैकग्राउंड ट्रैक्स, साउंड इफेक्ट्स और फॉन्ट्स के पास वैध व्यावसायिक अधिकार (Commercial Synchronization Rights) होते हैं।'
          : 'All soundtracks, background audio, and visual assets are verified with commercial synchronization and public performance licenses, eliminating legal copyright strikes and broadcast takedowns.',
    },
    {
      icon: CreditCard,
      title: locale === 'hi' ? '4. पारदर्शी बिलिंग एवं व्यय प्रलेखन' : '4. Transparent Billing & Expense Accounting',
      desc:
        locale === 'hi'
          ? 'डिजिटल मीडिया का विज्ञापन खर्च (Ad Spend) सीधे क्लाइंट के खाते से Meta और Google को दिया जाता है। आधुनिक प्रचार प्रसार केवल अपनी निर्धारित प्रबंधन फीस का वैध GST इनवॉइस जारी करता है, जो चुनाव व्यय लेखा (Election Expenditure Register) में सुगमता से दर्ज हो सकता है।'
          : 'Media spends are paid directly by the client to advertising platforms. We provide detailed GST invoices for retainer and creative fees, enabling straightforward accounting under statutory election expenditure audits.',
    },
    {
      icon: Lock,
      title: locale === 'hi' ? '5. डेटा गोपनीयता एवं सूचना सुरक्षा (NDA)'
        : '5. Data Isolation & Strategic Non-Disclosure',
      desc:
        locale === 'hi'
          ? 'क्लाइंट का आंतरिक मतदाता डेटा, क्षेत्रीय सर्वेक्षण और रणनीति दस्तावेज अत्यधिक गोपनीय हैं। हमारी टीम सख्त गैर-प्रकटीकरण अनुबंध (NDA) के तहत कार्य करती है और क्लाउड डाटा वॉल्ट्स केवल ऑथोराइज्ड लीड्स तक सीमित रहते हैं।'
          : 'Constituency analytics, demographic models, and draft campaign roadmaps are protected under binding Non-Disclosure Agreements (NDA) and held in encrypted, segregated access containers.',
    },
    {
      icon: ShieldCheck,
      title: locale === 'hi' ? '6. प्लेटफॉर्म विज्ञापन नीति अनुपालन (Meta & Google)'
        : '6. Digital Platform Ad Transparency Adherence',
      desc:
        locale === 'hi'
          ? 'Meta Ad Library और Google Political Ad Policy के अनुसार मतदाता पहचान सत्यापन (Identity Verification) और सार्वजनिक "Paid for by" डिस्क्लेमर लगाना कानूनी रूप से अनिवार्य है। हम इस प्रक्रिया को शत-प्रतिशत त्रुटिहीन बनाते हैं।'
          : 'End-to-end management of official platform KYC, government ID validation, and verified disclaimer strings required under Meta Ad Library and Google political advertising frameworks.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'मानक व अनुपालन' : 'Compliance & Standards',
              },
            ]}
          />
        </div>

        {/* Legal Review Required Notice Badge */}
        <div className="mb-8 p-3 rounded-card bg-amber-500/10 border border-amber-500/40 flex items-center justify-between text-xs font-sans text-amber-800 dark:text-amber-300 font-bold">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>[LEGAL REVIEW REQUIRED BEFORE PUBLISHING / कानूनी समीक्षा आवश्यक]</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider bg-amber-500/20 px-2 py-0.5 rounded">
            Internal Compliance Draft
          </span>
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'पेशेवर मानक एवं आचार संहिता' : 'Professional Standards. Responsible Communication.'}
          title={
            locale === 'hi'
              ? 'विश्वसनीयता का आधार: कठोर नियम एवं आचार संहिता अनुपालन'
              : 'The Bedrock of Trust: Strict Statutory & Platform Ad Compliance'
          }
          subtitle={
            locale === 'hi'
              ? 'आधुनिक प्रचार प्रसार एक जिम्मेदार मीडिया संस्थान के रूप में सत्यता, गोपनीयता और वैधानिक नियमों के पूर्ण पालन हेतु प्रतिबद्ध है।'
              : 'Our operational protocols for ad approvals, electoral monitoring coordination, commercial licensing, and transparent expenditures.'
          }
          theme="light"
        />

        {/* Essential Statutory Disclaimer Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-card-lg bg-navy-950 text-white border-2 border-gold-500/50 shadow-navy-md">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-8 h-8 text-gold-400 shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-devanagari text-gold-300">
                {locale === 'hi' ? 'वैधानिक स्थिति एवं सीमाएं (Statutory Disclaimer)' : 'Statutory Scope & Legal Disclaimer'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-devanagari leading-[1.8]">
                {locale === 'hi'
                  ? 'स्पष्ट घोषणा: आधुनिक प्रचार प्रसार एक स्वतंत्र निजी क्रिएटिव मीडिया व विज्ञापन कंसल्टेंसी है। यह किसी भी चुनाव प्राधिकरण (जैसे भारत निर्वाचन आयोग / राज्य निर्वाचन आयोग), सरकारी निकाय या न्यायिक संस्था का अंग अथवा प्रमाणन प्राधिकारी नहीं है। कंपनी केवल विज्ञापनों के तकनीकी प्रारूपण, प्रलेखन और निर्धारित वैधानिक प्रक्रियाओं के समन्वय में क्लाइंट का सहयोग करती है। सभी विज्ञापनों की सत्यता, कानूनी जिम्मेदारी और आवश्यक सरकारी स्वीकृतियां प्राप्त करना संबंधित प्रत्याशी या संगठन का विधिक दायित्व है।'
                  : 'Explicit Declaration: Aadhunik Prachar Prasar is an independent commercial media house and creative consultancy. We are NOT an election authority, statutory body, or government certifying organ. Our role is strictly limited to creative production, technical dossier assembly, and procedural liaison. The legal veracity of statements and the obligation to secure requisite statutory certificates (such as MCMC approvals) rests entirely with the contesting candidate or organization.'}
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Compliance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="p-8 rounded-card-lg bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-card-sm bg-navy-950 text-gold-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-devanagari text-navy-950">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-devanagari leading-[1.8]">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Downloadable Pre-Publication Checklist Placeholder */}
        <div className="p-8 sm:p-10 rounded-card-lg bg-white border-2 border-dashed border-gold-500/60 shadow-navy-sm text-center max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-full bg-ivory-100 border border-gold-500/40 text-navy-950 mx-auto flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-gold-600" />
          </div>

          <h3 className="text-xl font-bold font-devanagari text-navy-950 mb-2">
            {locale === 'hi'
              ? 'प्री-पब्लिकेशन अनुपालन चेकलिस्ट (Pre-publication Checklist PDF)'
              : 'Downloadable Pre-Publication Compliance Checklist (PDF)'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-devanagari mb-6 leading-relaxed">
            {locale === 'hi'
              ? '[PLACEHOLDER: चुनाव विज्ञापन रिलीज पूर्व-जांच गाइड एवं प्रपत्र। अधिकृत कानूनी समीक्षा के उपरांत डाउनलोड हेतु उपलब्ध कराया जाएगा]'
              : '[PLACEHOLDER: 24-point verification checklist covering MCC regulations, font clearance, disclaimer format, and copyright audit. Available for download post formal legal sign-off]'}
          </p>

          <a
            href="#compliance"
            title={locale === 'hi' ? 'यह चेकलिस्ट वर्तमान में कानूनी समीक्षाधीन [PLACEHOLDER] है।' : 'Checklist is currently under internal legal review [PLACEHOLDER].'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-card bg-navy-950 text-white font-bold text-xs sm:text-sm font-devanagari hover:bg-navy-900 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-gold-400" />
            <span>{locale === 'hi' ? 'चेकलिस्ट पीडीएफ डाउनलोड करें (Placeholder)' : 'Download Checklist PDF (Placeholder)'}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
