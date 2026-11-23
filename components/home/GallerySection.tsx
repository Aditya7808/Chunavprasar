'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Locale } from '@/content/translations';
import { galleryItems, galleryCategories, GalleryItem } from '@/content/gallery';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Sparkles 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface GallerySectionProps {
  locale: Locale;
}

export function GallerySection({ locale }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const selectedItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) =>
        prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-20 sm:py-24 bg-paper bg-notepad-grid border-b border-paper-border overflow-hidden">
      {/* Delicate background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-paper-border text-gold-700 text-xs sm:text-sm font-devanagari font-bold shadow-paper-sm backdrop-blur-sm mb-4">
            <Camera className="w-4 h-4 text-gold-700 shrink-0" />
            <span>
              {locale === 'hi' ? 'गैलरी · ग्राउंड से लाइव झलकियां' : 'Visual Gallery · Ground & Campaign Glimpses'}
            </span>
          </div>

          <h2 className="text-2.5xl sm:text-4xl md:text-4xl.5 font-extrabold text-ink font-editorial tracking-tight">
            {locale === 'hi' ? (
              <>
                मैदानी अभियान एवं <span className="text-gold-800">मीडिया गैलरी</span>
              </>
            ) : (
              <>
                Field Campaigns & <span className="text-gold-800">Media Gallery</span>
              </>
            )}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-ink-700 font-devanagari max-w-2xl mx-auto leading-relaxed">
            {locale === 'hi'
              ? 'उत्तर प्रदेश के धरातल पर संचालित राजनीतिक यात्राओं, डिजिटल वॉर रूम, डाक्यूमेंट्री प्रोडक्शन और आउटडोर मंच सज्जा के प्रमाणिक दृश्य।'
              : 'Authentic photographic glimpses of our on-ground political yatras, 24/7 digital war rooms, 4K documentary shoots, and event staging.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-10 sm:mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedItemIndex(null);
                }}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-devanagari font-bold transition-all shadow-paper-sm cursor-pointer',
                  isActive
                    ? 'bg-gold-700 text-white shadow-md scale-105'
                    : 'bg-white/90 text-ink-700 hover:text-ink hover:bg-white border border-paper-border'
                )}
              >
                {cat.label[locale]}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative rounded-card-lg overflow-hidden bg-white border border-[#DFD3C1]/90 shadow-paper-sm hover:shadow-paper-lg transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1"
            >
              {/* Photo Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-warm">
                <img
                  src={item.src}
                  alt={item.alt[locale]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-devanagari font-bold bg-[#1A1410]/85 text-gold-200 border border-gold-500/30 backdrop-blur-md shadow-sm">
                    {item.categoryLabel[locale]}
                  </span>
                </div>

                {/* Hover Zoom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-ink flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-gold-800" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-ink font-devanagari line-clamp-2 group-hover:text-gold-800 transition-colors">
                    {item.title[locale]}
                  </h3>
                  {item.description && (
                    <p className="text-[12px] text-ink-600 font-devanagari line-clamp-2 mt-1.5 leading-relaxed">
                      {item.description[locale]}
                    </p>
                  )}
                </div>

                {/* Footer details: Location & Year */}
                <div className="pt-3 mt-3 border-t border-paper-border/70 flex items-center justify-between text-[11px] text-ink-600 font-devanagari">
                  {item.location && (
                    <span className="inline-flex items-center gap-1 text-ink-600">
                      <MapPin className="w-3 h-3 text-gold-700 shrink-0" />
                      <span className="truncate max-w-[140px]">{item.location[locale]}</span>
                    </span>
                  )}
                  {item.date && (
                    <span className="inline-flex items-center gap-1 text-ink-500 font-sans">
                      <Calendar className="w-3 h-3 text-gold-700 shrink-0" />
                      <span>{item.date}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Upload / Custom Addition Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-card bg-white/80 border border-dashed border-gold-400/60 shadow-paper-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-100 border border-gold-300 text-gold-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold font-devanagari text-ink">
                {locale === 'hi'
                  ? 'अपनी पसंदीदा छवियां और अभियान फोटोग्राफ यहां जोड़ें'
                  : 'Add your custom campaign photographs & ground media here'}
              </p>
              <p className="text-[11px] sm:text-xs text-ink-600 font-devanagari">
                {locale === 'hi'
                  ? 'public/images/gallery/ डायरेक्टरी में इमेज फाइलें डालें अथवा content/gallery.ts में नया विवरण जोड़ें।'
                  : 'Place images inside public/images/gallery/ or register them easily in content/gallery.ts.'}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-paper border border-paper-border text-xs font-devanagari font-bold text-ink-700">
            {locale === 'hi' ? 'सत्यापित ऑन-ग्राउंड रिकॉर्ड' : 'Verified Ground Record'}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-fadeIn"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-[#14100D] border border-gold-500/40 rounded-card-xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="p-3.5 sm:p-4 bg-[#1B1612] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-sans font-bold bg-gold-500/20 border border-gold-400/40 text-gold-300">
                  {selectedItemIndex! + 1} / {filteredItems.length}
                </span>
                <span className="text-xs sm:text-sm font-devanagari font-bold text-white/90">
                  {selectedItem.categoryLabel[locale]}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItemIndex(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-grow flex items-center justify-center bg-black min-h-[300px] sm:min-h-[460px] overflow-hidden">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt[locale]}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption & Details */}
            <div className="p-4 sm:p-5 bg-[#1B1612] border-t border-white/10 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold font-devanagari text-gold-200">
                  {selectedItem.title[locale]}
                </h4>
                <div className="flex items-center gap-3 text-xs text-white/70 font-devanagari shrink-0">
                  {selectedItem.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>{selectedItem.location[locale]}</span>
                    </span>
                  )}
                  {selectedItem.date && (
                    <span className="inline-flex items-center gap-1 font-sans">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      <span>{selectedItem.date}</span>
                    </span>
                  )}
                </div>
              </div>

              {selectedItem.description && (
                <p className="mt-2 text-xs sm:text-sm text-[#DFD6CC] font-devanagari leading-relaxed">
                  {selectedItem.description[locale]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
