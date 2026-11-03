'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ScreenshotGallery() {
  const { t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const screenshots = [
    {
      src: '/img/in_game_combat.png',
      alt: t.screenshots.combatCap,
      caption: t.screenshots.combatCap,
      sub: t.screenshots.combatSub,
    },
    {
      src: '/img/server_browser.png',
      alt: t.screenshots.browserCap,
      caption: t.screenshots.browserCap,
      sub: t.screenshots.browserSub,
    },
    {
      src: '/img/buy_menu.png',
      alt: t.screenshots.buyCap,
      caption: t.screenshots.buyCap,
      sub: t.screenshots.buySub,
    },
    {
      src: '/img/tab_menu.png',
      alt: t.screenshots.tabCap,
      caption: t.screenshots.tabCap,
      sub: t.screenshots.tabSub,
    },
  ];

  const activeImage = activeImageIndex !== null ? screenshots[activeImageIndex] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImageIndex]);

  return (
    <section id="screenshots" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-6">
        <span className="text-xs font-mono-tactical text-amber-500">{t.screenshots.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.screenshots.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.screenshots.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {screenshots.map((s, idx) => (
          <div 
            key={idx} 
            className="bg-neutral-950 border border-neutral-800 p-2 tactical-corner group cursor-pointer"
            onClick={() => setActiveImageIndex(idx)}
          >
            <div className="relative overflow-hidden aspect-video bg-neutral-900 rounded">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={s.src} 
                alt={s.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-2 py-1 bg-amber-500 text-black text-xs font-military font-bold">
                  {t.screenshots.zoom}
                </span>
              </div>
            </div>
            <div className="mt-2 text-xs font-mono-tactical text-neutral-300 font-bold">{s.caption}</div>
            <div className="text-[11px] font-mono-tactical text-neutral-500 truncate">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 p-2 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-10 right-0 text-white font-mono-tactical text-xs px-3 py-1 bg-neutral-800 border border-neutral-700 hover:bg-red-600 transition-colors cursor-pointer"
            >
              {t.screenshots.closeEsc}
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="w-full max-h-[80vh] object-contain mx-auto rounded" 
            />
            <div className="p-3 text-xs font-mono-tactical text-neutral-300 border-t border-neutral-800 mt-2">
              <strong className="text-amber-400 text-sm block">{activeImage.caption}</strong>
              <span className="text-neutral-400">{activeImage.sub}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
