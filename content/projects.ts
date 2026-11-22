export type ProjectCategory = 'all' | 'design' | 'video' | 'digital-ads' | 'photography' | 'print-outdoor';
export type WorkType = 'all' | 'client' | 'concept';

export interface ProjectItem {
  id: string;
  slug: string;
  title: {
    hi: string;
    en: string;
  };
  clientName: {
    hi: string;
    en: string;
  };
  category: ProjectCategory;
  workType: 'client' | 'concept';
  tag: {
    hi: string;
    en: string;
  };
  summary: {
    hi: string;
    en: string;
  };
  year: string;
  location: {
    hi: string;
    en: string;
  };
  featured: boolean;
  coverImage: string;
  context: {
    hi: string;
    en: string;
  };
  scope: {
    hi: string[];
    en: string[];
  };
  creativeApproach: {
    hi: string;
    en: string;
  };
  deliverables: {
    hi: string[];
    en: string[];
  };
  metricsPlaceholder?: {
    hi: { label: string; value: string }[];
    en: { label: string; value: string }[];
  };
  gallery: {
    caption: { hi: string; en: string };
    type: 'image' | 'video';
    aspectRatio: '16/9' | '4/5' | '1/1' | '9/16';
  }[];
  credits: {
    role: { hi: string; en: string };
    name: string;
  }[];
  relatedSlugs: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'case-1-vidhansabha-warroom-booth-command',
    slug: 'vidhansabha-warroom-booth-command',
    title: {
      hi: 'विधानसभा चुनाव 24×7 डिजिटल वॉर रूम एवं बूथ प्रबंधन',
      en: 'Constituency 24×7 Digital War Room & Booth Command Center',
    },
    clientName: {
      hi: 'विधानसभा चुनावी रणनीति सेल (रणनीतिक मॉडल)',
      en: 'Assembly Election Strategy Cell (Strategic Framework)',
    },
    category: 'digital-ads',
    workType: 'concept',
    tag: {
      hi: 'रणनीतिक मॉडल',
      en: 'Strategic Model',
    },
    summary: {
      hi: '350+ मतदान केंद्रों का बूथ-स्तरीय डेटा वर्गीकरण (Strong/Weak/Opportunity), 24×7 त्वरित प्रत्युत्तर वॉर रूम एवं पन्ना प्रमुख व्हाट्सएप ब्रॉडकास्ट ग्रिड।',
      en: '350+ booth demographic segmentation (Strong/Weak/Opportunity), 24/7 rapid-response rebuttal war room, and Panna Pramukh broadcast cascade.',
    },
    year: '2024-2025',
    location: {
      hi: 'लखनऊ व अवध क्षेत्र, उत्तर प्रदेश',
      en: 'Lucknow & Awadh Region, Uttar Pradesh',
    },
    featured: true,
    coverImage: '/images/projects/warroom.jpg',
    context: {
      hi: 'आधुनिक विधानसभा चुनावों में अंतिम 45 दिनों के दौरान नैरेटिव की गति अत्यधिक तीव्र होती है। विरोधी पक्षों के भ्रामक प्रचार का तुरंत खंडन, बूथ कार्यकर्ताओं तक दैनिक संदेशों का समयबद्ध प्रसारण और कमजोर बूथों पर लक्षित डिजिटल विज्ञापनों के लिए एक एकीकृत 24×7 वॉर रूम की रूपरेखा तैयार की गई।',
      en: 'During the high-stakes final 45 days of an assembly campaign, narrative velocity determines electoral outcome. This framework establishes an integrated 24/7 command center countering rival disinformation within minutes and mobilizing booth cadres.',
    },
    scope: {
      hi: [
        '350+ बूथों का डेटा मैपिंग: मजबूत (Strong), औसत (Average), अवसर (Opportunity) और संकटग्रस्त (Threat) में विभाजन',
        '24×7 त्वरित मीडिया मॉनिटरिंग एवं 30-मिनट फैक्ट-चेक प्रत्युत्तर रील्स',
        'पन्ना प्रमुखों एवं बूथ प्रभारियों के लिए वार्ड-वार अधिकृत व्हाट्सएप प्रसारण नेटवर्क',
        'चुनाव आचार संहिता (MCC) एवं ECI सोशल मीडिया गाइडलाइन्स का 100% अनुपालन',
      ],
      en: [
        '350+ polling booth segmentation into Strong, Average, Opportunity, and Threat clusters',
        '24/7 media sentiment surveillance and 30-minute rapid fact-check video rebuttals',
        'Hierarchical WhatsApp broadcast tree down to verified Panna Pramukhs and ward in-charges',
        'Full compliance architecture adhering to ECI pre-certification and expenditure norms',
      ],
    },
    creativeApproach: {
      hi: 'राजनीतिक वॉर रूम की सफलता गति और विश्वसनीयता पर टिकी होती है। हमने तीन-स्तरीय प्रणाली बनाई: 1. इंटेलिजेंस डेस्क (सोशल व जमीनी रुझान), 2. क्रिएटिव स्क्वाड (त्वरित देवनागरी ग्राफिक व वीडियो), 3. डिस्ट्रीब्यूशन विंग (बूथ-वाइज ब्रॉडकास्ट व पिनकोड ऐड्स)।',
      en: 'War-room agility relies on three synchronized wings: Intelligence Desk (sentiment tracking), Creative Squad (instant Devanagari motion graphics), and Distribution Wing (booth-specific WhatsApp broadcasts and geo-fenced ads).',
    },
    deliverables: {
      hi: [
        '1x दैनिक प्रातःकालीन रणनीतिक बुलेटिन (Morning Strategy Brief)',
        '45+ त्वरित वीडियो खंडन एवं काउंटर-नैरेटिव रील्स',
        'बूथ-स्तरीय पन्ना प्रमुख डिजिटल हैंडबुक व वोटर स्लिप गाइड',
        'दैनिक विजुअल डैशबोर्ड: डिजिटल रीच, शेयर ऑफ वॉइस (SOV) और मतदाता रुझान',
      ],
      en: [
        '1x Daily Morning Strategic Brief delivered by 6:00 AM',
        '45+ rapid-rebuttal and counter-narrative vertical video packages',
        'Booth-level Panna Pramukh digital mobilization guide',
        'Daily executive command dashboard tracking digital sentiment and reach',
      ],
    },
    metricsPlaceholder: {
      hi: [
        { label: 'बूथ मैपिंग कवरेज', value: '382 पोलिंग स्टेशन' },
        { label: 'औसत प्रत्युत्तर समय', value: '28 मिनट' },
        { label: 'सत्यापित कार्यकर्ता ग्रिड', value: '4,800+ पन्ना साथी' },
      ],
      en: [
        { label: 'Booths Mapped', value: '382 Polling Stations' },
        { label: 'Rebuttal Turnaround', value: '28 Minutes Avg' },
        { label: 'Verified Cadre Grid', value: '4,800+ Panna Pramukhs' },
      ],
    },
    gallery: [
      { caption: { hi: '24×7 वॉर रूम कमांड सेंटर स्क्रीन लेआउट', en: '24/7 War Room multi-monitor dashboard composition' }, type: 'image', aspectRatio: '16/9' },
      { caption: { hi: 'बूथ वर्गीकरण हीटमैप एवं पन्ना प्रमुख नेटवर्क', en: 'Booth segmentation heatmap and volunteer tree' }, type: 'image', aspectRatio: '4/5' },
    ],
    credits: [
      { role: { hi: 'वॉर रूम रणनीति प्रमुख', en: 'War Room Strategist' }, name: 'आधुनिक प्रचार प्रसार रिसर्च सेल' },
      { role: { hi: 'डिजिटल ऑप्स लीड', en: 'Media Ops' }, name: 'कैंपेन डिप्लॉयमेंट टीम' },
    ],
    relatedSlugs: ['jan-samvad-leader-persona-rebrand', 'vidhansabha-constituency-rebrand'],
  },
  {
    id: 'case-2-jan-samvad-leader-persona-rebrand',
    slug: 'jan-samvad-leader-persona-rebrand',
    title: {
      hi: 'जनसंवाद यात्रा एवं नेतृत्व छवि निर्माण अभियान (360°)',
      en: 'Jan Samvad Yatra & Leader Persona Re-engineering (360°)',
    },
    clientName: {
      hi: 'नेतृत्व ब्रांडिंग सेल (रणनीतिक मॉडल)',
      en: 'Leadership Branding Cell (Strategic Framework)',
    },
    category: 'video',
    workType: 'concept',
    tag: {
      hi: 'रणनीतिक मॉडल',
      en: 'Strategic Model',
    },
    summary: {
      hi: '21-दिवसीय जनसंवाद यात्रा का 4K सिनेमैटिक कवरेज, 60+ अवधी/भोजपुरी/हिंदी रील्स, टाउन-हॉल सीधा संवाद और युवाओं को जोड़ने वाला डिजिटल घोषणापत्र।',
      en: '21-day constituency outreach tour in 4K cinema, 60+ regional reels with vernacular hooks, youth town-hall dialogue, and digital manifesto blitz.',
    },
    year: '2024-2025',
    location: {
      hi: 'उत्तर प्रदेश विधानसभा क्षेत्र',
      en: 'Uttar Pradesh Legislative Assembly',
    },
    featured: true,
    coverImage: '/images/projects/jansamvad.jpg',
    context: {
      hi: 'जनप्रतिनिधि या प्रत्याशी की छवि को पारंपरिक मंच-भाषण से आगे ले जाकर जनता के बीच एक सुलभ, संवेदनशील और समाधान-उन्मुख जननेता के रूप में स्थापित करना था। 18 से 35 आयु वर्ग के युवा मतदाताओं और ग्रामीण चौपालों के साथ जीवंत संवाद स्थापित करने की आवश्यकता थी।',
      en: 'Transitioning candidate perception from distant dais speaker to accessible, empathetic problem-solver. The strategic mandate focused on engaging 18–35 first-time voters and rural farmers through conversational town halls.',
    },
    scope: {
      hi: [
        '21-दिवसीय सघन जनसंवाद यात्रा का संपूर्ण 4K सिनेमैटिक कवरेज व ड्रोन वीडियोग्राफी',
        'अनस्क्रिप्टेड चौपाल बैठकों एवं युवा टाउन-हॉल से 60+ हाई-इम्पैक्ट वर्टिकल रील्स',
        'स्थानीय अवधी व खड़ी बोली में प्रेरणादायी थीम गीत (Campaign Anthem) का निर्माण',
        'क्षेत्रीय समस्याओं (सड़क, जल, रोजगार) पर प्रत्याशी के विजन का विजुअल घोषणापत्र',
      ],
      en: [
        'End-to-end 4K cinematography, multi-cam town halls, and licensed drone coverage across 21 days',
        '60+ short-form vertical reels capturing candid voter interactions and youth exchanges',
        'Bilingual thematic campaign anthem recorded with authentic Awadhi and Hindi instrumentation',
        'Visual digital manifesto translating policy commitments into high-impact social infographics',
      ],
    },
    creativeApproach: {
      hi: 'भारी-भरकम भाषणों के बजाय जनता के सवालों और प्रत्याशी के विनम्र, स्पष्ट उत्तरों को रील्स का मुख्य हुक बनाया गया। देवनागरी टाइपोग्राफी में बड़े, स्पष्ट सबटाइटल्स दिए गए ताकि म्यूट पर भी पूरा संदेश सम्प्रेषित हो सके।',
      en: 'Reels discarded speech clips in favor of authentic two-way dialogue: real voter queries met by direct, empathetic candidate responses with bold Devanagari subtitles optimized for sound-off consumption.',
    },
    deliverables: {
      hi: [
        '60x 9:16 मास्टर सोशल रील्स (Instagram, Facebook Reels, YouTube Shorts)',
        '1x 3-मिनट का मुख्य अभियान एंथम वीडियो (4K Cinematic Master)',
        '1x डिजिटल विजन डॉक्यूमेंट (व्हाट्सएप शेयर करने योग्य 12-पृष्ठीय पीडीएफ)',
        '25x जनसंवाद उद्धरण पोस्टर्स (Quote Cards) सोशल मीडिया के लिए',
      ],
      en: [
        '60x 9:16 high-retention short reels for Instagram, Facebook, and YouTube Shorts',
        '1x 3-minute 4K cinematic main campaign anthem film',
        '1x 12-page WhatsApp-optimized digital vision document PDF',
        '25x stylized Devanagari quote cards capturing key commitments',
      ],
    },
    metricsPlaceholder: {
      hi: [
        { label: 'निर्मित वीडियो रील्स', value: '62 वीडियो' },
        { label: 'ऑर्गेनिक वीडियो एंगेजमेंट', value: '3.4x वृद्धि' },
        { label: 'कवर किए गए गांव व वार्ड', value: '84 ग्राम पंचायतें' },
      ],
      en: [
        { label: 'Reels Produced', value: '62 Master Videos' },
        { label: 'Organic Video Lift', value: '3.4x Benchmark' },
        { label: 'Gram Panchayats Covered', value: '84 Rural Units' },
      ],
    },
    gallery: [
      { caption: { hi: 'ग्रामीण चौपाल में 4K ग्राउंड सिनेमैटोग्राफी सेटअप', en: 'Rural village chaupal candid town hall capture' }, type: 'image', aspectRatio: '16/9' },
      { caption: { hi: 'युवा संवाद रील्स लेआउट एवं देवनागरी टाइपोग्राफी', en: 'Youth Q&A vertical reel with bold Devanagari subtitles' }, type: 'image', aspectRatio: '9/16' },
    ],
    credits: [
      { role: { hi: 'सिनेमैटिक डायरेक्टर', en: 'Cinematic Director' }, name: 'आधुनिक प्रचार प्रसार फिल्म्स' },
      { role: { hi: 'पॉलिटिकल कॉपीराइटर', en: 'Political Copywriter' }, name: 'नैरेटिव डेस्क' },
    ],
    relatedSlugs: ['vidhansabha-warroom-booth-command', 'purvanchal-infrastructure-documentary'],
  },
  {
    id: 'case-3-vidhansabha-rebrand',
    slug: 'vidhansabha-constituency-rebrand',
    title: {
      hi: 'विधानसभा क्षेत्र रिपोर्ट कार्ड व विजुअल आइडेंटिटी',
      en: 'Constituency Development Report & Identity Suite',
    },
    clientName: {
      hi: '[PLACEHOLDER: निर्वाचित जनप्रतिनिधि कार्यालय, मध्य उत्तर प्रदेश]',
      en: '[PLACEHOLDER: Elected Representative Secretariat, Central UP]',
    },
    category: 'design',
    workType: 'client',
    tag: {
      hi: 'क्लाइंट वर्क (नमूना)',
      en: 'Client Work (Sample)',
    },
    summary: {
      hi: '5 वर्ष के विकास कार्यों, सड़कों, स्वास्थ्य केंद्रों और शिक्षा पहलों का तथ्यपरक 32-पृष्ठीय रिपोर्ट कार्ड और डिजिटल सोशल किट।',
      en: 'A 32-page factual constituency development audit booklet and coordinated social media identity kit.',
    },
    year: '2024',
    location: {
      hi: 'मध्य उत्तर प्रदेश',
      en: 'Central Uttar Pradesh',
    },
    featured: true,
    coverImage: '/images/projects/report-card.jpg',
    context: {
      hi: 'कार्यालय को अपने 5 वर्षीय कार्यकाल के दौरान स्वीकृत और पूरे हुए सार्वजनिक कार्यों का एक प्रामाणिक, गैर-विवादास्पद और तथ्य-आधारित रिकॉर्ड जनता और मीडिया के सामने रखना था। दावा-मुक्त और केवल सरकारी स्वीकृतियों के आधार पर दस्तावेज तैयार करना प्रमुख शर्त थी।',
      en: 'The representative secretariat required an unvarnished, factually authenticated public account of sanctioned infrastructural projects, hospital upgrades, and schooling developments across the constituency.',
    },
    scope: {
      hi: [
        '32-पृष्ठीय विकास रिपोर्ट कार्ड (Devanagari Book Design)',
        '100+ ऑन-ग्राउंड पूर्ण योजनाओं का फोटोग्राफिक संकलन',
        '15 इन्फोग्राफिक चार्ट्स (बजट आवंटन, किलोमीटर सड़क, नए विद्यालय)',
        'सोशल मीडिया घोषणाओं के लिए 40 मास्टर टेम्पलेट्स',
      ],
      en: [
        '32-page Devanagari comprehensive development booklet',
        'Photographic audit of 100+ completed civic and road projects',
        '15 vector data-charts detailing budget allocations and completion dates',
        '40 standardized social announcement templates',
      ],
    },
    creativeApproach: {
      hi: 'अतिशयोक्ति से बचने के लिए प्रत्येक परियोजना के साथ सरकारी शासनादेश (GO) संख्या, कार्य की लागत और पूर्ण होने की तारीख दर्ज की गई। लेआउट को गंभीर नेवी और गोल्ड टोन में तैयार किया गया, जिससे यह एक प्रामाणिक प्रशासनिक रिपोर्ट की गरिमा प्रस्तुत करे।',
      en: 'To avoid politicized hyperbole, every entry included Government Order (GO) identification numbers, approved expenditures, and commissioning dates. Visual direction adhered to formal editorial typography and restrained color tones.',
    },
    deliverables: {
      hi: [
        'मुद्रण हेतु उच्च-रिज़ॉल्यूशन CMYK प्रेस मास्टर (ऑफसेट रेडी)',
        'व्हाट्सएप वितरण हेतु 4MB ऑप्टिमाइज्ड इंटरएक्टिव पीडीएफ',
        'फेसबुक व इंस्टाग्राम हेतु 10-स्लाइड सेक्टोरल कैरोसल्स',
        'प्रेस ब्रीफिंग हेतु संक्षिप्त इन्फोग्राफिक फोल्डर (4-पेज)',
      ],
      en: [
        'High-resolution CMYK press master for print distribution',
        'Optimized 4MB interactive PDF for direct constituent messaging',
        '10-slide sectoral carousels for Facebook and Instagram release',
        '4-page summary briefing folder for local press representatives',
      ],
    },
    metricsPlaceholder: {
      hi: [
        { label: 'वितरित प्रतियां', value: '[PLACEHOLDER: 50,000 भौतिक प्रतियां]' },
        { label: 'डिजिटल डाउनलोड्स', value: '[PLACEHOLDER: 1,20,000+ पीडीएफ व्यूज]' },
        { label: 'कवर की गई योजनाएं', value: '87 प्रमाणित विकास कार्य' },
      ],
      en: [
        { label: 'Print Circulation', value: '[PLACEHOLDER: 50,000 Hard Copies]' },
        { label: 'Digital Reads', value: '[PLACEHOLDER: 120,000+ Downloads]' },
        { label: 'Projects Audited', value: '87 Certified Works' },
      ],
    },
    gallery: [
      { caption: { hi: 'रिपोर्ट कार्ड कवर एवं आवरण पृष्ठ डिजाइन', en: 'Report card editorial front cover composition' }, type: 'image', aspectRatio: '16/9' },
      { caption: { hi: 'आंतरिक पृष्ठ: बजट आवंटन एवं सड़क निर्माण इन्फोग्राफिक', en: 'Inside spread: Budget allocations and road metrics' }, type: 'image', aspectRatio: '4/5' },
    ],
    credits: [
      { role: { hi: 'मुख्य संपादकीय डिजाइनर', en: 'Lead Editorial Designer' }, name: 'आधुनिक प्रचार प्रसार डिजाइन सेल' },
      { role: { hi: 'डेटा शोधकर्ता', en: 'Policy & Data Researcher' }, name: '[PLACEHOLDER: Governance Analyst]' },
    ],
    relatedSlugs: ['vidhansabha-warroom-booth-command', 'lucknow-civic-voter-awareness-campaign'],
  },
  {
    id: 'case-4-purvanchal-documentary',
    slug: 'purvanchal-infrastructure-documentary',
    title: {
      hi: 'पूर्वांचल विकास एवं एक्सप्रेसवे विजन फिल्म',
      en: 'Purvanchal Industrial & Connectivity Documentary',
    },
    clientName: {
      hi: '[PLACEHOLDER: क्षेत्रीय औद्योगिक विकास परिषद (प्रायोजित परियोजना)]',
      en: '[PLACEHOLDER: Regional Industrial Promotion Body (Sponsored Project)]',
    },
    category: 'video',
    workType: 'client',
    tag: {
      hi: 'क्लाइंट वर्क (नमूना)',
      en: 'Client Work (Sample)',
    },
    summary: {
      hi: 'पूर्वांचल के 6 जिलों में कनेक्टिविटी, लॉजिस्टिक्स और कृषि उद्योगों पर 8 मिनट की 4K सिनेमैटिक डॉक्यूमेंट्री।',
      en: 'An 8-minute 4K documentary capturing regional logistics, road corridors, and agro-processing hubs.',
    },
    year: '2024',
    location: {
      hi: 'वाराणसी - गोरखपुर - सुल्तानपुर, उप्र',
      en: 'Varanasi - Gorakhpur - Sultanpur, UP',
    },
    featured: true,
    coverImage: '/images/projects/purvanchal.jpg',
    context: {
      hi: 'पूर्वांचल क्षेत्र में औद्योगिक निवेश और नए बुनियादी ढांचे की जमीनी हकीकत को राष्ट्रीय व अंतरराष्ट्रीय निवेशकों के सामने प्रस्तुत करना था। परियोजना के लिए वास्तविक किसानों, उद्यमियों और श्रमिकों के साक्षात्कारों की आवश्यकता थी।',
      en: 'Capturing the transforming economic footprint of connectivity corridors across eastern Uttar Pradesh through the lived voices of entrepreneurs, farmers, and logistics operators.',
    },
    scope: {
      hi: [
        '6 जिलों में 10-दिवसीय सघन 4K सिनेमा व ड्रोन शूटिंग',
        '25+ हितधारकों के ग्राउंड इंटरव्यू (ध्वनि व रंग सुधार सहित)',
        'मूल अवधी एवं भोजपुरी वाद्ययंत्रों से सुसज्जित लाइसेंस प्राप्त संगीत',
        'द्विभाषी सबटाइटल्स (हिंदी एवं अंग्रेजी)',
      ],
      en: [
        '10-day field cinematography deployment across 6 districts',
        '25+ long-form constituent and industrialist interviews',
        'Authentic acoustic folk-instrument scoring with commercial clearances',
        'Bilingual subtitle synchronization',
      ],
    },
    creativeApproach: {
      hi: 'ड्रोन शॉट्स द्वारा एक्सप्रेसवे और वेयरहाउसिंग हब्स की भव्यता दिखाई गई, जबकि हैंडहेल्ड 4K कैमरों द्वारा स्थानीय कारीगरों के परिश्रम को मानवीय संवेदनशीलता के साथ चित्रित किया गया।',
      en: 'Grand aerial landscape cinematography contrasted with intimate shoulder-mounted cinema camera interviews, striking a balance between scale and human warmth.',
    },
    deliverables: {
      hi: [
        '1x 8-मिनट की 4K मास्टर डॉक्यूमेंट्री (फ्लैगशिप स्क्रीनिंग हेतु)',
        '4x 60-सेकंड वर्टिकल सोशल कटडाउन (Instagram / X / WhatsApp)',
        '1x 2-मिनट का उच्च-ऊर्जा आधिकारिक टीजर',
        'स्थानीय बोली में रिकॉर्डेड 30-सेकंड रेडियो / लाउडस्पीकर जिंगल',
      ],
      en: [
        '1x 8-minute 4K Master Documentary for flagship screenings',
        '4x 60-second vertical social cutdowns',
        '1x 2-minute high-energy official teaser',
        '30-second localized audio capsule for radio broadcasts',
      ],
    },
    metricsPlaceholder: {
      hi: [
        { label: 'यूट्यूब एवं सोशल व्यूज', value: '[PLACEHOLDER: 1,80,000+ सत्यापित पूर्ण व्यूज]' },
        { label: 'औसत वॉच-टाइम', value: '[PLACEHOLDER: 6 मिनट 12 सेकंड]' },
        { label: 'स्थानीय रोजगार कवरेज', value: '14 औद्योगिक क्लस्टर्स' },
      ],
      en: [
        { label: 'Total Verified Views', value: '[PLACEHOLDER: 180,000+ Full Views]' },
        { label: 'Avg Watch Duration', value: '[PLACEHOLDER: 6m 12s]' },
        { label: 'Clusters Surveyed', value: '14 Industrial Nodes' },
      ],
    },
    gallery: [
      { caption: { hi: 'एक्सप्रेसवे लॉजिस्टिक्स कॉरिडोर का ड्रोन दृश्य', en: 'Aerial cinematic perspective of logistics corridor' }, type: 'image', aspectRatio: '16/9' },
      { caption: { hi: 'स्थानीय उद्यमी के साथ 4K फील्ड इंटरव्यू', en: 'Constituency entrepreneur interview on location' }, type: 'image', aspectRatio: '16/9' },
    ],
    credits: [
      { role: { hi: 'निर्देशक व संपादन', en: 'Director & Editor' }, name: 'आधुनिक प्रचार प्रसार प्रोडक्शन हेड' },
      { role: { hi: 'ड्रोन पायलट', en: 'Licensed Drone Pilot' }, name: '[PLACEHOLDER: Certified Aerial Specialist]' },
    ],
    relatedSlugs: ['jan-samvad-leader-persona-rebrand', 'vidhansabha-warroom-booth-command'],
  },
  {
    id: 'case-5-lucknow-civic-awareness',
    slug: 'lucknow-civic-voter-awareness-campaign',
    title: {
      hi: 'राजधानी स्वच्छता एवं नागरिक सहभागिता अभियान',
      en: 'Civic Cleanliness & Voter Participation Initiative',
    },
    clientName: {
      hi: '[PLACEHOLDER: लखनऊ नागरिक मंच (NGO / Civic Alliance)]',
      en: '[PLACEHOLDER: Lucknow Civic Alliance (Civil Society / NGO)]',
    },
    category: 'digital-ads',
    workType: 'concept',
    tag: {
      hi: 'कॉन्सेप्ट प्रोजेक्ट',
      en: 'Concept Work',
    },
    summary: {
      hi: 'पिन-कोड आधारित लक्षित सोशल वीडियो एवं बहुभाषी इन्फोग्राफिक्स द्वारा शहरी मतदाताओं में स्वच्छता व सहभागिता का प्रसार।',
      en: 'Pincode-targeted social video series and vernacular infographics raising urban civic participation.',
    },
    year: '2024-2025',
    location: {
      hi: 'लखनऊ, उत्तर प्रदेश',
      en: 'Lucknow, Uttar Pradesh',
    },
    featured: true,
    coverImage: '/images/projects/civic-awareness.jpg',
    context: {
      hi: 'शहरी क्षेत्रों में नागरिक अधिकारों और स्वच्छता के प्रति जागरूकता बढ़ाने के लिए एक एकीकृत डिजिटल व ऑन-ग्राउंड मॉडल की आवश्यकता थी। उद्देश्य था कि युवा और कामकाजी आबादी तक उनके दैनिक सोशल मीडिया फीड्स में सकारात्मक व तथ्यात्मक सामग्री पहुंचे।',
      en: 'Urban civic literacy and municipal responsibility needed an integrated campaign framework. The challenge was to penetrate young urban feeds with constructive, evidence-based visual media without partisan fatigue.',
    },
    scope: {
      hi: [
        'लखनऊ नगर निगम के 8 जोनों के अनुसार माइक्रो-टारगेटेड डिजिटल अभियान',
        'अवधी व मानक हिंदी में 12 शॉर्ट-फॉर्म व्याख्यात्मक रील्स',
        'प्रमुख चौराहों के लिए 20+ उच्च-पठनीयता आउटडोर होर्डिंग डिजाइन्स',
        'पारदर्शी ऑडियंस एंगेजमेंट ऑडिट एवं रिपोर्टिंग',
      ],
      en: [
        'Micro-targeted campaign segmented across 8 municipal zones in Lucknow',
        '12 vertical educational video explainers in Awadhi and standard Devanagari',
        '20+ high-legibility arterial junction hoarding designs',
        'Independent reach tracking and engagement dashboard architecture',
      ],
    },
    creativeApproach: {
      hi: 'हमने उपदेशात्मक शैली की जगह हास्य, स्थानीय सांस्कृतिक प्रतीकों (रूमी दरवाजा, गोमती रिवरफ्रंट) और वास्तविक नागरिकों के दृष्टिकोण को प्राथमिकता दी। टाइपोग्राफी को सुरुचिपूर्ण और बड़े फॉन्ट में रखा गया ताकि मोबाइल स्क्रीन पर 2 सेकंड के भीतर संदेश समझ आ सके।',
      en: 'Departing from dry bureaucratic lecturing, we deployed subtle Lucknowi cultural motifs and candid citizen perspectives. Typography featured high-contrast Devanagari headlines optimized for immediate comprehension in mobile feeds.',
    },
    deliverables: {
      hi: [
        '12x 9:16 मोशन ग्राफिक्स और ऑन-लोकेशन रील्स',
        '8x विधानसभा-स्तरीय डिजिटल विज्ञापन पैकेज (A/B परीक्षण के साथ)',
        '1x समेकित अभियान प्रदर्शन रिपोर्ट (अकाउंट-स्तरीय)',
        'प्रेस रिलीज एवं स्थानीय समाचार पत्रों के लिए मीडिया किट',
      ],
      en: [
        '12x 9:16 motion-graphic and on-location short films',
        '8x ward-level digital ad flights with calibrated split testing',
        '1x verified post-campaign audit document',
        'Complete bilingual press briefing kit and infographic handouts',
      ],
    },
    metricsPlaceholder: {
      hi: [
        { label: 'कुल रीच (ऑडियंस)', value: '[PLACEHOLDER: 4,50,000+ सत्यापित रीच]' },
        { label: 'औसत वीडियो देखने का समय', value: '[PLACEHOLDER: 48 सेकंड]' },
        { label: 'पिन-कोड लक्ष्यीकरण', value: '14 प्राथमिक पिन-कोड' },
      ],
      en: [
        { label: 'Verified Reach', value: '[PLACEHOLDER: 450,000+ Unique Reach]' },
        { label: 'Avg Video Retention', value: '[PLACEHOLDER: 48 seconds]' },
        { label: 'Pincode Granularity', value: '14 Targeted Pincodes' },
      ],
    },
    gallery: [
      { caption: { hi: 'सोशल मीडिया फीड विज्ञापन एवं रील्स फॉर्मेट', en: 'Feed ad mock and vertical reel composition' }, type: 'image', aspectRatio: '16/9' },
      { caption: { hi: 'अवधी और मानक देवनागरी में टाइपोग्राफी लेआउट', en: 'Bilingual typography breakdown and hierarchy' }, type: 'image', aspectRatio: '4/5' },
    ],
    credits: [
      { role: { hi: 'क्रिएटिव डायरेक्शन', en: 'Creative Direction' }, name: 'आधुनिक प्रचार प्रसार स्टूडियो' },
      { role: { hi: 'सिनेमैटोग्राफी', en: 'Cinematography' }, name: '[PLACEHOLDER: Production Team Lead]' },
      { role: { hi: 'डेटा व ऐड ऑप्स', en: 'Media Ops' }, name: '[PLACEHOLDER: Digital Ops Lead]' },
    ],
    relatedSlugs: ['vidhansabha-warroom-booth-command', 'jan-samvad-leader-persona-rebrand'],
  },
];
