export interface ServiceItem {
  id: string;
  slug: string;
  title: {
    hi: string;
    en: string;
  };
  shortPromise: {
    hi: string;
    en: string;
  };
  summary: {
    hi: string;
    en: string;
  };
  isCore: boolean;
  isPopular?: boolean;
  iconName: string;
  deliverables: {
    hi: string[];
    en: string[];
  };
  overview: {
    hi: string;
    en: string;
  };
  processSteps: {
    title: { hi: string; en: string };
    desc: { hi: string; en: string };
  }[];
  toolsCapabilities: string[];
  // Special fields for Digital Ad Marketing
  digitalAdDetails?: {
    platforms: { name: string; icon: string; hiDesc: string; enDesc: string }[];
    targetingOptions: { title: { hi: string; en: string }; desc: { hi: string; en: string } }[];
    creativeFormats: { title: { hi: string; en: string }; specs: string }[];
    reportingMetrics: { metric: string; hiLabel: string; enLabel: string; desc: string }[];
    campaignRoadmap90Days: { phase: string; weeks: string; hiTitle: string; enTitle: string; hiDesc: string; enDesc: string }[];
    adSpendNote: {
      hi: string;
      en: string;
    };
  };
  faqs: {
    question: { hi: string; en: string };
    answer: { hi: string; en: string };
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'creative-design-branding',
    slug: 'creative-design-branding',
    title: {
      hi: 'क्रिएटिव डिजाइन एवं ब्रांडिंग',
      en: 'Creative Design & Branding',
    },
    shortPromise: {
      hi: 'दृष्टिगोचर पहचान जो जन-जन तक आपके संदेश को विश्वसनीयता से पहुंचाए।',
      en: 'Visual identities and campaign creatives that connect with authority and credibility.',
    },
    summary: {
      hi: 'चुनावी पोस्टर्स, सोशल मीडिया ग्राफिक्स, जनसंपर्क ब्रोशर, लोगो और संपूर्ण ब्रांडिंग किट।',
      en: 'Election posters, daily social creatives, constituency brochures, visual identities, and campaign brand kits.',
    },
    isCore: true,
    isPopular: false,
    iconName: 'Palette',
    deliverables: {
      hi: [
        'दैनिक सोशल मीडिया विजुअल पोस्ट्स (त्योहार, नीतियां, घोषणाएं, प्रेस नोट)',
        'उच्च-गुणवत्ता प्रिंट सामग्री (विशाल होर्डिंग, ब्रोशर, मेनिफेस्टो पैम्फलेट)',
        'एकीकृत ब्रांडिंग दिशानिर्देश (फॉन्ट, रंग पैलेट, लोगो प्लेसमेंट गाइड)',
        'संवैधानिक व आचार संहिता दिशानिर्देशों के अनुरूप विजुअल लेआउट',
      ],
      en: [
        'Daily social media visual assets (festivals, policy briefs, press releases)',
        'High-resolution print collaterals (hoardings, manifesto booklets, flyers)',
        'Unified visual identity guidelines (Devanagari typography, palette, emblem guidelines)',
        'Strict statutory & model code layout compliance assurance',
      ],
    },
    overview: {
      hi: 'सार्वजनिक जीवन और राजनीतिक संचार में डिजाइन केवल सुंदरता का विषय नहीं है, बल्कि यह गंभीरता, स्पष्टता और जनविश्वास का प्रतीक है। हमारी टीम स्थानीय सांस्कृतिक संवेदनाओं, क्षेत्रीय देवनागरी टाइपोग्राफी और आधुनिक मिनिमलिस्ट डिजाइन का अद्भुत सामंजस्य बनाती है। हम बिना किसी अतिशयोक्ति के आपके विजन को जनता की भाषा और नजरिए में ढालते हैं।',
      en: 'In public communication, visual craft is not mere decoration; it is the visual bedrock of institutional trust and clarity. Our design studio combines deep regional sensibilities with disciplined Devanagari typography and contemporary international aesthetics. We ensure your constituency and stakeholders receive a clear, dignified, and memorable message across every touchpoint.',
    },
    processSteps: [
      {
        title: { hi: '1. विजुअल ऑडिट व रणनीति', en: '1. Visual Audit & Strategy' },
        desc: {
          hi: 'मौजूदा सामग्री का विश्लेषण, लक्षित जनसांख्यिकी और रंग-सिद्धांत निर्धारण।',
          en: 'Audit of past materials, constituency demographic analysis, and color system formulation.',
        },
      },
      {
        title: { hi: '2. टाइपोग्राफी व स्टाइल गाइड', en: '2. Typography & Style Master' },
        desc: {
          hi: 'स्पष्ट देवनागरी फॉन्ट संरचना और आधिकारिक लेआउट टेम्पलेट्स का निर्माण।',
          en: 'Devanagari font hierarchy definition and standardized layout template creation.',
        },
      },
      {
        title: { hi: '3. क्रिएटिव निष्पादन', en: '3. Daily Creative Execution' },
        desc: {
          hi: 'त्वरित गति से समसामयिक मुद्दों व प्राथमिकताओं पर आधारित डिजाइन तैयार करना।',
          en: 'Rapid-turnaround daily creatives aligned with news cycles and key priorities.',
        },
      },
      {
        title: { hi: '4. प्री-प्रेस व डिजिटल डिलीवरी', en: '4. Pre-press & Multi-format Delivery' },
        desc: {
          hi: 'प्रिंट के लिए CMYK रंग परिशुद्धता तथा सोशल नेटवर्क के लिए अनुकूलित फाइल्स।',
          en: 'CMYK print-ready vector files and optimized WebP/PNG formats for fast mobile loading.',
        },
      },
    ],
    toolsCapabilities: [
      'Adobe Photoshop & Illustrator',
      'Figma Collaborative Workspace',
      'Custom Devanagari Font Calibration',
      'Pantone & CMYK Print Profiling',
      'Archival Quality Vector Asset Management',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या आप तत्काल प्रेस विज्ञप्ति या ब्रेकिंग न्यूज पोस्टर्स प्रदान करते हैं?',
          en: 'Do you offer immediate turnaround for breaking announcements or press creatives?',
        },
        answer: {
          hi: 'हाँ, सक्रिय अभियानों और प्रतिनिधियों के लिए हमारी डेडिकेटेड डेस्क 30 से 45 मिनट के भीतर आपातकालीन व समसामयिक पोस्टर्स तैयार करती है।',
          en: 'Yes, for ongoing retainer campaigns, our emergency desk provides rapid 30 to 45-minute turnaround for urgent public statements.',
        },
      },
      {
        question: {
          hi: 'क्या सभी डिजाइनों के लिए सोर्स फाइल्स (Open Files) प्रदान की जाती हैं?',
          en: 'Are open editable source files provided for all assets?',
        },
        answer: {
          hi: 'अनुबंध की शर्तों के अनुसार हम पूर्ण रूप से लेयर्ड सोर्स फाइल्स (PSD/AI/Figma) और उच्च-गुणवत्ता एक्सपोर्ट्स क्लाइंट आर्काइव में सौंपते हैं।',
          en: 'Subject to campaign terms, layered source files (PSD/AI/Figma) along with master print PDFs are archived and delivered.',
        },
      },
    ],
  },
  {
    id: 'video-production-editing',
    slug: 'video-production-editing',
    title: {
      hi: 'वीडियो निर्माण एवं संपादन',
      en: 'Video Production & Editing',
    },
    shortPromise: {
      hi: 'सिनेमैटिक डॉक्यूमेंट्री, भावनात्मक साक्षात्कार और सटीक वायरल रील्स।',
      en: 'Cinematic documentary films, authentic interviews, and narrative reels.',
    },
    summary: {
      hi: 'क्षेत्रीय यात्राएं, ग्राउंड इंटरव्यू, अभियान डॉक्यूमेंट्रीज, सोशल मीडिया रील्स एवं यूट्यूब सीरीज।',
      en: 'Field documentary coverage, constituency town halls, policy explainers, reels, and video narratives.',
    },
    isCore: true,
    isPopular: false,
    iconName: 'Video',
    deliverables: {
      hi: [
        'वर्टिकल शॉर्ट-फॉर्म वीडियो (Instagram Reels, YouTube Shorts, WhatsApp Status)',
        'दीर्घकालिक डॉक्यूमेंट्री एवं विजन फिल्में (5 से 15 मिनट की विस्तृत प्रस्तुति)',
        'जन-संवाद एवं साक्षात्कार वीडियो (मल्टी-कैमरा 4K सेटअप, प्रो ऑडियो)',
        'लाइव इवेंट कवरेज एवं तत्काल हाइलाइट पैकेजिंग',
      ],
      en: [
        'Vertical short-form packages (Instagram Reels, YouTube Shorts, WhatsApp Status)',
        'Long-form constituency documentaries and policy vision films (5 to 15 min)',
        'Multi-camera 4K interviews and public townhall discourse recordings',
        'Same-day event highlight edits with professional color grading and subtitles',
      ],
    },
    overview: {
      hi: 'आज के डिजिटल युग में वीडियो सबसे प्रभावशाली माध्यम है। हमारा वीडियो प्रोडक्शन यूनिट लखनऊ और संपूर्ण उत्तर प्रदेश में फील्ड प्रोडक्शन और पोस्ट-प्रोडक्शन की पूरी श्रृंखला संभालता है। हमारे पास सिनेमाई कैमरे, ड्रोन व गिम्बल स्टेबलाइजर्स, स्टूडियो माइक और अत्याधुनिक 4K संपादन सुविधाएं हैं। हम वीडियो में बिना किसी भ्रामक संपादन के सच्चाई, संवेदना और नेतृत्व की स्पष्ट छवि प्रस्तुत करते हैं।',
      en: 'Video is the primary currency of public engagement. Our production crew combines high-end field cinematography across Uttar Pradesh with an agile in-house post-production setup in Lucknow. From multi-cam dialogue recording to color science tuned for Indian lighting conditions, we deliver broadcast-grade films with authentic storytelling.',
    },
    processSteps: [
      {
        title: { hi: '1. पटकथा व कॉन्सेप्ट', en: '1. Scripting & Treatment' },
        desc: {
          hi: 'विषय का अनुसंधान, संदेश का उद्देश्य और प्रासंगिक क्षेत्रीय भाषा में स्क्रिप्ट लेखन।',
          en: 'Contextual field research, narrative arc planning, and bilingual vernacular scripting.',
        },
      },
      {
        title: { hi: '2. ऑन-लोकेशन शूट', en: '2. Field Cinematography' },
        desc: {
          hi: '4K मल्टी-कैमरा, ड्रोन एरियल शॉट्स एवं वायरलेस लैवेलियर ऑडियो रिकॉर्डिंग।',
          en: '4K multi-cam capture, drone cinematography, and wireless lavalier sound recording.',
        },
      },
      {
        title: { hi: '3. पोस्ट-प्रोडक्शन व रंग संयोजन', en: '3. Editing & Color Grading' },
        desc: {
          hi: 'सिनेमैटिक पेसिंग, ऑथेंटिक बैकग्राउंड स्कोर एवं पेशेवर कलर ग्रेडिंग।',
          en: 'Paced narrative assembly, licensed soundtrack mixing, and color balancing.',
        },
      },
      {
        title: { hi: '4. मल्टी-प्लेटफॉर्म डिलीवरी', en: '4. Format Optimization' },
        desc: {
          hi: '16:9, 9:16 और 1:1 आस्पेक्ट रेशियो में सबटाइटल सहित मास्टर एक्सपोर्ट्स।',
          en: '9:16 reels, 16:9 horizontal, and square encodes with embedded Hindi subtitles.',
        },
      },
    ],
    toolsCapabilities: [
      'Sony FX6 / FX3 Cinema Line & 4K G Master Optics',
      'DJI Ronin Stabilizers & DJI Mavic Air Aerial Systems',
      'Sennheiser MKH & Rode Wireless Pro Audio Capture',
      'DaVinci Resolve Studio & Premiere Pro Color Pipeline',
      'Hardware-calibrated Broadcast Color Grading Monitors',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या वीडियो में बैकग्राउंड म्यूजिक का कॉपीराइट सुरक्षित रहता है?',
          en: 'Is all background audio fully licensed and cleared for commercial broadcast?',
        },
        answer: {
          hi: 'जी हाँ, हम केवल वैध लाइसेंस प्राप्त व्यावसायिक संगीत ट्रैक्स का उपयोग करते हैं जिससे किसी भी सोशल मीडिया अथवा टीवी चैनल पर कॉपीराइट स्ट्राइक का कोई जोखिम नहीं रहता।',
          en: 'Yes, 100% of background tracks and sound effects are licensed from commercial music libraries, eliminating any takedown risks.',
        },
      },
    ],
  },
  {
    id: 'digital-ad-marketing',
    slug: 'digital-ad-marketing',
    title: {
      hi: 'डिजिटल विज्ञापन एवं परफॉर्मेंस मार्केटिंग',
      en: 'Digital Ad Marketing & Distribution',
    },
    shortPromise: {
      hi: 'पिन-पॉइंट विधानसभा/वार्ड स्तर की ऑडियंस टारगेटिंग, सख्त नीति अनुपालन एवं पारदर्शी रिपोर्टिंग।',
      en: 'Constituency & ward-level geo-targeting, strict compliance, and transparent reporting.',
    },
    summary: {
      hi: 'Meta (FB/Insta), Google, YouTube विज्ञापनों का प्रबंधन। विज्ञापन बजट सीधे क्लाइंट के खाते से भुगतान।',
      en: 'Precision Meta Ads, Google Ads, YouTube Video Ads, and opt-in WhatsApp broadcasts. Direct client-paid ad spends.',
    },
    isCore: true,
    isPopular: true,
    iconName: 'TrendingUp',
    deliverables: {
      hi: [
        'विधानसभा क्षेत्र, वार्ड, जिला स्तर पर सटीक पिन-कोड आधारित ऑडियंस मैपिंग',
        'Meta Ad Account और Google Ads पर राजनीतिक/सामाजिक विज्ञापन पहचान सत्यापन (Identity Verification) में तकनीकी सहायता',
        'A/B टेस्टिंग: विभिन्न देवनागरी हेडलाइन्स, वीडियो थंबनेल्स और हुक का तुलनात्मक परीक्षण',
        'साप्ताहिक एवं मासिक विस्तृत प्रदर्शन डैशबोर्ड (इंप्रेशन्स, रीच, सीपीसी, क्लिक्स, वीडियो व्यूज)',
        'पारदर्शी बिलिंग: विज्ञापन बजट सीधे प्लेटफॉर्म को क्लाइंट के आधिकारिक खाते से भुगतान',
      ],
      en: [
        'Constituency, district, and pincode-level micro geo-targeting parameter setups',
        'Technical guidance for political/social issue ad disclaimer identity verification on Meta and Google',
        'Systematic A/B creative split testing across Devanagari hooks and formats',
        'Granular weekly and monthly audit reports (Impressions, Reach, Frequency, CPC, VTR)',
        '100% Transparent Billing: Client pays media spends directly to advertising networks',
      ],
    },
    overview: {
      hi: 'डिजिटल विज्ञापन अभियान का सबसे शक्तिशाली और संवेदनशील घटक है। हम अनुमान पर नहीं, बल्कि सटीक डेटा, भौगोलिक सीमाओं (Constituency Boundaries) और जनसांख्यिकी पर कार्य करते हैं। लखनऊ, वाराणसी, गोरखपुर, प्रयागराज से लेकर पश्चिमांचल और बुंदेलखंड तक हम हर क्षेत्र की स्थानीय बोलियों और प्राथमिकताओं के अनुरूप डिजिटल कैंपेन संचालित करते हैं। हम विज्ञापन नीतियों (Meta Ad Library & Google Political Advertising Policy) का शत-प्रतिशत पालन सुनिश्चित करते हैं।',
      en: 'Digital distribution is the engine that transforms compelling creative into measured public impact. We operate with strict adherence to platform transparency standards, constituency boundary geo-fencing, and demographic cohort matching. Ad spend is maintained completely transparently: clients retain direct ownership and payment control of their platform ad accounts while our agency manages campaign architecture, daily optimization, and data governance.',
    },
    processSteps: [
      {
        title: { hi: '1. अकाउंट व डिस्क्लेमर ऑडिट', en: '1. Account & Identity Clearance' },
        desc: {
          hi: 'Meta और Google पर "Paid for by / प्रायोजक" डिस्क्लेमर व आईडी सत्यापन पूर्ण करना।',
          en: 'Assisting client with platform political ad disclaimer registration and KYC clearances.',
        },
      },
      {
        title: { hi: '2. भौगोलिक व जनसांख्यिकीय मैपिंग', en: '2. Geo-fencing & Cohort Setup' },
        desc: {
          hi: 'संबद्ध विधानसभा, नगर निगम वार्ड या संसदीय क्षेत्र के अनुसार डिजिटल रेडियस सेट करना।',
          en: 'Boundary parameter definition matching official assembly/ward electoral contours.',
        },
      },
      {
        title: { hi: '3. A/B क्रिएटिव लॉन्च', en: '3. Creative Staging & A/B Testing' },
        desc: {
          hi: 'विभिन्न संदेशों व वीडियो फॉर्मेट्स को छोटी ऑडियंस में टेस्ट कर सबसे प्रभावी की पहचान।',
          en: 'Controlled flight tests to identify optimal engagement before scale-up.',
        },
      },
      {
        title: { hi: '4. दैनिक निगरानी व अनुकूलन', en: '4. Daily Pacing & Bid Optimization' },
        desc: {
          hi: 'फ्रीक्वेंसी कैपिंग, सीपीसी नियंत्रण और अनावश्यक खर्च की तुरंत रोकथाम।',
          en: 'Algorithmic bid adjustments to avoid audience fatigue and maximize unique reach.',
        },
      },
      {
        title: { hi: '5. स्वतंत्र ऑडिट व रिपोर्ट', en: '5. Audit & Performance Debrief' },
        desc: {
          hi: 'पारदर्शी मेट्रिक्स, प्लेटफॉर्म इनवॉइस और ऑडियंस रुझानों की साप्ताहिक रिपोर्ट।',
          en: 'Comprehensive weekly PDF reports with official platform billing statements.',
        },
      },
    ],
    toolsCapabilities: [
      'Meta Business Suite & Ads Manager Architecture',
      'Google Ads & Display & Video 360 (DV360)',
      'Meta Ad Library & Google Transparency Archive Auditing',
      'Official WhatsApp Business API Integration',
      'Looker Studio Custom Campaign Dashboards',
    ],
    digitalAdDetails: {
      platforms: [
        {
          name: 'Meta Ads (Facebook & Instagram)',
          icon: 'Share2',
          hiDesc: 'फेसबुक और इंस्टाग्राम पर उत्तर प्रदेश के युवाओं, स्थानीय नागरिकों और प्रबुद्ध वर्ग तक प्रभावी पहुंच।',
          enDesc: 'Targeted feed ads, reels sponsorship, and regional story placements across Facebook & Instagram.',
        },
        {
          name: 'Google Ads & YouTube In-Stream',
          icon: 'PlayCircle',
          hiDesc: 'यूट्यूब पर गैर-स्किप करने योग्य या बंपर वीडियो विज्ञापन और क्षेत्रीय सर्च क्वेरीज पर उपस्थिति।',
          enDesc: 'YouTube pre-roll video ads, bumper ads, and local discovery campaigns across targeted geographies.',
        },
        {
          name: 'WhatsApp Broadcast Campaigns (Opt-in)',
          icon: 'MessageSquare',
          hiDesc: 'आधिकारिक बिजनेस एपीआई के माध्यम से सहमति-प्राप्त (Opt-in) कार्यकर्ताओं व समर्थकों तक सीधा संवाद।',
          enDesc: 'Compliance-approved official WhatsApp Business API broadcasts for registered volunteer networks.',
        },
      ],
      targetingOptions: [
        {
          title: { hi: 'सटीक भौगोलिक परिधि (Geo-Radius)', en: 'Constituency & Pin-Code Fencing' },
          desc: {
            hi: 'केवल संबंधित विधानसभा या नगर क्षेत्र के भीतर विज्ञापन चलाना, बाहरी क्षेत्रों में बजट की बर्बादी रोकना।',
            en: 'Strict boundary limits ensuring ad budgets are exclusively spent within relevant electoral territories.',
          },
        },
        {
          title: { hi: 'आयु व जनसांख्यिकीय विभाजन', en: 'Age & Demographic Stratification' },
          desc: {
            hi: 'युवा मतदाता (18-25), पेशेवर (26-45), एवं वरिष्ठ नागरिकों के लिए पृथक प्रासंगिक संदेश।',
            en: 'Tailored message variants addressed specifically to youth, farmers, traders, or civic groups.',
          },
        },
        {
          title: { hi: 'रुचि एवं क्षेत्रीय भाषा प्राथमिकता', en: 'Language & Topical Affinity' },
          desc: {
            hi: 'हिंदी, अवधी, भोजपुरी और बुंदेलखंडी भाषा प्राथमिकताओं के अनुसार सामग्री वितरण।',
            en: 'Optimization based on Devanagari preference and sub-regional cultural affinities.',
          },
        },
      ],
      creativeFormats: [
        { title: { hi: 'हाई-इंपैक्ट स्टैटिक पोस्टर्स', en: 'High-Impact Statics' }, specs: '1080x1350 (4:5) & 1080x1080 (1:1), crisp Devanagari copy' },
        { title: { hi: 'कथात्मक वीडियो रील्स', en: 'Sponsored Narrative Reels' }, specs: '1080x1920 (9:16), 15s to 60s, front-loaded hook with subtitles' },
        { title: { hi: 'मल्टी-कार्ड कैरोसेल', en: 'Multi-Card Theme Carousels' }, specs: 'Up to 10 slides detailing track-record points or manifesto pledges' },
        { title: { hi: 'यूट्यूब बंपर व प्री-रोल', en: 'YouTube 6s Bumper & 15s Non-skip' }, specs: 'High-retention 1080p horizontal video focused on a single key promise' },
      ],
      reportingMetrics: [
        { metric: 'Reach (पहुंच)', hiLabel: 'विशिष्ट व्यक्तियों की संख्या', enLabel: 'Unique Individuals', desc: 'Number of unique people who viewed your advertisement at least once.' },
        { metric: 'Impressions (प्रकाशन)', hiLabel: 'कुल बार विज्ञापन दिखाया गया', enLabel: 'Total Ad Displays', desc: 'Total volume of times the ad appeared on user screens.' },
        { metric: 'Frequency (आवृत्ति)', hiLabel: 'प्रति व्यक्ति औसत प्रदर्शन', enLabel: 'Avg Displays Per User', desc: 'Average number of times a single citizen saw your creative (optimal 2.5-4x).' },
        { metric: 'CPC / CPM', hiLabel: 'लागत प्रति क्लिक / प्रति हज़ार', enLabel: 'Cost Efficiency Metric', desc: 'Direct cost charged by the platform for 1,000 impressions or direct link interactions.' },
        { metric: 'VTR (वीडियो थ्रू रेट)', hiLabel: 'वीडियो पूरा देखने का प्रतिशत', enLabel: 'Video Completion Rate', desc: 'Percentage of viewers who watched the video beyond 50% and 100% mark.' },
      ],
      campaignRoadmap90Days: [
        { phase: 'Phase 1', weeks: 'सप्ताह 1-2', hiTitle: 'नींव व सत्यापन', enTitle: 'Foundations & Clearances', hiDesc: 'प्लेटफॉर्म आईडी डिस्क्लेमर अप्रूवल, पिक्सेल सेटअप एवं शुरुआती बेसलाइन टेस्ट।', enDesc: 'Platform political disclaimers, boundary mapping, and initial benchmark flights.' },
        { phase: 'Phase 2', weeks: 'सप्ताह 3-6', hiTitle: 'संदेश निर्माण व पहचान', enTitle: 'Awareness & Consideration', hiDesc: 'विजन वीडियो और मुख्य मुद्दों पर केंद्रित अभियानों का व्यापक क्षेत्रीय प्रसार।', enDesc: 'Core issue films and track-record proof-point distribution across key demographics.' },
        { phase: 'Phase 3', weeks: 'सप्ताह 7-10', hiTitle: 'सघन जुड़ाव व रीयल-टाइम रिस्पॉन्स', enTitle: 'Engagement & Narrative Defense', hiDesc: 'समसामयिक बहसों का त्वरित उत्तर, जनसंवाद हाइलाइट्स एवं कैरोसेल व्याख्यान।', enDesc: 'Daily rapid-response creatives, townhall highlights, and issue explainers.' },
        { phase: 'Phase 4', weeks: 'सप्ताह 11-12', hiTitle: 'अंतिम लामबंदी (Get Out The Vote)', enTitle: 'Mobilization & GOTV Push', hiDesc: 'मतदान दिवस से पूर्व सकारात्मक अपील, मतदान केंद्र जानकारी व सशक्त समापन।', enDesc: 'Positive closing appeals, booth awareness messages, and election eve clarity.' },
      ],
      adSpendNote: {
        hi: 'पारदर्शिता नीति: विज्ञापन मीडिया खर्च (Ad Spend) का भुगतान क्लाइंट द्वारा सीधे विज्ञापन प्लेटफॉर्म (Meta/Google) को किया जाता है। आधुनिक प्रचार प्रसार केवल रणनीति, तकनीकी प्रबंधन और क्रिएटिव प्रोडक्शन के लिए निर्धारित एजेंसी शुल्क (Management Fee) लेता है। कोई अप्रत्यक्ष मार्कअप या गुप्त मार्जिन नहीं लिया जाता।',
        en: 'Transparency Guarantee: Media spends are paid directly by the client to Meta/Google through their registered payment method. Aadhunik Prachar Prasar charges only a contracted management fee for creative production, campaign architecture, and day-to-day optimization. No hidden markups or margin inflations.',
      },
    },
    faqs: [
      {
        question: {
          hi: 'क्या आप चुनावों में जीत या निश्चित संख्या में वोटों की गारंटी देते हैं?',
          en: 'Do you guarantee electoral victory or specific vote tally counts?',
        },
        answer: {
          hi: 'नहीं। हम एक पेशेवर मीडिया और संचार कंपनी हैं। हम संदेश की गुणवत्ता, सही ऑडियंस तक तकनीकी वितरण और पारदर्शी रिपोर्टिंग की गारंटी देते हैं। मतदान जनता का लोकतांत्रिक अधिकार है और हम किसी भी अवास्तविक या भ्रामक वादे को नहीं करते।',
          en: 'No. We are a professional communications and media consultancy. We guarantee verified audience delivery, technical compliance, and creative excellence. Democratic voting decisions rest solely with citizens; we do not make speculative or misleading electoral outcome guarantees.',
        },
      },
      {
        question: {
          hi: 'Meta और Google पर राजनीतिक विज्ञापन चलाने के लिए क्या नियम हैं?',
          en: 'What are the compliance requirements for political advertising on Meta and Google?',
        },
        answer: {
          hi: 'दोनों प्लेटफॉर्म्स पर सरकारी पहचान पत्र सत्यापन और "Paid for by / द्वारा प्रायोजित" डिस्क्लेमर अनिवार्य है। हम इस संपूर्ण तकनीकी प्रक्रिया के प्रलेखन में सहायता करते हैं।',
          en: 'Both platforms mandate government ID verification and a public "Paid for by" disclaimer registered in the public Ad Library. We provide end-to-end technical documentation support.',
        },
      },
    ],
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: {
      hi: 'सोशल मीडिया प्रबंधन एवं संचालन',
      en: 'Social Media Management',
    },
    shortPromise: {
      hi: 'अनुशासित कंटेंट कैलेंडर, गरिमापूर्ण संचालन और निरंतर जन-संवाद।',
      en: 'Disciplined content calendars, dignified community moderation, and consistent public reach.',
    },
    summary: {
      hi: 'X (ट्विटर), फेसबुक, इंस्टाग्राम, लिंक्डइन एवं यूट्यूब चैनलों का संपूर्ण दैनिक संचालन।',
      en: 'Full management of official handles across X, Facebook, Instagram, LinkedIn, and YouTube.',
    },
    isCore: true,
    isPopular: false,
    iconName: 'Smartphone',
    deliverables: {
      hi: [
        'मासिक व साप्ताहिक सुनियोजित कंटेंट कैलेंडर (प्राथमिकताएं, कार्यक्रम, नीतियां)',
        'दैनिक पोस्टिंग, सटीक हैशटैग अनुसंधान और देवनागरी ड्राफ्टिंग',
        'कमेंट व इनबॉक्स मॉडरेशन (सभ्य संवाद बनाए रखना, दुर्भावनापूर्ण स्पैम फिल्टर करना)',
        'मासिक विस्तृत एनालिटिक्स रिपोर्ट (एंगेजमेंट रेट, फॉलोअर डेमोग्राफिक्स)',
      ],
      en: [
        'Weekly and monthly structured content calendar mapped to field activities',
        'Daily multichannel publishing with contextual Devanagari copy and hashtags',
        'Comment moderation and public grievance filtering protocols',
        'Monthly data audit tracking organic engagement, sentiment, and reach dynamics',
      ],
    },
    overview: {
      hi: 'जनप्रतिनिधि या संगठन का सोशल मीडिया हैंडल उनका डिजिटल कार्यालय होता है। यहाँ हर शब्द, हर तस्वीर और हर बयान का गहरा प्रभाव पड़ता है। हम सुनिश्चित करते हैं कि आपके सभी प्लेटफॉर्म्स पर भाषा मर्यादित, तथ्यपरक और प्रभावशाली रहे। हमारी टीम 24/7 अलर्ट रहकर संवेदनशील स्थितियों में त्वरित व संतुलित प्रतिक्रिया देने में सक्षम है।',
      en: 'An official public handle is a 24/7 digital secretariat. Every word and asset reflects directly on organizational stature. We manage official channels with institutional restraint, rapid fact-checking, and editorial rigor, ensuring constructive public engagement without partisan vulgarity.',
    },
    processSteps: [
      {
        title: { hi: '1. वॉयस व गाइडलाइन वर्कशॉप', en: '1. Editorial Voice Definition' },
        desc: {
          hi: 'भाषा शैली, वर्जित शब्द, और सार्वजनिक प्राथमिकताओं की स्पष्ट रूपरेखा।',
          en: 'Standardizing tone, vocabulary thresholds, and escalation pathways.',
        },
      },
      {
        title: { hi: '2. कैलेंडर शेड्यूलिंग', en: '2. Forward Calendar Structuring' },
        desc: {
          hi: 'आगामी कार्यक्रमों, ऐतिहासिक दिनों और मुद्दों का पूर्व-नियोजन।',
          en: 'Proactive scheduling around public tours, commemorative dates, and key announcements.',
        },
      },
      {
        title: { hi: '3. दैनिक सक्रियता व मॉडरेशन', en: '3. Real-time Curation' },
        desc: {
          hi: 'दैनिक गतिविधियों की लाइव कवरेज और शालीन सार्वजनिक वार्तालाप।',
          en: 'Active posting during on-ground events and civil comment response protocol.',
        },
      },
      {
        title: { hi: '4. मासिक समीक्षा', en: '4. Executive Reporting' },
        desc: {
          hi: 'फॉलोअर वृद्धि और जनरुझानों की विस्तृत विश्लेषणात्मक समीक्षा।',
          en: 'Monthly executive debrief detailing reach quality and sentiment indicators.',
        },
      },
    ],
    toolsCapabilities: [
      'Enterprise Scheduling & Governance Platforms',
      'Sentiment Analysis & Crisis Alert Trackers',
      'Verified Channel Security & 2FA Enforcement',
      'Custom Devanagari Copywriting Frameworks',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या पोस्ट करने से पहले हमारी सहमति ली जाती है?',
          en: 'Is pre-publication approval required for scheduled posts?',
        },
        answer: {
          hi: 'हाँ, एक सुरक्षित अप्रूवल चैनल के माध्यम से आपके मनोनीत प्रतिनिधि द्वारा हरी झंडी मिलने के बाद ही कोई भी सामग्री सार्वजनिक की जाती है।',
          en: 'Yes, no content goes live without explicit sign-off from the client’s designated communication liaison via our approval workflow.',
        },
      },
    ],
  },
  {
    id: 'print-outdoor-advertising',
    slug: 'print-outdoor-advertising',
    title: {
      hi: 'प्रिंट एवं आउटडोर विज्ञापन',
      en: 'Print & Outdoor Advertising',
    },
    shortPromise: {
      hi: 'हाई-विजिबिलिटी होर्डिंग्स, प्रवेश द्वार ब्रांडिंग और टिकाऊ ऑन-ग्राउंड प्रचार।',
      en: 'High-visibility hoardings, rally backdrops, and durable on-ground publicity collaterals.',
    },
    summary: {
      hi: 'प्राइम लोकेशन होर्डिंग्स, यूनिपोल, रैली स्टेज बैकड्रॉप्स, स्टैंडीज और प्रचार वाहन ब्रांडिंग।',
      en: 'Strategic unipoles, highway hoardings, rally stage set branding, standees, and fleet wrapping.',
    },
    isCore: true,
    isPopular: false,
    iconName: 'Maximize2',
    deliverables: {
      hi: [
        'प्राइम लोकेशन होर्डिंग एवं यूनिपोल डिजाइन (लखनऊ एवं उत्तर प्रदेश के प्रमुख शहर)',
        'विशाल जनसभा व सम्मेलन मंच बैकड्रॉप्स, प्रवेश द्वार एवं पोडियम ब्रांडिंग',
        'प्रचार वाहन (प्रचार रथ) संपूर्ण विनाइल रैपिंग डिजाइन एवं सुपरविजन',
        'स्थानीय प्रिंटर्स के लिए सटीक डाई-लाइन, CMYK कलर प्रूफ्स और इंस्टॉलेशन ऑडिट',
      ],
      en: [
        'Strategic arterial highway and urban junction hoarding layout architecture',
        'Large-format rally stage backdrops, entry gate fascias, and podium fascias',
        'Mobile campaign van (Prachar Rath) comprehensive vinyl wrap engineering',
        'Pre-press CMYK proofing, structural dielines, and on-ground installation audits',
      ],
    },
    overview: {
      hi: 'डिजिटल के युग में भी जमीनी आउटडोर विज्ञापन की ताकत बेमिसाल है। उत्तर प्रदेश की सड़कों, चौराहों और जनसभाओं में एक भव्य और सुरुचिपूर्ण होर्डिंग या मंच बैकड्रॉप सीधे जनमानस में सशक्त उपस्थिति दर्ज कराता है। हम लेआउट से लेकर प्रिंटिंग पर्यवेक्षण तक यह सुनिश्चित करते हैं कि दूर से भी पठनीयता और रंग की चमक सर्वोच्च स्तर की रहे।',
      en: 'Outdoor visibility remains the undisputed anchor of physical public authority across Uttar Pradesh. A strategically positioned hoarding at a busy junction or an immaculately branded rally stage creates immediate territorial salience. We supervise layout typography, high-durability print materials, and safe on-site installation.',
    },
    processSteps: [
      {
        title: { hi: '1. साइट व दृष्टि-कोण सर्वे', en: '1. Sightline & Dimension Audit' },
        desc: {
          hi: 'होर्डिंग की दूरी, वाहन गति और पढ़ने के समय का वैज्ञानिक अध्ययन।',
          en: 'Site inspection analyzing traffic speed, viewing angles, and reading distance.',
        },
      },
      {
        title: { hi: '2. बोल्ड न्यूनतम डिजाइन', en: '2. High-Legibility Layout' },
        desc: {
          hi: 'कम से कम शब्दों में सबसे प्रभावशाली संदेश और विशाल स्पष्ट टाइपोग्राफी।',
          en: 'Strict copy economy with oversized Devanagari type visible from 100+ meters.',
        },
      },
      {
        title: { hi: '3. प्रिंट प्रूफिंग व मटेरियल चयन', en: '3. Substrate & CMYK Proofing' },
        desc: {
          hi: 'मौसम प्रतिरोधी फ्लेक्स, बैकलाइट या विनाइल फैब्रिक का चुनाव।',
          en: 'Selection of weather-resistant UV inks, heavy GSM flex, or tension fabric.',
        },
      },
      {
        title: { hi: '4. स्थापना व गुणवत्ता जांच', en: '4. Installation & Compliance' },
        desc: {
          hi: 'नगर निगम नियमों के अनुरूप स्थापना और जियो-टैग्ड फोटोग्राफिक रिपोर्टिंग।',
          en: 'Civic permission adherence verification and geotagged photographic sign-off.',
        },
      },
    ],
    toolsCapabilities: [
      'Large Format Vector Layout Engineering (Illustrator)',
      'Substrate Material Testing (Frontlit, Backlit, Mesh Vinyl)',
      'High-Resolution Gigapixel Image Processing',
      'Municipal Permission & Structural Safety Compliance Checklist',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या आप होर्डिंग साइट्स की बुकिंग और नगर निगम अनुमति में सहायता करते हैं?',
          en: 'Do you assist with hoarding site reservations and municipal permissions?',
        },
        answer: {
          hi: 'हम अधिकृत आउटडोर मीडिया वेंडर्स और संबंधित प्राधिकरणों के साथ समन्वय कर वैधानिक दिशानिर्देशों के अनुरूप साइट प्लानिंग में पूर्ण सहयोग देते हैं।',
          en: 'We coordinate with licensed outdoor media concessionaires and local municipal authorities to facilitate fully compliant space deployment.',
        },
      },
    ],
  },
  {
    id: 'photography-event-coverage',
    slug: 'photography-event-coverage',
    title: {
      hi: 'फोटोग्राफी एवं इवेंट कवरेज',
      en: 'Photography & Event Coverage',
    },
    shortPromise: {
      hi: 'सार्वजनिक जनसभाओं, दौरों और सम्मेलनों का उच्च-रिज़ॉल्यूशन सजीव दस्तावेजीकरण।',
      en: 'High-resolution candid documentation of public tours, rallies, and conventions.',
    },
    summary: {
      hi: 'फील्ड विजिट्स, जनसुनवाई, प्रेस वार्ता और प्रतिनिधिमंडल बैठकों की प्रो फोटोग्राफी।',
      en: 'Professional on-ground photojournalism capturing public interactions and official delegations.',
    },
    isCore: false,
    iconName: 'Camera',
    deliverables: {
      hi: [
        'ऑन-द-गो लाइव फोटो ट्रांसमिशन (सोशल मीडिया टीम के लिए 15 मिनट में चयनित तस्वीरें)',
        'हाई-रिज़ॉल्यूशन प्रेस-रेडी फोटो बैंक (अखबारों व डिजिटल पोर्टल्स के लिए)',
        'आधिकारिक पोर्ट्रेट एवं आधिकारिक प्रोफाइल शूट (स्टूडियो अथवा फील्ड में)',
        'इवेंट के उपरांत संपूर्ण आर्काइवल डिजिटल लाइब्रेरी',
      ],
      en: [
        'Live-wire on-ground photo sync (edited selects delivered within 15 minutes for real-time posts)',
        'High-resolution press-ready photo batches formatted for leading regional dailies',
        'Official institutional portraits in mobile studio or field environments',
        'Structured archival cloud vaults with searchable metadata and event tagging',
      ],
    },
    overview: {
      hi: 'सार्वजनिक आयोजनों में सबसे महत्वपूर्ण क्षण केवल कुछ पलों के लिए घटित होते हैं। हमारे अनुभवी फोटोपत्रकार जनसभा की विशालता से लेकर एक आम नागरिक के चेहरे के आत्मीय भावों तक को कैमरे में संजोते हैं। हम हाई-स्पीड वायरलेस ट्रांसफर से ऑन-फील्ड शूट करते ही डेस्क पर फोटो पहुंचाते हैं ताकि सोशल मीडिया पर आपका अपडेट सबसे पहले पहुंचे।',
      en: 'Evolving public moments demand seasoned documentary reflexes. Our photojournalism team captures both the panoramic majesty of mass gatherings and the intimate gravity of constituent dialogue. Leveraging wireless camera tethering, field selects reach your social publishing desk within minutes of capture.',
    },
    processSteps: [
      {
        title: { hi: '1. इवेंट रेकी व शेड्यूल मैपिंग', en: '1. Venue Recce & Schedule Mapping' },
        desc: {
          hi: 'स्टेज की रोशनी, प्रेस दीर्घा और प्रमुख मोमेंट्स की पूर्व-योजना।',
          en: 'Lighting condition assessment, press bay alignment, and VIP transit pathing.',
        },
      },
      {
        title: { hi: '2. मल्टी-एंगल लाइव शूट', en: '2. Multi-angle Capture' },
        desc: {
          hi: 'टेलीफोटो, वाइड-एंगल और कैंडिडेट लेंस का सामंजस्यपूर्ण उपयोग।',
          en: 'Balanced use of telephoto candid lenses and wide establishing perspectives.',
        },
      },
      {
        title: { hi: '3. त्वरित संपादन व ट्रांसमिशन', en: '3. Rapid Curation & Ingest' },
        desc: {
          hi: 'मौके पर ही कलर बैलेंस और प्रेस को तत्काल वितरण योग्य पैकेज।',
          en: 'Color balancing on location and immediate distribution to media liaisons.',
        },
      },
      {
        title: { hi: '4. विस्तृत आर्काइविंग', en: '4. Systematic Archival' },
        desc: {
          hi: 'स्थान, दिनांक और विषय के अनुसार व्यवस्थित डिजिटल लाइब्रेरी।',
          en: 'Date, location, and topic-indexed cloud repository for future collateral use.',
        },
      },
    ],
    toolsCapabilities: [
      'Dual Slot Full-Frame Cameras (Sony Alpha / Canon EOS R)',
      'Fast F/2.8 Prime & Telephoto Optical Glass',
      'Location Mobile Tethering & 5G Hotspot Ingest',
      'Adobe Lightroom Classic Color Profiling',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या आपकी टीम उत्तर प्रदेश के ग्रामीण जिलों में यात्रा कर सकती है?',
          en: 'Is the crew available for travel to rural and remote districts across Uttar Pradesh?',
        },
        answer: {
          hi: 'हाँ, हमारी टीमें लखनऊ मुख्यालय से पूरे उत्तर प्रदेश (पूर्वांचल, मध्यांचल, पश्चिमांचल व बुंदेलखंड) में ऑन-कॉल फील्ड कवरेज के लिए तत्पर रहती हैं।',
          en: 'Yes, our mobile crews travel from Lucknow across all 75 districts of Uttar Pradesh on short notice.',
        },
      },
    ],
  },
  {
    id: 'pr-media-coordination',
    slug: 'pr-media-coordination',
    title: {
      hi: 'पीआर एवं मीडिया समन्वय',
      en: 'PR & Media Coordination',
    },
    shortPromise: {
      hi: 'तथ्यपरक प्रेस विज्ञप्तियां, सुव्यवस्थित प्रेस वार्ताएं और पत्रकार समन्वय।',
      en: 'Factual press releases, structured press conferences, and media liaison support.',
    },
    summary: {
      hi: 'प्रिंट और इलेक्ट्रॉनिक मीडिया के लिए संतुलित प्रेस नोट्स, बाइट्स और मीडिया प्रबंधन।',
      en: 'Clear Devanagari press briefing kits, byte coordination, and institutional media relations.',
    },
    isCore: false,
    iconName: 'Megaphone',
    deliverables: {
      hi: [
        'शुद्ध, सटीक देवनागरी में तैयार प्रेस विज्ञप्तियां (Press Releases) एवं फैक्टशीट्स',
        'प्रेस वार्ताओं का सुचारु आयोजन, मीडिया किट वितरण एवं पत्रकार आमंत्रण समन्वय',
        'मीडिया क्लिपिंग मॉनिटरिंग (प्रिंट एवं प्रमुख टीवी चैनलों की दैनिक समाचार कवरेज रिपोर्ट)',
        'आपातकालीन संचार व भ्रामक खबरों का आधिकारिक तथ्यात्मक खंडन ड्राफ्टिंग',
      ],
      en: [
        'Factual, well-crafted Devanagari press releases and event backgrounders',
        'Press conference staging, media accreditation kits, and journalist liaison',
        'Daily morning media clippings report (regional print editions and satellite bulletins)',
        'Crisis communication rebuttals and factual rejoinder drafting support',
      ],
    },
    overview: {
      hi: 'मीडिया के साथ संबंध पारदर्शिता, सत्यता और पारस्परिक सम्मान पर आधारित होते हैं। हम किसी भी भ्रामक प्रचार या सनसनीखेज दावों से दूर रहकर आपके वास्तविक कार्यों, जनहितैषी नीतियों और विकास योजनाओं को मीडिया जगत तक व्यवस्थित रूप से पहुंचाते हैं। लखनऊ के प्रमुख राज्य प्रेस प्रतिनिधियों से लेकर जिला मुख्यालयों तक हम सुचारु संवाद स्थापित करते हैं।',
      en: 'Credible media coordination is founded on veracity, punctuality, and journalistic respect. We abstain from unverified grandstanding, focusing instead on clearly documented public initiatives, policy positions, and community work. Our desk facilitates clean communication with state and regional bureau desks across Uttar Pradesh.',
    },
    processSteps: [
      {
        title: { hi: '1. तथ्य संकलन व ब्रीफिंग', en: '1. Fact Gathering & Briefing' },
        desc: {
          hi: 'विषय से संबंधित आधिकारिक आंकड़ों व बयानों की पुष्टि।',
          en: 'Cross-verifying official figures, dates, and direct quotes before drafting.',
        },
      },
      {
        title: { hi: '2. प्रेस रिलीज प्रारूप', en: '2. Devanagari Drafting' },
        desc: {
          hi: 'समाचार पत्रों की शैली में पठनीय व तथ्यात्मक हिंदी आलेख।',
          en: 'Crafting concise inverted-pyramid style releases adhering to newspaper copy standards.',
        },
      },
      {
        title: { hi: '3. वितरण व समन्वय', en: '3. Desk Dispatch & Follow-up' },
        desc: {
          hi: 'मान्यता प्राप्त संवाददाताओं तक समय पर सूचना का प्रेषण।',
          en: 'Direct dispatch to accredited beat reporters, bureau chiefs, and photo desks.',
        },
      },
      {
        title: { hi: '4. कवरेज ऑडिट', en: '4. Print & Digital Audit' },
        desc: {
          hi: 'अगली सुबह प्रकाशित समाचारों का संकलन और सारांश।',
          en: 'Next-morning publication tracking, clipping assembly, and archive delivery.',
        },
      },
    ],
    toolsCapabilities: [
      'Comprehensive Uttar Pradesh Media Bureau Directory',
      'Standard Inverted-Pyramid Press Release Writing Standards',
      'Electronic News Byte Audio Synchronization',
      'OCR-enabled Print News Clipping Compilation Systems',
    ],
    faqs: [
      {
        question: {
          hi: 'क्या आप समाचार पत्रों में पेड न्यूज (सशुल्क समाचार) प्रकाशित करवाते हैं?',
          en: 'Do you engage in paid news placements?',
        },
        answer: {
          hi: 'कदापि नहीं। आधुनिक प्रचार प्रसार पेड न्यूज के सख्त खिलाफ है और भारतीय प्रेस परिषद (PCI) के नैतिक नियमों का पालन करता है। हम केवल वास्तविक जनहितैषी समाचारों को मीडिया के सम्मुख प्रस्तुत करते हैं।',
          en: 'Absolutely not. We maintain a zero-tolerance policy against paid news, strictly complying with Press Council of India standards. We facilitate organic news access based on legitimate public interest.',
        },
      },
    ],
  },
];
