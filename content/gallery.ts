export interface GalleryItem {
  id: string;
  src: string;
  alt: {
    hi: string;
    en: string;
  };
  title: {
    hi: string;
    en: string;
  };
  category: 'on-ground' | 'media' | 'digital' | 'outreach';
  categoryLabel: {
    hi: string;
    en: string;
  };
  location?: {
    hi: string;
    en: string;
  };
  date?: string;
  description?: {
    hi: string;
    en: string;
  };
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export const galleryCategories = [
  { id: 'all', label: { hi: 'सभी झलकियां', en: 'All Media' } },
  { id: 'on-ground', label: { hi: 'ऑन-ग्राउंड अभियान', en: 'On-Ground Campaigns' } },
  { id: 'media', label: { hi: 'वीडियो व डाक्यूमेंट्री', en: 'Video & Media' } },
  { id: 'digital', label: { hi: 'डिजिटल व डिज़ाइन', en: 'Digital & Design' } },
  { id: 'outreach', label: { hi: 'जनसंवाद व जनसभा', en: 'Jan Samvad & Outreach' } },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    src: '/images/projects/warroom.jpg',
    alt: {
      hi: 'केंद्रीय डिजिटल वॉर रूम लखनऊ',
      en: 'Central Digital War Room Lucknow',
    },
    title: {
      hi: 'सेंट्रल डिजिटल वॉर रूम व 24/7 मॉनिटरिंग',
      en: 'Central Digital War Room & 24/7 Monitoring Desk',
    },
    category: 'digital',
    categoryLabel: {
      hi: 'डिजिटल ऑपरेशन्स',
      en: 'Digital Ops',
    },
    location: {
      hi: 'हजरतगंज, लखनऊ',
      en: 'Hazratganj, Lucknow',
    },
    date: '2024',
    description: {
      hi: 'विधानसभा स्तर पर रियल-टाइम जन-प्रतिक्रिया, सोशल लिसनिंग और नैरेटिव ट्रैकिंग का आधुनिक केंद्र।',
      en: 'State-of-the-art constituency command center for narrative intelligence, social sentiment, and ad operations.',
    },
  },
  {
    id: 'g-2',
    src: '/images/projects/jansamvad.jpg',
    alt: {
      hi: 'जनसंवाद पदयात्रा एवं ग्रामीण संवाद',
      en: 'Jan Samvad Public Foot March & Community Dialogue',
    },
    title: {
      hi: 'जनसंवाद पदयात्रा — सीधे ग्रामीणों से रूबरू',
      en: 'Jan Samvad Yatra — Grassroots Citizen Dialogue',
    },
    category: 'outreach',
    categoryLabel: {
      hi: 'जनसंवाद',
      en: 'Outreach',
    },
    location: {
      hi: 'अवध क्षेत्र, उत्तर प्रदेश',
      en: 'Awadh Region, UP',
    },
    date: '2024',
    description: {
      hi: 'गांव-गांव चौपालों में प्रत्यक्ष नागरिक संवाद, जनसमस्याओं का संकलन और त्वरित मीडिया प्रसार।',
      en: 'Direct village choupals, community grievance listening, and real-time field photography dispatch.',
    },
  },
  {
    id: 'g-3',
    src: '/images/projects/purvanchal.jpg',
    alt: {
      hi: 'पूर्वांचल विकास डाक्यूमेंट्री वीडियो शूट',
      en: 'Purvanchal Industrial Corridor Documentary Production',
    },
    title: {
      hi: 'एक्सप्रेसवे एवं क्षेत्रीय प्रगति 4K डाक्यूमेंट्री',
      en: 'Expressway & Regional Progress 4K Production',
    },
    category: 'media',
    categoryLabel: {
      hi: 'वीडियो प्रोडक्शन',
      en: 'Video Production',
    },
    location: {
      hi: 'पूर्वांचल एक्सप्रेसवे कॉरिडोर, उप्र',
      en: 'Purvanchal Expressway Corridor, UP',
    },
    date: '2024',
    description: {
      hi: 'औद्योगिक निवेश, कृषि मंडियों और नए गतिमान बुनियादी ढांचे का सिनेमैटिक ऑन-ग्राउंड फिल्मांकन।',
      en: 'High-end 4K documentary filming capturing state infrastructure, logistics hubs, and agrarian reforms.',
    },
  },
  {
    id: 'g-4',
    src: '/images/projects/kisan-outreach.jpg',
    alt: {
      hi: 'किसान कल्याण योजना डिजिटल जन-जागरूकता शिविर',
      en: 'Farmer Welfare & Agri Scheme Awareness Camp',
    },
    title: {
      hi: 'कृषक चौपाल एवं योजना जागरूकता अभियान',
      en: 'Agrarian Scheme Awareness & Field Outreach',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'ऑन-ग्राउंड अभियान',
      en: 'On-Ground',
    },
    location: {
      hi: 'बरेली - मुरादाबाद हाईवे क्षेत्र',
      en: 'Bareilly - Moradabad Highway Zone',
    },
    date: '2024',
    description: {
      hi: 'फसल बीमा, उर्वरक सब्सिडी और डिजिटल मंडियों की जानकारी किसानों के व्हाट्सएप्प तक पहुंचाने का ऑन-साइट समन्वय।',
      en: 'Ground deployment connecting agricultural subsidy clarity with hyper-local conversational media.',
    },
  },
  {
    id: 'g-5',
    src: '/images/projects/panchayat-branding.jpg',
    alt: {
      hi: 'जिला पंचायत सम्मेलन प्रवेश द्वार एवं मंच सज्जा',
      en: 'District Panchayat Convention Stage & Branding',
    },
    title: {
      hi: 'जिला पंचायत महासम्मेलन भव्य मंच व गेट डिजाइन',
      en: 'District Convention Architectural Stage & Gate Branding',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'ब्रांडिंग व आउटडोर',
      en: 'Branding & Outdoor',
    },
    location: {
      hi: 'अयोध्या - सुल्तानपुर हाईवे, उप्र',
      en: 'Ayodhya - Sultanpur Highway, UP',
    },
    date: '2024',
    description: {
      hi: '3-दिवसीय राज्यस्तरीय सम्मेलन हेतु 60 फीट का मुख्य मंच, 12 स्वागत द्वार और डेलिगेट किट का एकीकृत निर्माण।',
      en: 'Turnkey architectural stage engineering, 60-ft thematic backdrop, and coordinated welcome portals.',
    },
  },
  {
    id: 'g-6',
    src: '/images/projects/newsroom-desk.jpg',
    alt: {
      hi: 'वार्षिक सोशल मीडिया न्यूज़रूम एवं मीडिया डेस्क',
      en: 'Dedicated Social Media Newsroom & Editorial Desk',
    },
    title: {
      hi: 'समर्पित सोशल मीडिया न्यूज़रूम व देवनागरी संपादकीय डेस्क',
      en: 'Dedicated Social Newsroom & Devanagari Copy Desk',
    },
    category: 'digital',
    categoryLabel: {
      hi: 'न्यूज़रूम डेस्क',
      en: 'Newsroom',
    },
    location: {
      hi: 'हजरतगंज, लखनऊ',
      en: 'Hazratganj, Lucknow',
    },
    date: '2023-2024',
    description: {
      hi: 'दैनिक जनसुनवाई, प्रश्नों के आधिकारिक उत्तर, और सकारात्मक जनकार्यों के त्वरित प्रसार हेतु डेडिकेटेड टीम।',
      en: 'Daily constituent response management, policy explainers, and real-time positive narrative dispatch.',
    },
  },
  {
    id: 'g-7',
    src: '/images/projects/report-card.jpg',
    alt: {
      hi: 'विधानसभा विकास रिपोर्ट कार्ड एवं विजुअल आईडेंटिटी',
      en: 'Constituency Development Report Card & Identity Suite',
    },
    title: {
      hi: '32-पेज विधानसभा रिपोर्ट कार्ड व इंफोग्राफिक बुकलेट',
      en: '32-Page Development Audit Report & Identity Kit',
    },
    category: 'digital',
    categoryLabel: {
      hi: 'पब्लिकेशन व डिज़ाइन',
      en: 'Publication',
    },
    location: {
      hi: 'मध्य उत्तर प्रदेश',
      en: 'Central Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'तथ्य-सत्यापित क्षेत्रीय विकास कार्यों का हाई-रेज़ोल्यूशन प्रिंट मास्टर, डिजिटल पीडीएफ एवं सोशल कैरोसेल सेट।',
      en: 'Fact-verified constituency infrastructure performance audit, CMYK press files, and digital carousel kits.',
    },
  },
  {
    id: 'g-8',
    src: '/images/projects/civic-awareness.jpg',
    alt: {
      hi: 'शहरी स्वच्छता एवं मतदाता जन-जागरूकता अभियान',
      en: 'Civic Cleanliness & Voter Participation Campaign',
    },
    title: {
      hi: 'शहरी जन-जागरूकता एवं मतदाता सहभागिता अभियान',
      en: 'Civic Awareness & Voter Mobilization Drive',
    },
    category: 'outreach',
    categoryLabel: {
      hi: 'जन-जागरूकता',
      en: 'Civic Drive',
    },
    location: {
      hi: 'लखनऊ महानगर, उप्र',
      en: 'Lucknow Urban, UP',
    },
    date: '2025',
    description: {
      hi: 'वार्ड-स्तरीय डिजिटल वीडियो सीरीज, देवनागरी इंफोग्राफिक्स और मतदान सहभागिता बढ़ाने वाला अभियान।',
      en: 'Ward-targeted social short films and vernacular infographics driving urban youth civic engagement.',
    },
  },
];
