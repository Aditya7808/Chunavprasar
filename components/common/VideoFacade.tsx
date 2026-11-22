'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, Video as VideoIcon, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoFacadeProps {
  title: string;
  subtitle?: string;
  aspectRatio?: '16/9' | '9/16' | '4/5';
  embedUrl?: string; // YouTube or Vimeo embed url
  videoSrc?: string; // direct MP4 or video source
  className?: string;
  badge?: string;
  autoPlayPreview?: boolean;
  poster?: string;
}

export function VideoFacade({
  title,
  subtitle,
  aspectRatio = '16/9',
  embedUrl,
  videoSrc,
  className,
  badge = 'Brand Showreel 4K',
  autoPlayPreview = true,
  poster = '/images/projects/warroom.jpg',
}: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAmbientReady, setIsAmbientReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Defer ambient video loading to avoid blocking initial critical page hydration
  useEffect(() => {
    if (videoSrc && autoPlayPreview) {
      const timer = setTimeout(() => {
        setIsAmbientReady(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [videoSrc, autoPlayPreview]);

  const aspectClass = {
    '16/9': 'aspect-video',
    '9/16': 'aspect-[9/16]',
    '4/5': 'aspect-[4/5]',
  }[aspectRatio];

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  const handleStopPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-card-lg bg-[#181310] border border-[#DFD3C1]/80 shadow-paper-md group select-none',
        aspectClass,
        className
      )}
    >
      {isPlaying ? (
        embedUrl ? (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoSrc ? (
          <div className="relative w-full h-full bg-black">
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>

            {/* Back to Preview Button */}
            <button
              type="button"
              onClick={handleStopPlay}
              className="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white/90 hover:text-white text-xs font-sans font-medium border border-white/20 backdrop-blur-md shadow-lg transition-all"
              title="Return to preview mode"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#241D17] text-center p-6">
            <VideoIcon className="w-12 h-12 text-gold-500 mb-3 animate-pulse" />
            <p className="text-white font-bold font-editorial text-lg">{title}</p>
            <p className="text-[#C8BFB2] text-xs mt-1">
              [PLACEHOLDER: Showreel video asset to be linked via YouTube/Vimeo embed or CDN]
            </p>
          </div>
        )
      ) : (
        /* Facade view before click (lightweight background image + deferred ambient preview) */
        <button
          type="button"
          onClick={handleStartPlay}
          className="w-full h-full relative flex flex-col items-center justify-center text-center p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 group overflow-hidden"
          aria-label={`Play video: ${title}`}
        >
          {/* Static high-res poster image loads instantly with 0ms delay */}
          {poster && (
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none"
              loading="eager"
              decoding="async"
            />
          )}

          {/* Ambient Video Background loads only after page hydration to avoid lag */}
          {videoSrc && autoPlayPreview && isAmbientReady ? (
            <video
              src={videoSrc}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-all duration-700 ease-out pointer-events-none"
            />
          ) : null}

          {/* Warm Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/95 via-[#1E1814]/65 to-[#120F0D]/50 transition-opacity group-hover:opacity-85" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-wider bg-[#1F1914]/85 border border-gold-500/40 text-gold-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {badge}
            </span>
          </div>

          <div className="absolute top-3.5 right-3.5 z-10 hidden sm:flex items-center gap-1 text-[11px] font-sans font-medium text-gold-200/80 bg-black/40 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
            <Volume2 className="w-3.5 h-3.5 text-gold-400" />
            <span>Sound ON</span>
          </div>

          {/* Play Icon Button with Pulse Ring */}
          <div className="relative z-10 mt-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-gold-600 via-gold-500 to-amber-400 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-gold-400/30">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white translate-x-0.5 drop-shadow-md" />
            </div>
          </div>

          {/* Video Headline Info */}
          <div className="relative z-10 mt-5 max-w-md">
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-editorial tracking-tight group-hover:text-gold-300 transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#E0D7C9] font-devanagari mt-1 line-clamp-2 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-0.5 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-200 text-[11px] font-devanagari font-semibold">
              <span>प्ले करें · ऑडियो व 4K प्रस्तुति</span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
