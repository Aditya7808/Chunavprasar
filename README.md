# आधुनिक प्रचार प्रसार (Aadhunik Prachar Prasar)
### Lucknow, Uttar Pradesh · Political Communication, Creative Media & Digital Advertising

---

## 🏛️ Company & Project Overview

**आधुनिक प्रचार प्रसार (Aadhunik Prachar Prasar)** is a premier, bilingual (Hindi default, English toggle) strategic political communication, creative media, and digital advertising company based in **Lucknow, Uttar Pradesh**.

This web platform is designed to serve elected representatives (MLAs, MPs, councillors), election campaigns, civic bodies, NGOs, and corporate/institutional clients with **institutional dignity, aesthetic restraint, and strict compliance awareness**.

### Core Brand Principles
- **Corporate Media House Stature:** Styled like an authoritative media house, avoiding party office aesthetics and single-person poster shop clichés.
- **Strictly Non-Partisan:** Independent commercial enterprise. No political party logos, no partisan favoritism, and no stock politician photos in hero imagery.
- **Factual Integrity & No Unverified Claims:** Zero fabricated client counts, reach figures, or "No. 1" boasts. All pending data is clearly designated with `[PLACEHOLDER: verified...]` tags.
- **Devanagari Typographic Respect:** Generous line-height (1.65+), zero letter-spacing on Hindi body copy to protect the continuous *Shirorekha*, and clear vowel *matra* clearance.

---

## 🎨 Design System: "Premium Indian Media House"

### Color Palette (CSS Variables)
| Token | HEX | Description & Ratio |
|---|---|---|
| `--navy-950` | `#060B1A` | Deepest foundation, hero backgrounds, and footers |
| `--navy-900` | `#0B1530` | Dominant navy background (~55% visual ratio) |
| `--navy-700` | `#101D3A` | Surface depth and secondary cards |
| `--slate-600` | `#28364F` | Hairline dividers and muted borders |
| `--gold-500` | `#C69A45` | Primary gold accent, CTAs, highlights (~10% visual ratio) |
| `--gold-300` | `#E3C57E` | Shimmer gradient highlight |
| `--ivory-50` | `#F5F3ED` | Warm editorial light section backgrounds (~35% visual ratio) |
| `--white` | `#FFFFFF` | Card surfaces and high contrast text |
| `--ink` | `#0F172A` | Primary typography ink on light backgrounds |
| `--success` | `#1F8A5B` | Verified badges and audit indicators |
| `--danger` | `#C2410C` | Critical compliance alerts and warnings |

### Typography Scale
- **Hindi Headings:** *Noto Sans Devanagari* (700/800 font weights), line-height `1.65` minimum, zero tracking.
- **English Headings:** *Plus Jakarta Sans* (600/700 font weights).
- **Body:** *Inter* + *Noto Sans Devanagari* with fluid clamp scaling.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **Validation:** Zod schema validation
- **Motion:** Responsive CSS and Framer Motion transitions with full `prefers-reduced-motion` compliance
- **SEO & Architecture:** Dynamic JSON-LD structured schemas (`LocalBusiness`, `Organization`, `Service`, `CreativeWork`), `sitemap.ts`, `robots.ts`, Open Graph tags, and hreflang alternates (`/hi` default, `/en` toggle).

---

## 📂 Project Structure

```
c:\Users\rsaur\Chunav\
├── app/
│   ├── [locale]/
│   │   ├── about/            # About page: story, vision, mission, team placeholders
│   │   ├── compliance/       # Statutory compliance & MCMC pre-certification assistance
│   │   ├── contact/          # Contact HQ: enquiry form, phone, hours, map embed
│   │   ├── disclaimer/       # Statutory non-partisan disclaimer
│   │   ├── insights/         # Knowledge articles & editorial guides
│   │   │   └── [slug]/       # Dynamic non-partisan article viewer
│   │   ├── privacy/          # Privacy policy & data protection standards
│   │   ├── services/         # 5 core + 2 supporting services index
│   │   │   └── [slug]/       # Dynamic service details (with digital ad deep-dive)
│   │   ├── styleguide/       # Living design tokens & component library
│   │   ├── terms/            # Terms of service & commercial contracts
│   │   ├── work/             # Portfolio index (8 seeded case studies + filters)
│   │   │   └── [slug]/       # Deep case study template with verified metrics
│   │   ├── layout.tsx        # Bilingual header, footer, WhatsApp & cookie consent
│   │   └── page.tsx          # Comprehensive 14-section home page
│   ├── api/
│   │   └── enquiry/          # Zod validation, rate limiting, honeypot & WhatsApp generator
│   ├── globals.css           # Design tokens, typography variables & reset rules
│   ├── layout.tsx            # Base root layout
│   ├── page.tsx              # Root redirect (/ -> /hi)
│   ├── robots.ts             # Dynamic robots.txt
│   └── sitemap.ts            # Dynamic bilingual sitemap.xml
├── components/
│   ├── common/               # Header, Footer, Breadcrumbs, StatBadge, VideoFacade, ImagePlaceholder
│   ├── forms/                # Zod-validated EnquiryForm with WhatsApp link generation
│   └── home/                 # 14 standalone modular home sections
├── content/
│   ├── design-tokens.json    # JSON tokens file for designers
│   ├── faq.ts                # 8 comprehensive bilingual FAQs
│   ├── insights.ts           # Non-partisan educational articles
│   ├── projects.ts           # 8 seeded case studies (concept vs client work)
│   ├── services.ts           # 5 core + 2 supporting service data models
│   ├── siteConfig.ts         # Company identifiers, legal details & placeholders
│   ├── tokens.ts             # TypeScript design tokens export
│   └── translations.ts       # Full bilingual dictionary (hi & en)
└── lib/
    ├── schema.ts             # Zod form validation schemas
    ├── seo.ts                # JSON-LD schema generators
    └── utils.ts              # Utility helpers & WhatsApp deep link formatter
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js `v18.17.0` or higher
- npm `v9+`

### Installation
```bash
# Clone or navigate to the project directory
cd c:\Users\rsaur\Chunav

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The application will automatically route to `/hi` (Hindi default). Click the **HI / EN** toggle in the header to switch to English.

