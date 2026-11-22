'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon, Video, ShieldCheck } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  aspectRatio?: '16/9' | '4/5' | '1/1' | '9/16' | '21/9';
  label?: string;
  category?: string;
  altGuidance?: string;
  className?: string;
  isVideo?: boolean;
}

export function ImagePlaceholder({
  src,
  aspectRatio = '16/9',
  label = 'प्रमाणित मीडिया विजुअल',
  category = 'Campaign Asset',
  altGuidance = 'वास्तविक फील्ड फोटोग्राफी अथवा प्रोडक्शन रेंडर',
  className,
  isVideo = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-video',
    '4/5': 'aspect-[4/5]',
    '1/1': 'aspect-square',
    '9/16': 'aspect-[9/16]',
    '21/9': 'aspect-[21/9]',
  }[aspectRatio];

  if (src && !hasError) {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-card bg-[#181310] border border-paper-border group',
          aspectClass,
          className
        )}
      >
        <img
          src={src}
          alt={label}
          loading="lazy"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle dark vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        
        {/* Category tag in bottom-left */}
        <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
            {category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-card bg-[#F7F2E9] border border-paper-border flex flex-col items-center justify-center p-6 text-center select-none group',
        aspectClass,
        className
      )}
      role="img"
      aria-label={`${label} - ${altGuidance}`}
    >
      {/* Background motif with subtle lines & tint */}
      <div className="absolute inset-0 bg-notepad-lines opacity-40 pointer-events-none" />

      {/* Subtle corner accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gold-600/40" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gold-600/40" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gold-600/40" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gold-600/40" />

      {/* Icon & Label */}
      <div className="relative z-10 flex flex-col items-center max-w-xs space-y-2">
        <div className="w-12 h-12 rounded-full bg-white border border-paper-border flex items-center justify-center text-gold-700 group-hover:scale-110 group-hover:border-gold-500 transition-all duration-300 shadow-paper-sm">
          {isVideo ? (
            <Video className="w-6 h-6 stroke-[1.75]" />
          ) : (
            <ImageIcon className="w-6 h-6 stroke-[1.75]" />
          )}
        </div>

        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold-700 bg-white/90 px-2 py-0.5 rounded-full border border-paper-border shadow-paper-sm">
          {category}
        </span>

        <h4 className="text-sm font-bold text-ink font-editorial leading-snug">
          {label}
        </h4>

        <div className="inline-flex items-center gap-1 text-[10px] text-ink-500 pt-1">
          <ShieldCheck className="w-3 h-3 text-gold-700" />
          <span>सत्यापित मीडिया मानक</span>
        </div>
      </div>
    </div>
  );
}
