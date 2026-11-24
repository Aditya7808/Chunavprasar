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
  { id: 'media', label: { hi: 'नेतृत्व संवाद व भेंट', en: 'Leadership & Engagements' } },
  { id: 'on-ground', label: { hi: 'ऑन-ग्राउंड अभियान', en: 'On-Ground Campaigns' } },
  { id: 'outreach', label: { hi: 'जनसंवाद व यात्रा', en: 'Jan Samvad & Yatra' } },
  { id: 'digital', label: { hi: 'डिजिटल वॉर रूम व बैठक', en: 'War Room & Ops' } },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-real-11',
    src: '/images/gallery/gallery-11-paper-review-minister.jpg',
    alt: {
      hi: 'उपमुख्यमंत्री को ज्ञापन एवं नीति रिपोर्ट का अवलोकन',
      en: 'Submitting Representation & Memorandum to Deputy Chief Minister',
    },
    title: {
      hi: 'उपमुख्यमंत्री को नीति रिपोर्ट एवं जन-मुद्दों का प्रस्तुतिकरण',
      en: 'Presenting Constituency Policy Report to Deputy Chief Minister',
    },
    category: 'media',
    categoryLabel: {
      hi: 'नीति समीक्षा',
      en: 'Policy Review',
    },
    location: {
      hi: 'दारुलशफ़ा - विधान सभा मार्ग, लखनऊ',
      en: 'Darulshafa - Vidhan Sabha Marg, Lucknow',
    },
    date: '2024',
    description: {
      hi: 'धरातलीय जन-मुद्दों, क्षेत्रीय विकास एवं रणनीतिक संचार रूपरेखा पर उप्र शासन के वरिष्ठ नेतृत्व के साथ आधिकारिक विमर्श।',
      en: 'Presenting verified public representations and constituency strategic communication briefs to state leadership.',
    },
  },
  {
    id: 'g-real-07',
    src: '/images/gallery/gallery-07-ministerial-meeting.jpg',
    alt: {
      hi: 'वरिष्ठ मंत्रियों व जन-प्रतिनिधियों के साथ उच्चस्तरीय बैठक',
      en: 'High-Level Policy Consultation with Ministers & Leaders',
    },
    title: {
      hi: 'वरिष्ठ मंत्रियों व जन-प्रतिनिधियों के साथ उच्चस्तरीय बैठक',
      en: 'High-Level Strategy Consultation with Ministers & Representatives',
    },
    category: 'digital',
    categoryLabel: {
      hi: 'उच्चस्तरीय बैठक',
      en: 'High-Level Meet',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'सार्वजनिक संवाद, क्षेत्रीय विकास, जन-प्रतिक्रिया और संगठनात्मक समन्वय पर वरिष्ठ मंत्रियों के साथ गहन विचार-विमर्श।',
      en: 'Strategic deliberations on public sentiment, regional policy outreach, and grassroots communication execution.',
    },
  },
  {
    id: 'g-real-12',
    src: '/images/gallery/gallery-12-elder-statesman-consultation.jpg',
    alt: {
      hi: 'वरिष्ठ राजनेता व पूर्व राज्यपाल से आत्मीय मार्गदर्शन',
      en: 'Elder Statesman Consultation & Guidance',
    },
    title: {
      hi: 'वरिष्ठ राजनेता व पूर्व राज्यपाल से व्यक्तिगत मार्गदर्शन',
      en: 'Elder Statesman Consultation & Guidance',
    },
    category: 'media',
    categoryLabel: {
      hi: 'वरिष्ठ मार्गदर्शन',
      en: 'Elder Guidance',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'अनुभवी वरिष्ठ राजनेता से भारतीय सार्वजनिक जीवन, लोकतांत्रिक मर्यादाओं एवं प्रभावी जनसंचार पर व्यक्तिगत मार्गदर्शन।',
      en: 'Personal consultation and guidance on democratic values, public communications, and legislative traditions.',
    },
  },
  {
    id: 'g-real-05',
    src: '/images/gallery/gallery-05-evening-event.jpg',
    alt: {
      hi: 'उपमुख्यमंत्री एवं वरिष्ठ नेतृत्व के साथ विशेष संवाद',
      en: 'Leadership Engagement with Deputy Chief Minister & Dignitaries',
    },
    title: {
      hi: 'उपमुख्यमंत्री एवं गणमान्य अतिथियों के साथ विशेष कार्यक्रम',
      en: 'Leadership Engagement with Deputy Chief Minister & Dignitaries',
    },
    category: 'media',
    categoryLabel: {
      hi: 'विशिष्ट नेतृत्व संवाद',
      en: 'Leadership Engagement',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'उत्तर प्रदेश शासन के शीर्ष नेतृत्व के साथ विशेष सार्वजनिक समारोह में सहभागिता एवं समसामयिक विषयों पर चर्चा।',
      en: 'Participation alongside senior cabinet ministers and public figures in state-level civic gathering.',
    },
  },
  {
    id: 'g-real-01',
    src: '/images/gallery/gallery-01-honour-stage.jpg',
    alt: {
      hi: 'मंच पर स्मृति-चिह्न व सम्मान प्राप्ति',
      en: 'Memento & Cultural Honour Felicitation on Stage',
    },
    title: {
      hi: 'सामाजिक व सांस्कृतिक महामंच पर स्मृति-चिह्न सम्मान',
      en: 'Honorary Memento Presentation at State Convention',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'समारोह व सम्मान',
      en: 'Honor & Felicitation',
    },
    location: {
      hi: 'प्रयागराज - लखनऊ, उत्तर प्रदेश',
      en: 'Prayagraj - Lucknow, UP',
    },
    date: '2024',
    description: {
      hi: 'धार्मिक व सांस्कृतिक जनसेवा प्रतिष्ठान के विशाल मंच पर विशिष्ट अतिथियों द्वारा स्मृति-चिह्न भेंट कर सम्मानित किए जाने का क्षण।',
      en: 'Prestigious felicitation and memento presentation by community leaders and distinguished dignitaries on stage.',
    },
  },
  {
    id: 'g-real-03',
    src: '/images/gallery/gallery-03-campaign-convoy.jpg',
    alt: {
      hi: 'चुनाव प्रचार यात्रा व काफिला जनसंपर्क',
      en: 'Campaign Convoy & Grassroots Outreach Tour',
    },
    title: {
      hi: 'विधानसभा चुनाव प्रचार यात्रा एवं काफिला जनसंपर्क',
      en: 'Constituency Campaign Tour & Convoy Outreach',
    },
    category: 'outreach',
    categoryLabel: {
      hi: 'प्रचार यात्रा',
      en: 'Campaign Tour',
    },
    location: {
      hi: 'विधानसभा क्षेत्र, उत्तर प्रदेश',
      en: 'Constituency Field, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'प्रचार वाहन काफिले के साथ गांव-गांव और कस्बों में सघन जनसंपर्क, मतदाताओं का अभिवादन एवं मैदानी समन्वय।',
      en: 'Ground-level constituent outreach and campaign coordination alongside the official campaign fleet.',
    },
  },
  {
    id: 'g-real-04',
    src: '/images/gallery/gallery-04-felicitation-meeting.jpg',
    alt: {
      hi: 'वरिष्ठ जन-प्रतिनिधियों का अंगवस्त्रम सम्मान',
      en: 'Felicitation Ceremony with Senior Representatives',
    },
    title: {
      hi: 'वरिष्ठ जन-प्रतिनिधियों का शॉल व अंगवस्त्रम सम्मान',
      en: 'Felicitation Ceremony with Senior Public Representatives',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'अभिनंदन समारोह',
      en: 'Felicitation',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'वरिष्ठ जन-प्रतिनिधियों का पारम्परिक अंगवस्त्रम भेंट कर अभिनंदन एवं संगठनात्मक पहलों पर चर्चा।',
      en: 'Formal felicitation with traditional shawls and strategic consultation with respected representatives.',
    },
  },
  {
    id: 'g-real-09',
    src: '/images/gallery/gallery-09-flag-hoisting.jpg',
    alt: {
      hi: 'स्वतंत्रता दिवस राष्ट्रीय ध्वजारोहण समारोह',
      en: 'National Flag Hoisting & Independence Day Gathering',
    },
    title: {
      hi: 'स्वतंत्रता दिवस पर गरिमामय तिरंगा ध्वजारोहण',
      en: 'Independence Day National Flag Hoisting Ceremony',
    },
    category: 'outreach',
    categoryLabel: {
      hi: 'राष्ट्रीय पर्व',
      en: 'National Festival',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'नागरिकों, सामाजिक कार्यकर्ताओं और सहयोगियों के साथ राष्ट्रीय एकता एवं संवैधानिक निष्ठा का पावन पर्व।',
      en: 'Flag hoisting ceremony organized in the presence of community elders, colleagues, and local citizens.',
    },
  },
  {
    id: 'g-real-10',
    src: '/images/gallery/gallery-10-party-office-meet.jpg',
    alt: {
      hi: 'केंद्रीय चुनाव कार्यालय व संगठनात्मक बैठक',
      en: 'Central Campaign Office & Operational Review',
    },
    title: {
      hi: 'केंद्रीय चुनाव कार्यालय में संगठनात्मक बैठक व समीक्षा',
      en: 'Central Campaign Office Strategy & Coordinator Meet',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'कार्यालय बैठक',
      en: 'Office Review',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'क्षेत्रीय पदाधिकारियों और अभियान प्रभारियों के साथ बूथ-स्तरीय रणनीति, प्रचार सामग्री वितरण और कार्य समीक्षा।',
      en: 'Operational briefing with constituency coordinators and review of field communication materials.',
    },
  },
  {
    id: 'g-real-02',
    src: '/images/gallery/gallery-02-gate-welcome.jpg',
    alt: {
      hi: 'समारोह प्रवेश द्वार पर विशिष्ट अतिथियों का स्वागत',
      en: 'Welcoming Dignitaries & Guests at Event Pavilion',
    },
    title: {
      hi: 'समारोह प्रवेश द्वार पर विशिष्ट अतिथियों का स्वागत',
      en: 'Welcoming State Dignitaries at Event Entrance',
    },
    category: 'on-ground',
    categoryLabel: {
      hi: 'स्वागत व शिष्टाचार',
      en: 'Welcome Protocol',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'प्रमुख क्षेत्रीय व संगठनात्मक अतिथियों का पारम्परिक स्वागत एवं भव्य मंच व्यवस्था का निरीक्षण।',
      en: 'Welcoming prominent political and civic guests at the ceremonial pavilion gates.',
    },
  },
  {
    id: 'g-real-06',
    src: '/images/gallery/gallery-06-bouquet-greeting.jpg',
    alt: {
      hi: 'वरिष्ठ नेतृत्व को पुष्पगुच्छ भेंट कर अभिवादन',
      en: 'Bouquet Greeting with Distinguished Leadership',
    },
    title: {
      hi: 'वरिष्ठ नेतृत्व को पुष्पगुच्छ भेंट कर औपचारिक अभिवादन',
      en: 'Warm Floral Greeting & Welcome to Leadership',
    },
    category: 'media',
    categoryLabel: {
      hi: 'शिष्टाचार भेंट',
      en: 'Formal Greeting',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'विशिष्ट अतिथियों व जन-प्रतिनिधियों को पुष्पगुच्छ भेंट कर औपचारिक आत्मीय अभिवादन एवं स्वागत।',
      en: 'Presenting bouquets and warm greetings to distinguished representatives at official secretariat.',
    },
  },
  {
    id: 'g-real-08',
    src: '/images/gallery/gallery-08-delegation-meeting.jpg',
    alt: {
      hi: 'विशिष्ट अतिथि कक्ष में औपचारिक शिष्टाचार भेंट',
      en: 'Dignitary Delegation & Formal Consultation',
    },
    title: {
      hi: 'विशिष्ट अतिथि कक्ष में शिष्टाचार भेंट एवं संवाद',
      en: 'Dignitary Delegation & Institutional Dialogue',
    },
    category: 'digital',
    categoryLabel: {
      hi: 'प्रतिनिधिमंडल भेंट',
      en: 'Delegation Meet',
    },
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    date: '2024',
    description: {
      hi: 'वरिष्ठ जन-नेताओं के साथ बैठक कक्ष में संगठनात्मक संवाद, जनहितैषी योजनाओं के प्रचार पर मार्गदर्शन प्राप्ति।',
      en: 'Consultation session with elder representatives on constructive public communication schemes.',
    },
  },
  {
    id: 'g-tech-01',
    src: '/images/projects/warroom.jpg',
    alt: {
      hi: 'केंद्रीय डिजिटल वॉर रूम लखनऊ',
      en: 'Central Digital War Room Lucknow',
    },
    title: {
      hi: 'सेंट्रल डिजिटल वॉर रूम व 24/7 मॉनिटरिंग डेस्क',
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
    id: 'g-tech-02',
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
];
