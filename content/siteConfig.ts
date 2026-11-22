export interface SiteConfig {
  name: {
    hi: string;
    en: string;
  };
  legalName: string;
  tagline: {
    hi: string;
    en: string;
  };
  description: {
    hi: string;
    en: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
    officeAddress: {
      hi: string;
      en: string;
      city: string;
      state: string;
      pin: string;
    };
    workingHours: {
      hi: string;
      en: string;
    };
  };
  legal: {
    cin: string;
    gstin: string;
    pan: string;
    nonPartisanDisclaimer: {
      hi: string;
      en: string;
    };
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    hi: 'आधुनिक प्रचार प्रसार',
    en: 'Aadhunik Prachar Prasar',
  },
  legalName: '[PLACEHOLDER: Aadhunik Prachar Prasar Media & Communications Pvt. Ltd.]',
  tagline: {
    hi: 'आधुनिक सोच। प्रभावशाली प्रस्तुति।',
    en: 'Modern Vision. Impactful Execution.',
  },
  description: {
    hi: 'लखनऊ स्थित अग्रणी राजनीतिक संचार, क्रिएटिव मीडिया और डिजिटल विज्ञापन एजेंसी। डिजाइन, वीडियो निर्माण, लक्षित डिजिटल विज्ञापन एवं आउटडोर पब्लिसिटी का एकीकृत मंच।',
    en: 'Lucknow-based strategic political communication, creative media, and digital advertising company. Integrated creative design, video production, targeted digital ad marketing, and outdoor branding.',
  },
  contact: {
    phone: '+919956111321',
    displayPhone: '+91 99561 11321',
    whatsapp: '+919956111321',
    displayWhatsapp: '+91 99561 11321',
    email: 'contact@aadhunikpracharprasar.com [PLACEHOLDER]',
    officeAddress: {
      hi: 'दारुलशफ़ा, हजरतगंज, लखनऊ, उत्तर प्रदेश - 226001',
      en: 'Darulshafa, Hazratganj, Lucknow, Uttar Pradesh - 226001',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      pin: '226001',
    },
    workingHours: {
      hi: 'सोमवार - शनिवार: प्रातः 09:30 बजे से सायं 07:30 बजे तक',
      en: 'Monday - Saturday: 09:30 AM to 07:30 PM',
    },
  },
  legal: {
    cin: '[PLACEHOLDER: U74999UP2024PTCXXXXXX]',
    gstin: '[PLACEHOLDER: 09XXXXX0000X1ZX]',
    pan: '[PLACEHOLDER: AAAAA0000A]',
    nonPartisanDisclaimer: {
      hi: 'स्वतंत्र निजी कंपनी। किसी सरकारी प्राधिकरण या राजनीतिक दल से संबद्ध नहीं, जब तक स्पष्ट रूप से घोषित न हो।',
      en: 'Independent private enterprise. Not affiliated with any government authority or political party, unless explicitly declared in writing for a certified project.',
    },
  },
  socialLinks: {
    facebook: 'https://facebook.com/aadhunikpracharprasar',
    instagram: 'https://instagram.com/aadhunikpracharprasar',
    youtube: 'https://youtube.com/@aadhunikpracharprasar',
    linkedin: 'https://linkedin.com/company/aadhunikpracharprasar',
  },
};
