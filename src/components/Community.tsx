'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { DONATE_URL } from '@/lib/links';

export default function Community() {
  const { t } = useLanguage();

  return (
    <section id="apoiar" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80 space-y-6">
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
            href={DONATE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-military px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-amber-500/40 font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
          >
            <span>{t.community.btnPix}</span>
          </a>
        </div>

      </div>

      {/* Chamada de doação */}
      <div className="bg-neutral-950 border border-amber-500/50 p-8 tactical-corner flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-mono-tactical text-amber-400">{t.community.donateTag}</span>
          <h3 className="text-3xl font-military text-white tracking-wider">
            {t.community.donateTitle}
          </h3>
          <p className="text-xs font-sans text-neutral-300 max-w-xl">
            {t.community.donateDesc}
          </p>
        </div>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-military px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-military text-2xl font-bold flex items-center gap-2 cursor-pointer shrink-0"
        >
          <span>{t.community.btnDonate}</span>
        </a>
      </div>
    </section>
  );
}
