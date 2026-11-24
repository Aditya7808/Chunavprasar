import React from 'react';
import { Locale } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import {
  ShieldCheck,
  Compass,
  Target,
  HeartHandshake,
  MapPin,
  Building2,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'कंपनी परिचय व विजन | आधुनिक प्रचार प्रसार' : 'About Us & Vision | Aadhunik Prachar Prasar',
    description: isHi
      ? 'लखनऊ स्थित राजनीतिक संचार, क्रिएटिव मीडिया और डिजिटल विज्ञापन कंपनी का परिचय, विजन और मूल्य।'
      : 'About Aadhunik Prachar Prasar, leadership principles, regional presence in Lucknow & Uttar Pradesh, and institutional values.',
  };
}

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  // Values array
  const values = [
    {
      title: locale === 'hi' ? 'सत्यनिष्ठा व तथ्यपरकता' : 'Veracity & Factual Rigor',
      desc:
        locale === 'hi'
          ? 'हम बिना सत्यापन के कोई दावा या आंकड़ा प्रस्तुत नहीं करते। लोकतांत्रिक संवाद की पहली शर्त प्रामाणिकता है।'
          : 'We never fabricate numbers or unverified claims. Institutional communication begins with documented truth.',
    },
    {
      title: locale === 'hi' ? 'देवनागरी भाषा का आदर' : 'Devanagari Typographic Respect',
      desc:
        locale === 'hi'
          ? 'हिंदी और क्षेत्रीय बोलियों की मर्यादा, व्याकरण और सौंदर्य का कठोर पालन। कोई कटी हुई मात्राएं या गैर-मानक फॉन्ट नहीं।'
          : 'Strict adherence to Devanagari grammar, line-height, and regional vernacular dignity.',
    },
    {
      title: locale === 'hi' ? 'पूर्ण वित्तीय शुचिता' : 'Direct Billing Transparency',
      desc:
        locale === 'hi'
          ? 'क्लाइंट का विज्ञापन बजट सीधे प्लेटफॉर्म को जाता है। एजेंसी केवल अपने पूर्व-निर्धारित कार्य का शुल्क लेती है।'
          : 'Media spends are settled directly by the client with Meta/Google. Zero opaque margins.',
    },
    {
      title: locale === 'hi' ? 'गोपनीयता व आचार संहिता' : 'Absolute Non-Disclosure & Compliance',
      desc:
        locale === 'hi'
          ? 'हर क्लाइंट की रणनीति, संपर्क और योजनाएं सख्त NDA द्वारा सुरक्षित रहती हैं। चुनाव नियमों का शत-प्रतिशत पालन।'
          : 'Every brief is shielded by binding NDA. 100% adherence to Election Commission and platform rules.',
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
                label: locale === 'hi' ? 'परिचय' : 'About',
              },
            ]}
          />
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'कंपनी परिचय व इतिहास' : 'About Aadhunik Prachar Prasar'}
          title={
            locale === 'hi'
              ? 'भारतीय सार्वजनिक जीवन में आधुनिक संचार का नया मानक'
              : 'Setting a High Standard for Public Communication in India'
          }
          subtitle={
            locale === 'hi'
              ? 'लखनऊ, उत्तर प्रदेश में स्थित एक स्वतंत्र, गैर-पक्षपातपूर्ण क्रिएटिव मीडिया एवं राजनीतिक विज्ञापन संस्थान।'
              : 'An independent, non-partisan creative media house and political communications consultancy headquartered in Lucknow, Uttar Pradesh.'
          }
          theme="light"
        />

        {/* Our Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-sans uppercase font-bold tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{locale === 'hi' ? 'हमारी कहानी' : 'Our Narrative'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-devanagari text-navy-950 leading-snug">
              {locale === 'hi'
                ? 'न कोई पोस्टर की दुकान, न कोई सामान्य एजेंसी — एक संपूर्ण मीडिया हाउस'
                : 'Not an Ordinary Ad Shop — A Dedicated Public Communications House'}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 font-devanagari leading-[1.85]">
              {locale === 'hi'
                ? 'आधुनिक प्रचार प्रसार की स्थापना इस स्पष्ट संकल्प के साथ हुई कि उत्तर प्रदेश और हिंदी पट्टी के सार्वजनिक जीवन में संचार को आधुनिक, सुरुचिपूर्ण और प्रामाणिक बनाया जाए। लंबे समय से राजनीतिक प्रचार घटिया फॉन्ट, भड़कीले रंगों और अतिशयोक्तिपूर्ण दावों तक सीमित था। हमने इस धारणा को तोड़ा।'
                : 'Aadhunik Prachar Prasar was founded to bridge the gap between contemporary visual craft and ground-level democratic representation in Uttar Pradesh. For decades, public advertising was compromised by careless typography, exaggerated claims, and fragmented execution. We engineered an integrated alternative.'}
            </p>

            <p className="text-sm sm:text-base text-slate-700 font-devanagari leading-[1.85]">
              {locale === 'hi'
                ? 'आज हम निर्वाचित जन प्रतिनिधियों, चुनाव प्रत्याशियों, नागरिक संगठनों और सरकारी पहलों के लिए एक विश्वसनीय थिंक-टैंक व क्रिएटिव स्टूडियो के रूप में कार्य करते हैं। हम विचार से लेकर वीडियो शूटिंग, और सटीक डिजिटल विज्ञापन से लेकर होर्डिंग स्थापना तक सब कुछ पूर्ण पारदर्शिता के साथ एक ही छत के नीचे निष्पादित करते हैं।'
                : 'Today, we serve as an authoritative communications studio and distribution backbone for MLAs, MPs, organizations, and public advocacy movements. From scripting to 4K cinematography, and micro-targeted digital ads to high-visibility arterial hoardings, everything is orchestrated under one roof with verifiable institutional rigor.'}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-card-lg overflow-hidden border border-[#DFD3C1] ring-2 ring-gold-500/25 shadow-paper-lg bg-paper-warm group">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#181310]">
                <img
                  src="/images/director.jpg"
                  alt={locale === 'hi' ? 'विनय कुमार - संस्थापक एवं प्रबंध निदेशक' : 'Vinay Kumar - Founder & Managing Director'}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Badge Overlay */}
              <div className="absolute top-3.5 left-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-devanagari font-bold bg-[#1A1410]/85 text-gold-200 border border-gold-500/40 backdrop-blur-md shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>{locale === 'hi' ? 'मुख्य निदेशक' : 'Managing Director'}</span>
                </span>
              </div>
              {/* Name & Title Card */}
              <div className="p-4 bg-white border-t border-[#DFD3C1] text-center">
                <h3 className="text-lg font-bold text-ink font-devanagari">
                  {locale === 'hi' ? 'विनय कुमार' : 'Vinay Kumar'}
                </h3>
                <p className="text-xs text-gold-800 font-devanagari font-semibold mt-0.5">
                  {locale === 'hi' ? 'संस्थापक एवं प्रबंध निदेशक' : 'Founder & Managing Director'}
                </p>
                <p className="text-[11px] text-ink-500 font-sans mt-0.5">
                  {locale === 'hi' ? 'आधुनिक प्रचार प्रसार · लखनऊ' : 'Aadhunik Prachar Prasar · Lucknow'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Director's Perspective & Vision Statement */}
        <div className="mb-20 p-8 sm:p-10 rounded-card-xl bg-white border border-[#DFD3C1] ring-1 ring-gold-400/30 shadow-paper-lg">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-gold-700 text-xs font-sans uppercase font-bold tracking-wider bg-gold-50/80 px-3 py-1 rounded-full border border-gold-200">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span>{locale === 'hi' ? 'संस्थापक का संदेश' : "Founder's Vision"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-editorial text-ink tracking-tight leading-snug">
              {locale === 'hi'
                ? '“लोकतांत्रिक संवाद में गरिमा, धरातलीय समझ और आधुनिक तकनीक का संगम”'
                : '“Fusing Institutional Dignity, Vernacular Reality & Modern Tech in Public Discourse”'}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-ink-700 font-devanagari leading-[1.85]">
              <p>
                {locale === 'hi'
                  ? 'सार्वजनिक जीवन और राजनीतिक अभियानों में संचार केवल बैनर या होर्डिंग टांगने तक सीमित नहीं है। यह जनता के प्रति उत्तरदायित्व, नेतृत्व की दृष्टि और नीतियों को विश्वासपात्र तरीके से हर नागरिक के दिल तक पहुंचाने का माध्यम है।'
                  : 'Public and political communication is far more than erecting hoardings or blasting slogans. It is the sacred bridge of trust between citizens and representative leadership, translating complex policy into resonance and verifiable impact.'}
              </p>
              <p>
                {locale === 'hi'
                  ? 'उत्तर प्रदेश के गांव-गांव, कस्बों और विधानसभा क्षेत्रों में हमने यह अनुभव किया है कि जब तथ्य, सुरुचिपूर्ण भाषा और आधुनिक डिजिटल रणनीति एक साथ मिलते हैं, तो अभियान अजेय बन जाते हैं। आधुनिक प्रचार प्रसार इसी ध्येय के साथ हर जन-प्रतिनिधि के साथ कंधे से कंधा मिलाकर खड़ा है।'
                  : 'Working across constituencies in Uttar Pradesh has demonstrated that when factual rigor, refined vernacular dignity, and algorithmic digital distribution converge, public initiatives become undeniable movements of trust.'}
              </p>
            </div>

            {/* Signature & Pillars */}
            <div className="pt-5 border-t border-[#DFD3C1]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <strong className="text-base font-bold text-ink font-devanagari block">
                  {locale === 'hi' ? 'विनय कुमार' : 'Vinay Kumar'}
                </strong>
                <span className="text-xs text-gold-800 font-devanagari font-semibold">
                  {locale === 'hi' ? 'संस्थापक एवं प्रबंध निदेशक' : 'Founder & Managing Director'}
                </span>
                <span className="text-[11px] text-ink-500 font-sans block">
                  {locale === 'hi' ? 'आधुनिक प्रचार प्रसार, लखनऊ' : 'Aadhunik Prachar Prasar, Lucknow'}
                </span>
              </div>

              {/* Core Pillars Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6ED] border border-[#DFD3C1] text-xs font-devanagari font-semibold text-ink-700">
                  {locale === 'hi' ? 'रणनीतिक नेतृत्व' : 'Strategic Vision'}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6ED] border border-[#DFD3C1] text-xs font-devanagari font-semibold text-ink-700">
                  {locale === 'hi' ? 'धरातलीय पकड़' : 'Ground Reality'}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6ED] border border-[#DFD3C1] text-xs font-devanagari font-semibold text-ink-700">
                  {locale === 'hi' ? 'सख्त गोपनीयता (NDA)' : 'Strict NDA Protocol'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-card-lg bg-navy-950 text-white border border-gold-500/30 shadow-navy-md space-y-4">
            <div className="w-12 h-12 rounded-card-sm bg-navy-900 border border-gold-500/40 text-gold-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-devanagari text-white">
              {locale === 'hi' ? 'हमारा विजन (Vision)' : 'Our Vision'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-devanagari leading-[1.8]">
              {locale === 'hi'
                ? 'भारतीय सार्वजनिक विमर्श में गरिमा, तथ्यपरक सत्यता और उच्च कोटि के विजुअल सौंदर्यबोध को स्थापित करना — जहाँ हर जनसंदेश अपने नागरिकों के प्रति उत्तरदायी और प्रेरक हो।'
                : 'To elevate public discourse in India through institutional dignity, factual integrity, and world-class vernacular design that respects citizens.'}
            </p>
          </div>

          <div className="p-8 rounded-card-lg bg-navy-950 text-white border border-gold-500/30 shadow-navy-md space-y-4">
            <div className="w-12 h-12 rounded-card-sm bg-navy-900 border border-gold-500/40 text-gold-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-devanagari text-white">
              {locale === 'hi' ? 'हमारा मिशन (Mission)' : 'Our Mission'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-devanagari leading-[1.8]">
              {locale === 'hi'
                ? 'उन्नत सिनेमा तकनीक, अनुशासित देवनागरी टाइपोग्राफी और पारदर्शी डिजिटल वितरण के माध्यम से हर जनहितैषी नेतृत्व की बात को मतदाताओं के हृदय तक पहुंचाना।'
                : 'To empower civic leadership through cinematic storytelling, disciplined Devanagari typography, and transparent digital ad distribution.'}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600">
              Principles & Ethics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-devanagari text-navy-950 mt-1">
              {locale === 'hi' ? 'हमारे चार मूलभूत मूल्य' : 'Our Guiding Core Values'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, vIdx) => (
              <div key={vIdx} className="p-6 rounded-card bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="w-8 h-8 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-xs font-bold font-sans">
                  0{vIdx + 1}
                </span>
                <h3 className="text-base font-bold text-navy-950 font-devanagari">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 font-devanagari leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Legal Identifiers & Regional Presence Block */}
        <div className="p-8 sm:p-10 rounded-card-lg bg-navy-950 text-white border border-gold-500/30 shadow-navy-lg mb-12">
          <div className="flex items-center gap-2 mb-4 text-gold-400 text-xs font-sans uppercase font-bold tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Statutory Credentials & Regional Presence</span>
          </div>

          <h3 className="text-2xl font-bold font-devanagari text-white mb-6">
            {locale === 'hi'
              ? 'लखनऊ मुख्यालय एवं उत्तर प्रदेश में क्षेत्रीय पहुंच'
              : 'Lucknow Headquarters & Statewide Uttar Pradesh Operations'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm font-devanagari text-slate-300 mb-8 border-b border-navy-800 pb-8">
            <div className="p-4 rounded-card bg-navy-900 border border-navy-800">
              <strong className="text-gold-300 block mb-1">
                {locale === 'hi' ? 'पंजीकृत कानूनी नाम:' : 'Registered Corporate Name:'}
              </strong>
              <span>{siteConfig.legalName}</span>
            </div>
            <div className="p-4 rounded-card bg-navy-900 border border-navy-800">
              <strong className="text-gold-300 block mb-1">
                {locale === 'hi' ? 'कॉर्पोरेट पहचान संख्या (CIN):' : 'Corporate Identity No (CIN):'}
              </strong>
              <span>{siteConfig.legal.cin}</span>
            </div>
            <div className="p-4 rounded-card bg-navy-900 border border-navy-800">
              <strong className="text-gold-300 block mb-1">
                {locale === 'hi' ? 'जीएसटी व पैन विवरण:' : 'GSTIN & PAN Details:'}
              </strong>
              <span>{siteConfig.legal.gstin} · {siteConfig.legal.pan}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-navy-900/60 p-4 rounded-card border border-gold-500/20 text-xs text-slate-300 font-devanagari">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <p>
              {siteConfig.legal.nonPartisanDisclaimer[locale]}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
