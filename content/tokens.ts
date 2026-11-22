export const designTokens = {
  theme: 'Premium Indian Media House',
  mood: 'cinematic, authoritative, modern, warm',
  colors: {
    navy900: { value: '#0B1530', usage: 'Primary background, corporate headers, dominant tone (~55%)' },
    navy700: { value: '#101D3A', usage: 'Secondary navy, surface depth, card backgrounds' },
    slate600: { value: '#28364F', usage: 'Muted slate, borders, subtle text' },
    gold500: { value: '#C69A45', usage: 'Primary gold accent, CTAs, hairline dividers (~10%)' },
    gold300: { value: '#E3C57E', usage: 'Light gold shimmer, gradient highlights' },
    ivory50: { value: '#F5F3ED', usage: 'Editorial warm light sections (~35%)' },
    white: { value: '#FFFFFF', usage: 'Pure card surfaces, high-contrast text' },
    ink: { value: '#0F172A', usage: 'High-contrast typography on light backgrounds' },
    success: { value: '#1F8A5B', usage: 'Verification pills, positive indicators' },
    danger: { value: '#C2410C', usage: 'Disclaimers, error alerts' },
  },
  typography: {
    hindiHeadings: 'Noto Sans Devanagari (weights 700, 800) with line-height 1.6+',
    englishHeadings: 'Plus Jakarta Sans (weights 600, 700)',
    bodyText: 'Inter + Noto Sans Devanagari with zero tracking on Devanagari to protect shirorekha',
    fluidScale: 'clamp(2rem, 5vw, 3.75rem) for H1',
  },
  shapeAndStyle: {
    cardRadius: '12px to 16px',
    dividers: 'Thin gold hairline gradient dividers (1px to 2px)',
    shadows: 'Soft navy multi-layered shadows',
    motif: 'Faint 8-15% opacity Devanagari jaali geometric radial background pattern',
  },
  motion: {
    timing: '200ms - 400ms minimal and fast',
    cardHover: 'Subtle 4px lift with gold border intensification',
    reducedMotion: 'Full prefers-reduced-motion fallback support',
  },
  accessibility: {
    contrast: 'WCAG AA 4.5:1 minimum on all text layers',
    focusRing: 'Visible 2px gold focus ring with 2px offset',
    semantics: 'WAI-ARIA landmark roles, semantic tags, and lang switches',
  },
};
