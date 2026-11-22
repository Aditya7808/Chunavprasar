import React from 'react';
import { Locale } from '@/content/translations';
import { designTokens } from '@/content/tokens';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { StatBadge } from '@/components/common/StatBadge';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'डिजाइन सिस्टम व कंपोनेंट लाइब्रेरी (/styleguide) | आधुनिक प्रचार प्रसार',
    description: 'Design system, color tokens, Devanagari typography scale, and reusable UI components.',
  };
}

export default function StyleguidePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  const colorSwatches = [
    { name: '--navy-950', hex: '#060B1A', role: 'Deepest Hero & Footer Background', text: 'white' },
    { name: '--navy-900', hex: '#0B1530', role: 'Primary Navy Base (~55%)', text: 'white' },
    { name: '--navy-700', hex: '#101D3A', role: 'Secondary Card Surfaces', text: 'white' },
    { name: '--slate-600', hex: '#28364F', role: 'Hairline Borders & Dividers', text: 'white' },
    { name: '--gold-500', hex: '#C69A45', role: 'Primary Gold Accent (~10%)', text: 'black' },
    { name: '--gold-300', hex: '#E3C57E', role: 'Gold Shimmer & Gradient End', text: 'black' },
    { name: '--ivory-50', hex: '#F5F3ED', role: 'Editorial Light Background (~35%)', text: 'black' },
    { name: '--white', hex: '#FFFFFF', role: 'Card Surfaces & High Contrast', text: 'black' },
    { name: '--ink', hex: '#0F172A', role: 'Primary Typography Ink', text: 'white' },
    { name: '--success', hex: '#1F8A5B', role: 'Verified Badges & Status', text: 'white' },
    { name: '--danger', hex: '#C2410C', role: 'Alerts & Critical Notices', text: 'white' },
  ];

  return (
    <div className="pt-28 pb-20 bg-ivory-50 text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          locale={locale}
          items={[
            {
              label: locale === 'hi' ? 'डिजाइन सिस्टम' : 'Design System',
            },
          ]}
        />

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Design Tokens & Component Library"
          title={
            locale === 'hi'
              ? 'डिज़ाइन सिस्टम: "प्रीमियम इंडियन मीडिया हाउस"'
              : 'Design System: "Premium Indian Media House"'
          }
          subtitle={
            locale === 'hi'
              ? 'आधुनिक प्रचार प्रसार के लिए निर्मित रंग पैलेट, देवनागरी टाइपोग्राफी स्केल, आस्पेक्ट रेश्यो कंपोनेंट्स और बटन शैलियों का आधिकारिक विजुअल मानक।'
              : 'Official visual tokens, Devanagari typography calibration, UI components, and contrast standards.'
          }
          theme="light"
        />

        {/* 1. Color Palette Tokens */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              1. रंग प्रणाली (Color Tokens & Palette Hierarchy)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              अनुपात दिशानिर्देश: नेवी ~55%, आइवरी/सफेद ~35%, गोल्ड एक्सेंट ~10% (बटन, डिवाइडर, बैज)
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {colorSwatches.map((c) => (
              <div key={c.name} className="rounded-card overflow-hidden border border-slate-200 shadow-sm">
                <div
                  className="h-20 w-full p-2 flex items-end justify-between font-mono text-xs font-bold"
                  style={{ backgroundColor: c.hex, color: c.text }}
                >
                  <span>{c.hex}</span>
                </div>
                <div className="p-3 bg-white space-y-1">
                  <span className="text-xs font-bold font-mono text-navy-950 block">{c.name}</span>
                  <span className="text-[11px] text-slate-500 font-sans block leading-tight">{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Devanagari & Latin Typography Stress Test */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              2. देवनागरी टाइपोग्राफी स्केल एवं मात्रा परीक्षण (Devanagari Fluid Scale)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              लाइन-हाइट 1.65+, शून्य लेटर-स्पेसिंग (Zero Tracking) ताकि शिरोरेखा अक्षुण्ण रहे, और कोई मात्रा न कटे।
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 block mb-1">Display H1 (Fluid clamp ~ 52px)</span>
              <h1 className="text-3xl sm:text-4.5xl md:text-5xl font-extrabold text-navy-950 font-devanagari">
                आधुनिक सोच। प्रभावशाली प्रस्तुति।
              </h1>
            </div>

            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 block mb-1">Section Heading H2 (36px font-extrabold)</span>
              <h2 className="text-2xl sm:text-3.5xl font-extrabold text-navy-950 font-devanagari">
                राजनीतिक संचार एवं डिजिटल मीडिया समाधान
              </h2>
            </div>

            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono text-slate-400 block mb-1">Card Heading H3 (22px font-bold)</span>
              <h3 className="text-xl font-bold text-navy-950 font-devanagari">
                विधानसभा स्तरीय सटीक डेटा एवं ऑडियंस मैपिंग
              </h3>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-1">
                Matra Clearance Stress Test (ऊपरी मात्राएं: कै, भौ, ौं | निचली मात्राएं: कृ, णु, ष्ट्र)
              </span>
              <p className="text-base sm:text-lg text-slate-800 font-devanagari leading-[1.75] bg-ivory-50 p-4 rounded-card border border-slate-200">
                वैधानिक दृष्टि से राजनीतिक अभियानों में प्रयुक्त देवनागरी मात्राओं की शुद्धता एवं शिरोरेखा की सुगठित बनावट जनविश्वास का मुख्य आधार है। उत्कृष्ट कृतित्व, सुव्यवस्थित दृष्टिकोण एवं निष्पक्ष प्रस्तुति।
              </p>
            </div>
          </div>
        </div>

        {/* 3. Button Component Library */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              3. बटन वेरिएंट्स एवं इंटरैक्शन स्टेट्स (Button Component Library)
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Gold Button */}
            <button className="px-5 py-3 rounded-card bg-gold-gradient text-navy-950 font-bold text-sm font-devanagari shadow-gold-glow hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-2">
              <span>प्राइमरी गोल्ड CTA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Navy Solid Button */}
            <button className="px-5 py-3 rounded-card bg-navy-950 text-white font-bold text-sm font-devanagari hover:bg-navy-900 active:scale-95 transition-all inline-flex items-center gap-2">
              <span>नेवी सॉलिड बटन</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>

            {/* WhatsApp CTA */}
            <button className="px-5 py-3 rounded-card bg-[#25D366] text-white font-bold text-sm font-devanagari shadow hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-2">
              <span>WhatsApp बटन</span>
            </button>

            {/* Outline Button */}
            <button className="px-5 py-3 rounded-card bg-transparent border border-navy-950 text-navy-950 font-bold text-sm font-devanagari hover:bg-navy-50 active:scale-95 transition-all">
              आउटलाइन वेरिएंट
            </button>

            {/* Disabled State */}
            <button disabled className="px-5 py-3 rounded-card bg-slate-200 text-slate-400 font-bold text-sm font-devanagari cursor-not-allowed">
              निष्क्रिय (Disabled)
            </button>
          </div>
        </div>

        {/* 4. ImagePlaceholder Component Showcase Across Ratios */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              4. इमेज व मीडिया प्लेसहोल्डर कंपोनेंट (ImagePlaceholder Component)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              वास्तविक फोटोग्राफी की अनुपस्थिति में सुरुचिपूर्ण आस्पेक्ट रेश्यो कंटेनर्स, जो स्टॉक इमेजरी के उपयोग को रोकते हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">16:9 Landscape Video</span>
              <ImagePlaceholder
                aspectRatio="16/9"
                label="16:9 सिनेमैटिक वीडियो"
                category="Video Master"
                isVideo={true}
              />
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">4:5 Social Feed Post</span>
              <ImagePlaceholder
                aspectRatio="4/5"
                label="4:5 सोशल पोस्टर"
                category="Social Feed"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">1:1 Square Portrait</span>
              <ImagePlaceholder
                aspectRatio="1/1"
                label="1:1 प्रोफाइल पोर्ट्रेट"
                category="Executive"
              />
            </div>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">9:16 Vertical Reel</span>
              <ImagePlaceholder
                aspectRatio="9/16"
                label="9:16 वर्टिकल रील"
                category="Reels 4K"
                isVideo={true}
              />
            </div>
          </div>
        </div>

        {/* 5. StatBadge Component Showcase */}
        <div className="p-8 rounded-card-lg bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold font-devanagari text-navy-950">
              5. स्टैट बैज कंपोनेंट (StatBadge - Verified vs Placeholder State)
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              बिना सत्यापन के किसी भी संख्या का दावा नहीं। प्लेसहोल्डर्स को पीले रंग के चेतावनी टैग के साथ स्पष्ट चिन्हित किया जाता है।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatBadge
              label="सत्यापित जिला कवरेज"
              value="75 जनपद (उत्तर प्रदेश)"
              isPlaceholder={false}
              subtext="समस्त 75 जनपदों में ऑन-कॉल फील्ड क्रू उपलब्धता"
            />

            <StatBadge
              label="कुल चुनावी पहुंच"
              value="[PLACEHOLDER: verified client reach]"
              isPlaceholder={true}
              subtext="सत्यापित स्वतंत्र प्लेटफॉर्म ऑडिट के उपरांत जोड़ा जाएगा"
            />
          </div>
        </div>

        {/* 6. Raw Design Tokens Export View */}
        <div className="p-8 rounded-card-lg bg-navy-950 text-white border border-gold-500/30 shadow-navy-lg space-y-4">
          <div className="flex items-center justify-between border-b border-navy-800 pb-3">
            <h2 className="text-lg font-bold font-mono text-gold-400">
              content/tokens.ts (Exported Schema)
            </h2>
            <span className="text-xs text-slate-400 font-mono">JSON Design Tokens</span>
          </div>
          <pre className="text-xs font-mono text-slate-300 bg-navy-900 p-4 rounded-card overflow-x-auto leading-relaxed border border-slate-800">
            {JSON.stringify(designTokens, null, 2)}
          </pre>
        </div>

      </div>
    </div>
  );
}
