import React from 'react';
import { Locale } from '@/content/translations';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { AboutSnapshot } from '@/components/home/AboutSnapshot';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { DigitalAdSpotlight } from '@/components/home/DigitalAdSpotlight';
import { CapabilitiesGrid } from '@/components/home/CapabilitiesGrid';
import { GallerySection } from '@/components/home/GallerySection';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ComplianceTeaser } from '@/components/home/ComplianceTeaser';
import { InsightsSection } from '@/components/home/InsightsSection';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { CTABanner } from '@/components/home/CTABanner';
import { EnquirySection } from '@/components/home/EnquirySection';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  return (
    <>
      {/* 1. Hero */}
      <Hero locale={locale} />

      {/* 2. Trust Strip */}
      <TrustStrip locale={locale} />

      {/* 3. About Snapshot */}
      <AboutSnapshot locale={locale} />

      {/* 4. Services Grid (5 Core Services) */}
      <ServicesGrid locale={locale} />

      {/* 5. Digital Ad Marketing Spotlight */}
      <DigitalAdSpotlight locale={locale} />

      {/* 6. Capabilities Grid (4 technical pillars) */}
      <CapabilitiesGrid locale={locale} />

      {/* 7. Gallery Section (On-ground, media, and campaign photos) */}
      <GallerySection locale={locale} />

      {/* 8. Process (5 steps horizontal on desktop, vertical on mobile) */}
      <ProcessSteps locale={locale} />

      {/* 9. Why Choose Us (6 icon cards) */}
      <WhyChooseUs locale={locale} />

      {/* 10. Compliance Teaser */}
      <ComplianceTeaser locale={locale} />

      {/* 11. Collaborations / Testimonials: hidden per prompt when unverified */}

      {/* 12. Insights (3 latest articles) */}
      <InsightsSection locale={locale} />

      {/* 13. FAQ (8 questions accordion) */}
      <FAQAccordion locale={locale} />

      {/* 14. Final CTA Banner + Enquiry Form + Office details + Map embed */}
      <CTABanner locale={locale} />
      <EnquirySection locale={locale} />
    </>
  );
}
