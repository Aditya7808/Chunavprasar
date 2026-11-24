import React from 'react';
import { Locale } from '@/content/translations';
import { siteConfig } from '@/content/siteConfig';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { MobileBottomBar } from '@/components/common/MobileBottomBar';
import { CookieConsent } from '@/components/common/CookieConsent';
import { generateOrganizationSchema } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ locale: 'hi' }, { locale: 'en' }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const loc = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  const title =
    loc === 'hi'
      ? `${siteConfig.name.hi} | राजनीतिक संचार · क्रिएटिव मीडिया · डिजिटल विज्ञापन · लखनऊ`
      : `${siteConfig.name.en} | Political Communication, Creative Media & Digital Ads Lucknow`;

  const description = siteConfig.description[loc];

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name[loc]}`,
    },
    description,
    keywords: [
      'Political Communication Lucknow',
      'Digital Ad Marketing UP',
      'Election Campaign Agency Uttar Pradesh',
      'Devanagari Branding & Posters',
      'Constituency Social Media Management',
      'आधुनिक प्रचार प्रसार लखनऊ',
      'राजनीतिक विज्ञापन',
      'विधानसभा चुनाव प्रचार',
    ],
    authors: [{ name: siteConfig.name.en }],
    creator: siteConfig.name.en,
    publisher: siteConfig.name.en,
    alternates: {
      canonical: `/${loc}`,
      languages: {
        'hi': '/hi',
        'en': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://aadhunikpracharprasar.com/${loc}`,
      siteName: siteConfig.name[loc],
      locale: loc === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = (params.locale === 'en' ? 'en' : 'hi') as Locale;

  const orgSchema = generateOrganizationSchema({
    name: siteConfig.name[locale],
    alternateName: siteConfig.name[locale === 'hi' ? 'en' : 'hi'],
    description: siteConfig.description[locale],
    url: 'https://aadhunikpracharprasar.com',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      streetAddress: 'Darulshafa, Hazratganj',
      addressLocality: siteConfig.contact.officeAddress.city,
      addressRegion: siteConfig.contact.officeAddress.state,
      postalCode: siteConfig.contact.officeAddress.pin,
      addressCountry: 'IN',
    },
  });

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Favicons & Brand Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Preconnect to Google Fonts for high-definition Hindi Devanagari typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Noto+Serif+Devanagari:wght@600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-gold-200 selection:text-ink antialiased">
        <Header locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
        <FloatingWhatsApp locale={locale} />
        <MobileBottomBar locale={locale} />
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
