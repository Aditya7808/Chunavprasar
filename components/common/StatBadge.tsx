'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface StatBadgeProps {
  label: string;
  value: string;
  isPlaceholder?: boolean;
  className?: string;
  subtext?: string;
}

export function StatBadge({
  label,
  value,
  isPlaceholder = false,
  className,
  subtext,
}: StatBadgeProps) {
  return (
    <div
      className={cn(
        'rounded-card p-5 bg-white border border-paper-border flex flex-col justify-between shadow-paper-sm relative overflow-hidden group',
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 font-sans">
          {label}
        </span>
        {isPlaceholder ? (
          <span
            title="सत्यापन के उपरांत वास्तविक संख्या जोड़ी जाएगी"
            className="flex items-center gap-1 text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-300 font-sans font-medium"
          >
            <AlertCircle className="w-3 h-3 text-amber-600" />
            Placeholder
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 font-sans font-medium">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Verified
          </span>
        )}
      </div>

      <div className="text-xl sm:text-2xl font-extrabold text-gold-700 font-devanagari tracking-tight">
        {value}
      </div>

      {subtext && (
        <p className="text-xs text-ink-600 font-devanagari mt-2 border-t border-paper-border pt-2">
          {subtext}
        </p>
      )}
    </div>
  );
}