### Production Build & Verification
```bash
# Type check and build optimized static/SSR bundles
npm run build

# Start the production server
npm start
```

---

## 📝 Content Management Guide

The content layer is designed to be **CMS-ready (Sanity, Strapi, or Decap CMS compatible)** without changing the presentation UI. All content files are typed in `/content`:

1. **Company Information & Placeholders:** Edit `content/siteConfig.ts` to update the registered legal entity, phone numbers, Lucknow address, and CIN/GSTIN identifiers once verified.
2. **Services & Pricing Models:** Edit `content/services.ts` to add or refine deliverables, platform offerings, and 90-day campaign roadmaps.
3. **Projects & Case Studies:** Edit `content/projects.ts` to add new client engagements or toggle between `'client'` and `'concept'` projects.
4. **Insights & Research:** Edit `content/insights.ts` to publish neutral, educational articles on political advertising, design, and media licensing.
5. **UI Strings & Translations:** Edit `content/translations.ts` for any interface copy in Hindi or English.

---

## 📋 Client Asset Checklist (Required for Production Launch)

Before deploying for live public campaigns, the client must supply the following verified items to replace the designated `[PLACEHOLDER]` tags:

| Asset / Information | Format / Specification | Target File |
|---|---|---|
| **Official Emblem / Vector Logo** | SVG / Vector AI format (transparent background) | `components/common/Header.tsx`, `Footer.tsx` |
| **Showreel Master Video** | 1080p / 4K MP4 or unlisted YouTube / Vimeo embed URL | `components/common/VideoFacade.tsx`, `Hero.tsx` |
| **Office & Studio Photography** | High-res authentic landscape (16:9) & portrait (4:5) photos | `components/common/ImagePlaceholder.tsx` |
| **Company Legal Details** | Registered Corporate Name, CIN, GSTIN, PAN | `content/siteConfig.ts` |
| **Official Contact Information** | Verified phone number, WhatsApp Business number, support email | `content/siteConfig.ts` |
| **Physical Office Address** | Exact registered secretariat address in Gomti Nagar, Lucknow | `content/siteConfig.ts` |
| **Legal Review of Compliance Page** | Written sign-off by legal counsel for MCMC liaison disclaimer | `app/[locale]/compliance/page.tsx` |
| **Pre-Publication Checklist PDF** | Finalized 24-point PDF document for candidate download | `app/[locale]/compliance/page.tsx` |

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Framework Preset will auto-detect as **Next.js**.
4. Set Build Command to `npm run build` and Output Directory to `.next`.
5. Deploy. Configure your custom domain (`aadhunikpracharprasar.com`) with DNS records.

### Option 2: Linux / VPS Server (Ubuntu + PM2 + Nginx)
```bash
# Install PM2 globally
npm install -g pm2

# Build the Next.js production bundle
npm run build

# Start the application via PM2
pm2 start npm --name "aadhunik-prachar-prasar" -- start -p 3000
pm2 save
pm2 startup
```

Configure Nginx reverse proxy to forward traffic from port 80/443 to `http://localhost:3000` with SSL enabled via Let's Encrypt Certbot.

---

## ⚖️ Legal & Non-Partisan Independence Statement

> **"स्वतंत्र निजी कंपनी। किसी सरकारी प्राधिकरण या राजनीतिक दल से संबद्ध नहीं, जब तक स्पष्ट रूप से घोषित न हो।"**  
> *Independent commercial enterprise. Not affiliated with any political party or statutory election authority unless explicitly certified for an authorized communication assignment.*
