export interface InsightItem {
  id: string;
  slug: string;
  title: {
    hi: string;
    en: string;
  };
  summary: {
    hi: string;
    en: string;
  };
  category: {
    hi: string;
    en: string;
  };
  readTime: {
    hi: string;
    en: string;
  };
  publishDate: string;
  author: {
    name: string;
    role: { hi: string; en: string };
  };
  coverImage: string;
  content: {
    hi: string;
    en: string;
  };
}

export const insightsData: InsightItem[] = [
  {
    id: 'insight-1-devanagari-typography-guide',
    slug: 'principles-of-devanagari-typography-in-public-communication',
    title: {
      hi: 'सार्वजनिक संचार में देवनागरी टाइपोग्राफी के मौलिक सिद्धांत',
      en: 'Foundations of Devanagari Typography in Public Communication',
    },
    summary: {
      hi: 'होर्डिंग्स, पोस्टर्स और मोबाइल स्क्रीन्स पर देवनागरी मात्राओं की पठनीयता, लाइन-हाइट और फॉन्ट चयन के व्यावहारिक नियम।',
      en: 'Essential guidelines on matra clearance, baseline balance, and font weights for high-legibility Hindi messaging.',
    },
    category: {
      hi: 'डिजाइन व विजुअल आइडेंटिटी',
      en: 'Design & Visual Identity',
    },
    readTime: {
      hi: '5 मिनट पढ़ें',
      en: '5 min read',
    },
    publishDate: '2025-01-15',
    author: {
      name: 'आधुनिक प्रचार प्रसार रिसर्च डेस्क',
      role: { hi: 'क्रिएटिव स्टूडियो', en: 'Creative Studio' },
    },
    coverImage: '/images/insights/typography.jpg',
    content: {
      hi: `
### देवनागरी लिपि का सौंदर्य और तकनीकी संवेदनशीलता

सार्वजनिक संचार और राजनीतिक विज्ञापनों में देवनागरी टाइपोग्राफी का चयन केवल एक फॉन्ट चुनने तक सीमित नहीं है। लैटिन (अंग्रेजी) अक्षरों की तुलना में देवनागरी की संरचना शिरोरेखा (Top line), ऊपरी मात्राओं (जैसे ऐ, ौ, ं) और निचली मात्राओं (जैसे ु, ू, ृ) पर आधारित होती है। 

#### 1. लाइन-हाइट (Line Height) का स्वर्णिम नियम
जब हम डिजिटल स्क्रीन या प्रिंट पोस्टर्स पर हिंदी पाठ लिखते हैं, तो सामान्य अंग्रेजी डिफ़ॉल्ट लाइन-हाइट (1.2 से 1.4) मात्राओं को काट देती है। देवनागरी के लिए कम से कम 1.6 से 1.8 लाइन-हाइट का प्रयोग अनिवार्य है ताकि ऊपर और नीचे की मात्राएं स्वतंत्र रूप से स्पष्ट दिखाई दें।

#### 2. लेटर-स्पेसिंग (Letter Spacing) की गलती से बचें
देवनागरी में अक्षरों की शिरोरेखा परस्पर जुड़कर शब्द बनाती है। यदि आप लेटर-स्पेसिंग (ट्रैकिंग) बढ़ा देंगे, तो शिरोरेखा टूट जाएगी और शब्द खंडित प्रतीत होगा। देवनागरी में कभी भी पॉजिटिव लेटर-स्पेसिंग नहीं देनी चाहिए।

#### 3. दूर से पठनीयता (The 50-Meter Hoarding Test)
सड़क किनारे लगे यूनिपोल या होर्डिंग पर औसत वाहन चालक केवल 2 से 3 सेकंड की दृष्टि डालता है। इसलिए:
- अत्यधिक घुमावदार या कैलिग्राफी फॉन्ट के बजाय सुगठित ग्रिड-आधारित संस-सेरिफ (जैसे Noto Sans Devanagari) का उपयोग करें।
- गहरे नेवी पृष्ठभूमि पर हल्का गोल्ड या सफेद रंग सर्वोच्च कंट्रास्ट प्रदान करता है।

सार्वजनिक संदेश की शक्ति उसकी सादगी और गरिमा में निहित होती है।
      `,
      en: `
### The Craft and Mechanics of Devanagari in Public Life

In public communication across Northern India, Devanagari typography is the visual voice of institutional authority. Unlike the Latin alphabet which sits predominantly on a baseline, Devanagari hangs from the continuous header stroke (Shirorekha) with ascenders and descenders (Matras).

#### 1. The Line-Height Imperative
Standard web and print templates configured for English default to a tight line-height of 1.2 to 1.4. In Devanagari, this clips vowel signs. Professional layouts must enforce a generous line-height of at least 1.6 to 1.8 to ensure pristine rendering of conjuncts.

#### 2. The Golden Rule: Avoid Positive Letter Spacing
Because Devanagari words are bound by the continuous Shirorekha, artificial letter-spacing (tracking) fractures the word boundary and destroys legibility. Never apply positive letter-spacing to Hindi body text.

#### 3. Outdoor Legibility (The 3-Second Rule)
On highway unipoles and junction hoardings, vehicular commuters process text within 3 seconds. Use disciplined, high-x-height sans-serif Devanagari fonts with bold weight contrast rather than decorative script styles.
      `,
    },
  },
  {
    id: 'insight-2-digital-ad-compliance-meta-google',
    slug: 'navigating-political-ad-compliance-meta-google',
    title: {
      hi: 'Meta और Google पर सामाजिक व राजनीतिक विज्ञापन नीति अनुपालन',
      en: 'Navigating Social & Political Ad Compliance on Meta and Google',
    },
    summary: {
      hi: 'पहचान सत्यापन (ID Verification), "Paid for by" डिस्क्लेमर, और पारदर्शिता लाइब्रेरी के अनिवार्य नियम।',
      en: 'A practical roadmap to ID clearance, disclaimer registration, and electoral advertising transparency protocols.',
    },
    category: {
      hi: 'डिजिटल विज्ञापन एवं नियम',
      en: 'Ad Compliance & Policy',
    },
    readTime: {
      hi: '7 मिनट पढ़ें',
      en: '7 min read',
    },
    publishDate: '2025-01-28',
    author: {
      name: 'आधुनिक प्रचार प्रसार लीगल एंड ऐड ऑप्स',
      role: { hi: 'अनुपालन सलाहकार', en: 'Compliance Desk' },
    },
    coverImage: '/images/insights/compliance.jpg',
    content: {
      hi: `
### डिजिटल पारदर्शिता: नियम और सर्वश्रेष्ठ अभ्यास

आज के दौर में सोशल मीडिया प्लेटफॉर्म्स पर सामाजिक मुद्दों, चुनावों या जननीतियों से जुड़े विज्ञापन सामान्य विज्ञापनों से भिन्न नियमों के अधीन आते हैं। 

#### 1. पहचान सत्यापन (Identity Verification)
अभियान शुरू करने से कम से कम 2 से 3 सप्ताह पूर्व विज्ञापनदाता के आधिकारिक प्रतिनिधि का सरकारी पहचान पत्र (पासपोर्ट, पैन या वोटर आईडी) और पता सत्यापन संबंधित प्लेटफॉर्म पर अनिवार्य रूप से जमा होना चाहिए।

#### 2. डिस्क्लेमर का स्पष्ट प्रलेखन
प्रत्येक राजनीतिक व सामाजिक विज्ञापन में कानूनी रूप से यह दर्ज होना आवश्यक है कि विज्ञापन का खर्च कौन वहन कर रहा है (उदा: "प्रायोजक: [अधिकृत संगठन]"). यह जानकारी 7 वर्षों तक सार्वजनिक "Ad Library" में उपलब्ध रहती है।

#### 3. पारदर्शी वित्तीय प्रबंधन
विज्ञापन खर्च की राशि सीधे क्लाइंट के आधिकारिक बैंक कार्ड या चालू खाते से प्लेटफॉर्म को दी जानी चाहिए। एजेंसी को कभी भी क्लाइंट के ऐड बजट को अपने निजी खाते में नहीं मिलाना चाहिए। यह वित्तीय शुचिता और ऑडिट के लिए अनिवार्य है।
      `,
      en: `
### Digital Transparency: Compliance and Institutional Integrity

Running public advocacy, election, or civic policy advertisements on major digital networks involves stringent statutory and platform rules.

#### 1. Pre-Registration and Identity Clearance
At least 3 weeks prior to campaign flight, the authorized communication liaison must complete national identity verification and registered organization clearance on Meta and Google.

#### 2. Mandatory "Paid for by" Disclaimers
Every ad touching social issues, candidates, or civic governance requires an authenticated disclaimer that is permanently archived in public transparency libraries for 7 years.

#### 3. Direct Billing Discipline
All ad spends should be paid directly from the client’s designated organization account to the ad network. Media agencies should only charge transparent management retainers without opaque markups.
      `,
    },
  },
  {
    id: 'insight-3-authentic-short-form-video-strategy',
    slug: 'authentic-short-form-video-in-regional-elections',
    title: {
      hi: 'क्षेत्रीय अभियानों में प्रामाणिक लघु वीडियो (Reels) की कला',
      en: 'Crafting Authentic Short-Form Video for Regional Constituencies',
    },
    summary: {
      hi: 'दिखावटी भाषणों के स्थान पर फील्ड की सच्चाई, आम नागरिक संवाद और 60-सेकंड स्टोरीटेलिंग की प्रभावशीलता।',
      en: 'Why ground reality, citizen dialogues, and fast-paced documentary reels outperform staged political speeches.',
    },
    category: {
      hi: 'वीडियो प्रोडक्शन',
      en: 'Video Production',
    },
    readTime: {
      hi: '6 मिनट पढ़ें',
      en: '6 min read',
    },
    publishDate: '2025-02-05',
    author: {
      name: 'आधुनिक प्रचार प्रसार सिनेमा यूनिट',
      role: { hi: 'प्रोडक्शन हेड', en: 'Production Lead' },
    },
    coverImage: '/images/insights/video.jpg',
    content: {
      hi: `
### लघु वीडियो: 60 सेकंड में जनसंवाद

सोशल मीडिया पर दर्शक अब लंबे, नीरस और स्टेज से दिए जाने वाले पारंपरिक भाषणों को स्किप कर देते हैं। युवा पीढ़ी प्रामाणिकता, गति और स्पष्टता चाहती है।

#### 1. पहले 3 सेकंड का 'हुक'
मोबाइल स्क्रीन पर दर्शक अंगूठे से सेकंड के दसवें हिस्से में स्वाइप कर देते हैं। वीडियो की शुरुआत किसी औपचारिक अभिवादन के बजाय सीधे किसी महत्वपूर्ण प्रश्न, चौंकाने वाले दृश्य या मुख्य बिंदु से होनी चाहिए।

#### 2. स्वाभाविक प्रकाश और ऑन-ग्राउंड संवाद
स्टूडियो की कृत्रिम चकाचौंध से बेहतर है कि जनसुनवाई या सड़क पर आम नागरिक के साथ स्वाभाविक संवाद को प्राकृतिक धूप में शूट किया जाए। यह दर्शक के साथ भावनात्मक संबंध स्थापित करता है।

#### 3. देवनागरी सबटाइटल्स की अनिवार्यता
80% से अधिक सोशल मीडिया दर्शक सार्वजनिक स्थानों पर वीडियो म्यूट (बिना आवाज) करके देखते हैं। यदि आपकी रील में बोल्ड, सुरुचिपूर्ण हिंदी सबटाइटल्स नहीं हैं, तो आपका 80% प्रभाव समाप्त हो जाता है।
      `,
      en: `
### Authentic Storytelling in 60 Seconds

Constituents are increasingly immune to staged monologues and boilerplate speeches. What resonates is verified proof, empathy, and raw field dynamics.

#### 1. The 3-Second Hook
Vertical viewers make retention decisions in a fraction of a second. Open with an unscripted citizen insight, an infrastructural fact, or a dynamic field scene rather than formal protocol introductions.

#### 2. Ground Candid vs Studio Staging
Audiences trust daylight and real dust over air-conditioned studio polish. Cinematic cameras in natural lighting capture the genuine gravitas of public service.

#### 3. Subtitles are Non-Negotiable
Over 80% of mobile feeds are browsed without sound in public spaces. Crisp, high-contrast Devanagari subtitles ensure full message retention regardless of audio state.
      `,
    },
  },
];
