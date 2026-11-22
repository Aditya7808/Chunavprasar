import { z } from 'zod';

export const enquiryFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'कृपया अपना नाम दर्ज करें / Please enter your name' })
    .max(100),
  organisation: z
    .string()
    .min(2, { message: 'संगठन या कार्यालय का नाम दर्ज करें / Enter organisation or office name' })
    .max(150),
  phone: z
    .string()
    .min(10, { message: 'वैध 10 अंकों का मोबाइल नंबर दर्ज करें / Enter a valid 10-digit phone number' })
    .regex(/^[0-9+\s-]{10,15}$/, { message: 'कृपया वैध फोन नंबर दर्ज करें / Invalid phone number format' }),
  email: z
    .string()
    .email({ message: 'वैध ईमेल पता दर्ज करें / Enter a valid email address' }),
  services: z
    .array(z.string())
    .min(1, { message: 'कम से कम एक सेवा चुनें / Select at least one service' }),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'कृपया अपने प्रोजेक्ट या आवश्यकता के बारे में बताएं / Please describe your requirement' })
    .max(2000),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'नियम व गोपनीयता नीति से सहमति आवश्यक है / Consent to privacy policy is required',
    }),
  // Honeypot field for bot protection
  website_honeypot: z.string().max(0).optional().or(z.literal('')),
});

export type EnquiryFormData = z.infer<typeof enquiryFormSchema>;
