import { NextRequest, NextResponse } from 'next/server';
import { enquiryFormSchema } from '@/lib/schema';
import { formatWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/content/siteConfig';

// In-memory rate limiting store (sliding window per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const currentTime = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequestsPerWindow = 5;

    // Check rate limit
    const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: currentTime + windowMs };
    if (currentTime > clientData.resetTime) {
      clientData.count = 0;
      clientData.resetTime = currentTime + windowMs;
    }

    if (clientData.count >= maxRequestsPerWindow) {
      return NextResponse.json(
        {
          success: false,
          error: 'बहुत अधिक अनुरोध (Too many requests). कृपया 1 मिनट बाद पुनः प्रयास करें।',
        },
        { status: 429 }
      );
    }

    clientData.count += 1;
    rateLimitMap.set(ip, clientData);

    const body = await req.json();

    // Honeypot check: if website_honeypot is populated, silently reject (it's a bot)
    if (body.website_honeypot && body.website_honeypot.trim() !== '') {
      return NextResponse.json(
        { success: true, message: 'Enquiry received' },
        { status: 200 }
      );
    }

    // Server-side Zod validation
    const validationResult = enquiryFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: 'कृपया सभी आवश्यक फ़ील्ड सही तरीके से भरें।',
          details: errors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Format WhatsApp prefilled message link for client convenience
    const waSummary = `*नई प्रोजेक्ट इन्क्वायरी - आधुनिक प्रचार प्रसार*
*नाम:* ${data.fullName}
*संगठन/कार्यालय:* ${data.organisation}
*फोन:* ${data.phone}
*ईमेल:* ${data.email}
*आवश्यक सेवाएं:* ${data.services.join(', ')}
*बजट दायरा:* ${data.budgetRange || 'परामर्श आवश्यक'}
*समयसीमा:* ${data.timeline || 'निर्धारित नहीं'}
*विवरण:* ${data.message}`;

    const whatsappRedirectUrl = formatWhatsAppLink(siteConfig.contact.whatsapp, waSummary);

    // In production with Resend/SMTP keys configured, send email notification:
    // await sendEmail({ to: siteConfig.contact.email, subject: `New Enquiry from ${data.fullName}`, ... });

    return NextResponse.json({
      success: true,
      message: 'आपकी इन्क्वायरी सफलतापूर्वक प्राप्त हो गई है।',
      whatsappUrl: whatsappRedirectUrl,
      enquiryId: `ENQ-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error('Error handling enquiry form submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'सर्वर पर अप्रत्याशित त्रुटि हुई। कृपया पुनः प्रयास करें।',
      },
      { status: 500 }
    );
  }
}
