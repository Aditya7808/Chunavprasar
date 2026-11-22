import React from 'react';
import { Locale } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'गोपनीयता नीति | आधुनिक प्रचार प्रसार' : 'Privacy Policy | Aadhunik Prachar Prasar',
    description: 'Privacy policy, client data protection, and confidentiality commitments.',
  };
}

export default function PrivacyPage({
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
                label: locale === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy',
              },
            ]}
          />
        </div>

        <div className="rounded-card-lg bg-white border border-slate-200/90 p-8 sm:p-12 shadow-navy-sm space-y-6 font-devanagari">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Statutory Privacy Policy</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy-950 font-devanagari">
            {locale === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy & Data Protection'}
          </h1>

          <p className="text-xs text-slate-500 font-sans">
            Effective Date: January 1, 2025 · Last Updated: November 2026 · Entity: {siteConfig.legalName}
          </p>

          <hr className="border-slate-200" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '1. हमारा परिचय एवं प्रतिबद्धता' : '1. Overview & Commitment'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? `यह गोपनीयता नीति आधुनिक प्रचार प्रसार (${siteConfig.legalName}) द्वारा आपकी व्यक्तिगत व संस्थागत सूचनाओं के संग्रहण, उपयोग एवं संरक्षण के नियमों को स्पष्ट करती है। हम राजनीतिक संचार एवं मीडिया परामर्श के क्षेत्र में कार्य करते हैं, जहाँ क्लाइंट गोपनीयता सर्वोच्च प्राथमिकता है।`
                : `This Privacy Policy outlines how Aadhunik Prachar Prasar (${siteConfig.legalName}) collects, protects, and handles personal and institutional information. In strategic communications, client confidentiality is our paramount standard.`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '2. सूचना संग्रहण का दायरा' : '2. Scope of Information Collected'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'वेबसाइट के संपर्क फॉर्म या प्रत्यक्ष संवाद के माध्यम से हम आपका नाम, पद/संगठन, आधिकारिक मोबाइल नंबर, ईमेल और प्रोजेक्ट आवश्यकता का संक्षिप्त विवरण एकत्र करते हैं। हम किसी भी अनाधिकृत ट्रैकिंग, निजी कॉल-रिकॉर्डिंग या छिपे हुए डेटा माइनिंग का प्रयोग नहीं करते।'
                : 'Through enquiry forms or direct briefing, we collect contact credentials including name, public office/organization, verified phone number, email address, and project scope details. We do not engage in unauthorized third-party tracking or surreptitious data collection.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '3. क्लाइंट अभियान डेटा एवं गैर-प्रकटीकरण (NDA)' : '3. Non-Disclosure & Campaign Data Isolation'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'अभियान के दौरान क्लाइंट द्वारा साझा की गई आंतरिक रणनीतियां, मतदाता आंकड़े, अनरिलीज्ड वीडियो ड्राफ्ट्स और बजट विवरण सख्त गैर-प्रकटीकरण समझौते (NDA) के तहत सुरक्षित रखे जाते हैं। यह डेटा कभी भी किसी तीसरे पक्ष, विरोधी अभियान या व्यावसायिक डेटा ब्रोकर को नहीं बेचा जाता।'
                : 'All internal strategic frameworks, unreleased video drafts, audience models, and budget spreadsheets shared during an active retainer are protected under binding Non-Disclosure Agreements (NDA). Data is never sold, licensed, or shared with third parties or rival campaigns.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '4. डिजिटल विज्ञापन प्लेटफॉर्म एवं तृतीय-पक्ष नीतियां' : '4. Platform Ad Transparency Archives'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'कृपया ध्यान दें कि Meta (Facebook/Instagram) और Google Ads पर राजनीतिक या सामाजिक विज्ञापन चलाने पर प्लेटफॉर्म के वैधानिक नियमों के तहत विज्ञापनदाता का नाम और डिस्क्लेमर सार्वजनिक Ad Library में प्रदर्शित होना अनिवार्य होता है। इस वैधानिक प्रकटीकरण की सहमति क्लाइंट द्वारा विज्ञापन शुरू करने से पूर्व दी जाती है।'
                : 'Please note that political, election, or public issue advertisements placed on Meta and Google are mandated by law to display authorized "Paid for by" disclaimer strings in public transparency libraries. Clients expressly consent to these statutory disclosure requirements.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '5. कुकी एवं एनालिटिक्स' : '5. Cookies & Analytics'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'हमारी वेबसाइट पर तकनीकी रूप से आवश्यक कुकीज और गुमनाम प्रदर्शन विश्लेषिकी का उपयोग किया जाता है। आप हमारी कुकी सहमति बैनर के माध्यम से इसे प्रबंधित कर सकते हैं।'
                : 'We deploy essential cookies and anonymized web performance indicators. Users can manage preferences via our consent banner.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '6. संपर्क व शिकायत निवारण' : '6. Grievance Officer & Contact'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? `गोपनीयता या डेटा संरक्षण से संबंधित किसी भी प्रश्न के लिए हमारे लखनऊ कार्यालय के नोडल अधिकारी से संपर्क करें: ${siteConfig.contact.email} | पता: ${siteConfig.contact.officeAddress.hi}`
                : `For inquiries or privacy grievance redressal, contact our designated officer: ${siteConfig.contact.email} | Address: ${siteConfig.contact.officeAddress.en}`}
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
