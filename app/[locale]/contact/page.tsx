import React from 'react';
import { Locale } from '@/content/translations';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { EnquirySection } from '@/components/home/EnquirySection';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHi = params.locale !== 'en';
  return {
    title: isHi ? 'संपर्क करें | आधुनिक प्रचार प्रसार लखनऊ' : 'Contact Us | Aadhunik Prachar Prasar Lucknow',
    description: isHi
      ? 'लखनऊ कार्यालय से संपर्क करें। चुनाव अभियान, वीडियो प्रोडक्शन अथवा डिजिटल विज्ञापन रणनीति पर सीधी गोपनीय चर्चा।'
      : 'Connect with our Lucknow headquarters for confidential political communication and digital ad campaign consultations.',
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  return (
    <div className="pt-28 pb-20 bg-paper bg-notepad-lines text-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            locale={locale}
            items={[
              {
                label: locale === 'hi' ? 'संपर्क' : 'Contact',
              },
            ]}
          />
        </div>

        {/* Section Heading */}
        <SectionHeading
          eyebrow={locale === 'hi' ? 'सीधा संपर्क एवं परामर्श' : 'Get In Touch'}
          title={
            locale === 'hi'
              ? 'प्रोजेक्ट या अभियान पर गोपनीय चर्चा करें'
              : 'Initiate a Confidential Strategic Consultation'
          }
          subtitle={
            locale === 'hi'
              ? 'हमसे लखनऊ स्थित कार्यालय में मिलें, फोन पर बात करें या नीचे दिए गए फॉर्म के माध्यम से अपनी संक्षिप्त आवश्यकता साझा करें।'
              : 'Connect with our communications team in Lucknow via phone, official WhatsApp, or submit your project scope below.'
          }
          theme="light"
        />

        {/* Enquiry Section (Form + Office Details + Map) */}
        <EnquirySection locale={locale} />

      </div>
    </div>
  );
}
