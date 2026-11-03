'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Community() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="bg-neutral-900 border border-neutral-800 p-8 tactical-corner flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-3xl font-military text-white tracking-wider">
            {t.community.title}
          </h3>
          <p className="text-xs font-sans text-neutral-300 max-w-xl">
            {t.community.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="https://discord.gg/szt9HJYjDt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-military px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
          >
            <span>{t.community.btnDiscord}</span>
          </a>
          <a 
            href="https://pixgg.com/peterson047" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-military px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-amber-500/40 font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
          >
            <span>{t.community.btnPix}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
