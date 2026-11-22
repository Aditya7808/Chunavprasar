export interface FAQItem {
  id: string;
  question: {
    hi: string;
    en: string;
  };
  answer: {
    hi: string;
    en: string;
  };
}

export const homeFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      hi: 'प्रोजेक्ट पूरा करने और दैनिक क्रिएटिव डिलीवरी की समयसीमा क्या है?',
      en: 'What are your turnaround times for daily and long-term campaign deliverables?',
    },
    answer: {
      hi: 'नियमित अभियानों के लिए हमारी टीम 24 से 48 घंटे पूर्व सुनियोजित कैलेंडर के अनुसार सामग्री तैयार करती है। आपातकालीन घोषणाओं, प्रेस रिलीज अथवा समसामयिक बयानों के लिए हमारी डेडिकेटेड त्वरित रिस्पांस डेस्क 30 से 60 मिनट के भीतर हाई-रेजोल्यूशन विजुअल्स उपलब्ध कराती है। विस्तृत वृत्तचित्रों व ब्रांडिंग पैकेजों में सामान्यतः 7 से 15 कार्यदिवस लगते हैं।',
      en: 'For ongoing campaigns, materials are scheduled 24 to 48 hours in advance against an approved content calendar. For urgent press releases or breaking statements, our rapid-response team delivers broadcast-ready assets within 30 to 60 minutes. Full documentary films and complete brand identity packages typically take 7 to 15 business days.',
    },
  },
  {
    id: 'faq-2',
    question: {
      hi: 'आपकी फीस संरचना और मूल्य निर्धारण का क्या तरीका है?',
      en: 'How is your fee structured, and what is your pricing model?',
    },
    answer: {
      hi: 'हम पूर्ण पारदर्शिता में विश्वास करते हैं। हमारी सेवाएं कार्य के दायरे (Scope of Work) के आधार पर मासिक रिटेनर (Monthly Retainer) या परियोजना-आधारित (Project-based) निश्चित अनुबंध पर संचालित होती हैं। सभी शुल्कों का स्पष्ट इनवॉइस व GST बिलिंग प्रदान की जाती है। कोई अप्रत्याशित या गुप्त शुल्क नहीं होता।',
      en: 'We work on transparent, fixed-scope retainers or project contracts. Every engagement includes a detailed written agreement and compliant GST tax invoicing. We do not have hidden charges or arbitrary markups.',
    },
  },
  {
    id: 'faq-3',
    question: {
      hi: 'डिजिटल विज्ञापन बजट (Ad Budget) का प्रबंधन कैसे किया जाता है?',
      en: 'How are digital advertising media spends managed and paid for?',
    },
    answer: {
      hi: 'हम 100% प्रत्यक्ष और पारदर्शी बिलिंग का पालन करते हैं। विज्ञापन का सारा मीडिया बजट (Meta/Google Ad Spend) क्लाइंट के अपने पंजीकृत बिजनेस खाते और कार्ड से सीधे विज्ञापन प्लेटफॉर्म को जाता है। आधुनिक प्रचार प्रसार केवल रणनीति, तकनीकी अनुकूलन और क्रिएटिव प्रोडक्शन के लिए निर्धारित प्रबंधन शुल्क (Management Fee) लेता है।',
      en: 'We enforce 100% direct client billing. All media spends on Meta and Google are charged directly to the client’s verified payment method. Aadhunik Prachar Prasar bills exclusively for creative production, campaign management, and optimization retainers.',
    },
  },
  {
    id: 'faq-4',
    question: {
      hi: 'क्या सामग्री प्रकाशित करने से पहले हमारी पूर्व-स्वीकृति (Pre-Approval) ली जाती है?',
      en: 'Is client approval mandatory before any design or post is published?',
    },
    answer: {
      hi: 'जी हाँ, अनिवार्य रूप से। हमारे कार्यप्रवाह का यह मूल नियम है कि कोई भी पोस्टर, वीडियो या विज्ञापन क्लाइंट के अधिकृत प्रतिनिधि द्वारा लिखित अथवा डिजिटल स्वीकृति दिए बिना सार्वजनिक नहीं किया जाता। प्रत्येक अभियान के लिए एक सुरक्षित अनुमोदन चैनल स्थापित किया जाता है।',
      en: 'Yes, absolutely. Our workflow mandates explicit written or digital sign-off from the client’s designated representative before any creative, video, or advertisement is released to the public.',
    },
  },
  {
    id: 'faq-5',
    question: {
      hi: 'आप किन भाषाओं और बोलियों में कार्य करते हैं?',
      en: 'What languages and regional dialects do you support?',
    },
    answer: {
      hi: 'हमारी प्राथमिक विशेषज्ञता मानक हिंदी और देवनागरी टाइपोग्राफी में है। इसके अतिरिक्त, हम उत्तर प्रदेश के विभिन्न अंचलों की प्रमुख बोलियों जैसे अवधी, भोजपुरी, बुंदेलखंडी, ब्रजभाषा और अंग्रेजी में प्रासंगिक और स्वाभाविक संचार सामग्री तैयार करते हैं।',
      en: 'Our primary strength lies in pure standard Hindi and disciplined Devanagari typography. We also produce contextual native copy in regional dialects including Awadhi, Bhojpuri, Bundelkhandi, Braj Bhasha, and English.',
    },
  },
  {
    id: 'faq-6',
    question: {
      hi: 'क्या आप लखनऊ के बाहर उत्तर प्रदेश के अन्य जिलों में ऑन-ग्राउंड कार्य करते हैं?',
      en: 'Do you operate on-ground across districts outside Lucknow?',
    },
    answer: {
      hi: 'हाँ, हमारा केंद्रीय स्टूडियो लखनऊ में स्थित है, लेकिन हमारी वीडियो प्रोडक्शन, फोटोग्राफी और फील्ड समन्वय टीमें पूर्वांचल, पश्चिमांचल, बुंदेलखंड और रुहेलखंड के सभी 75 जिलों में फील्ड असाइनमेंट और दौरों के लिए सक्रिय रूप से तैनात होती हैं।',
      en: 'Yes. While our headquarters and post-production studios are in Lucknow, our camera units, documentary crews, and field supervisors regularly travel across all 75 districts of Uttar Pradesh.',
    },
  },
  {
    id: 'faq-7',
    question: {
      hi: 'क्लाइंट डेटा और अभियान रणनीति की गोपनीयता (Data Privacy) कैसे सुरक्षित रखी जाती है?',
      en: 'How do you safeguard client confidentiality and campaign strategic data?',
    },
    answer: {
      hi: 'हम प्रत्येक अनुबंध के साथ सख्त गैर-प्रकटीकरण समझौता (NDA) निष्पादित करते हैं। क्लाइंट का मतदाता विश्लेषण, आंतरिक रणनीतियां, ड्राफ्ट्स और संपर्क सूचियां एन्क्रिप्टेड क्लाउड वॉल्ट्स में सुरक्षित रखी जाती हैं और किसी तीसरे पक्ष के साथ कभी साझा नहीं की जाती हैं।',
      en: 'Every engagement is protected by a binding Non-Disclosure Agreement (NDA). All strategic data, media drafts, audience segments, and internal discussions are held in encrypted environments with strict zero-leakage access controls.',
    },
  },
  {
    id: 'faq-8',
    question: {
      hi: 'चुनाव आचार संहिता (MCC) और विज्ञापनों के कानूनी प्रमाणीकरण में आपकी क्या भूमिका है?',
      en: 'What is your role regarding Model Code of Conduct (MCC) and ad pre-certification?',
    },
    answer: {
      hi: 'हम एक स्वतंत्र क्रिएटिव व मीडिया एजेंसी हैं, न कि कोई चुनाव प्राधिकरण। हम विज्ञापन सामग्री को आचार संहिता के अनुरूप तैयार करने, आवश्यक प्रलेखन (Documentation) जुटाने और सक्षम मीडिया प्रमाणन व अनुवीक्षण समिति (MCMC) में आवेदन हेतु तकनीकी फाइलें तैयार करने में क्लाइंट का सहयोग करते हैं।',
      en: 'We are an independent creative communications consultancy, not a regulatory authority. We assist clients by formatting collaterals to statutory norms and preparing documentation kits for submission to the relevant Media Certification and Monitoring Committees (MCMC).',
    },
  },
];
