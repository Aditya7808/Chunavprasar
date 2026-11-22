import React from 'react';
import { Locale } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Scale, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'नियम व शर्तें | आधुनिक प्रचार प्रसार' : 'Terms of Service | Aadhunik Prachar Prasar',
    description: 'Terms of service, engagement contracts, and legal operational frameworks.',
  };
}

export default function TermsPage({
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
                label: locale === 'hi' ? 'नियम व शर्तें' : 'Terms of Service',
              },
            ]}
          />
        </div>

        <div className="rounded-card-lg bg-white border border-slate-200/90 p-8 sm:p-12 shadow-navy-sm space-y-6 font-devanagari">
          <div className="flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Operational Framework</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy-950 font-devanagari">
            {locale === 'hi' ? 'सेवा की नियम व शर्तें (Terms of Service)' : 'Terms of Service & Engagement'}
          </h1>

          <p className="text-xs text-slate-500 font-sans">
            Effective Date: January 1, 2025 · Legal Jurisdiction: Lucknow, Uttar Pradesh · Entity: {siteConfig.legalName}
          </p>

          <hr className="border-slate-200" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '1. अनुबंध का आधार' : '1. Basis of Engagement'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? `यह वेबसाइट एवं इसकी सेवाएं ${siteConfig.legalName} द्वारा संचालित हैं। हमारी सेवाओं का उपयोग लिखित अनुबंध, कार्य के औपचारिक दायरे (Scope of Work) और स्वीकृत कोटेशन के आधार पर शासित होता है।`
                : `This website and consulting engagements are operated by ${siteConfig.legalName}. Services are governed strictly by signed Master Service Agreements, defined Scope of Work documents, and verified purchase orders.`}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '2. क्लाइंट की सामग्री एवं स्वीकृति जिम्मेदारी' : '2. Client Representation & Factual Veracity'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'क्लाइंट यह सुनिश्चित करने के लिए उत्तरदायी है कि उसके द्वारा प्रदान किए गए सभी तथ्य, आंकड़े, दावे, आधिकारिक पत्र और फोटो प्रामाणिक हैं। किसी भी भ्रामक, मानहानिकारक या गैर-कानूनी सामग्री के लिए पूर्ण विधिक उत्तरदायित्व क्लाइंट का होगा।'
                : 'The client holds full legal responsibility for the veracity, factual accuracy, and legitimacy of all public statements, developmental statistics, and photographic assets supplied. Aadhunik Prachar Prasar acts solely as a creative design and media production contractor.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '3. चुनाव कानून एवं आचार संहिता (MCC)' : '3. Statutory Electoral Compliance'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'चुनाव अवधि के दौरान जारी किए जाने वाले विज्ञापनों का संबंधित मीडिया प्रमाणन एवं अनुवीक्षण समिति (MCMC) से पूर्व-प्रमाणीकरण प्राप्त करना प्रत्याशी अथवा अधिकृत दल की विधिक जिम्मेदारी है। कंपनी केवल तकनीकी प्रलेखन में सहयोग करती है।'
                : 'Securing mandatory pre-certification from designated statutory bodies (such as MCMC) remains the direct responsibility of the client candidate or political party. Our agency provides technical file support only.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '4. डिजिटल विज्ञापन खर्च की प्रत्यक्ष अदायगी' : '4. Direct Platform Media Spends'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'Meta और Google पर चलाए जाने वाले विज्ञापनों का मीडिया खर्च सीधे क्लाइंट के अपने पंजीकृत खाते और भुगतान साधन द्वारा प्लेटफॉर्म को अदा किया जाता है। कंपनी किसी भी चुनावी परिणाम, वोटों की संख्या या जीत की गारंटी नहीं देती है।'
                : 'All digital ad media budgets are disbursed directly by the client to advertising networks. The company does not make speculative representations or guarantees regarding election tallies or political victories.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '5. बौद्धिक संपदा एवं स्रोत फाइलें' : '5. Intellectual Property Rights'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'अनुबंध के तहत पूर्ण भुगतान प्राप्त होने पर अंतिम स्वीकृत एसेट्स का उपयोग अधिकार क्लाइंट को हस्तांतरित किया जाता है। कंपनी की आंतरिक पद्धतियां, टूल्स और अप्रूवल टेम्पलेट्स कंपनी की बौद्धिक संपदा रहेंगी।'
                : 'Upon settlement of contracted fees, usage rights for finalized media assets transfer to the client. Proprietary agency workflows, project schemas, and custom code remain the property of Aadhunik Prachar Prasar.'}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-navy-950">
              {locale === 'hi' ? '6. कानूनी क्षेत्राधिकार' : '6. Governing Law & Dispute Resolution'}
            </h2>
            <p className="text-sm text-slate-700 leading-[1.8]">
              {locale === 'hi'
                ? 'सभी विवादों का निपटारा लखनऊ, उत्तर प्रदेश स्थित सक्षम न्यायालयों के अनन्य क्षेत्राधिकार के अधीन होगा।'
                : 'All disputes arising out of these terms or services are subject exclusively to the jurisdiction of courts in Lucknow, Uttar Pradesh, India.'}
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
