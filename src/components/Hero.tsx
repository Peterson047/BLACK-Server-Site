'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { WEB_PLAY_URL, DONATE_URL } from '@/lib/links';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 pt-10 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-military tracking-wide text-white leading-none">
            {t.hero.title} <span className="text-amber-500">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl">
            {t.hero.desc}
          </p>

          {/* Jogar online no navegador + apoio */}
          <div className="bg-neutral-950/80 border border-amber-500/50 p-5 tactical-corner space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono-tactical text-amber-400">{t.hero.onlineTag}</span>
              <h2 className="text-2xl sm:text-3xl font-military tracking-wide text-white leading-none">
                {t.hero.onlineTitle}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans">{t.hero.onlineDesc}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={WEB_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-military px-6 py-4 bg-amber-500 hover:bg-amber-400 text-black font-military text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.btnOnline}</span>
              </a>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-military px-6 py-4 bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-amber-500/40 font-military text-xl font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.btnDonate}</span>
              </a>
            </div>
            <p className="text-[11px] font-mono-tactical text-neutral-400">{t.hero.onlineReqs}</p>
            <p className="text-[11px] font-sans text-neutral-500">{t.hero.donateNote}</p>
          </div>

          {/* Botões Táticos */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="#servers" 
              className="btn-military px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.btnServers}</span>
            </a>
            <a 
              href="https://github.com/Peterson047/BLACK-XBEMultiplayer/releases" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-military px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.btnDownload}</span>
            </a>
            <a 
              href="https://discord.gg/szt9HJYjDt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-military px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-military text-xl font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>{t.hero.btnDiscord}</span>
            </a>
          </div>

          {/* Badges de Compatibilidade */}
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono-tactical text-neutral-400 border-t border-neutral-800/80">
            <div><strong className="text-neutral-200">{t.hero.badgeNoEmulator}</strong></div>
            <div>•</div>
            <div><strong className="text-neutral-200">{t.hero.badgeVulkan}</strong></div>
            <div>•</div>
            <div><strong className="text-neutral-200">{t.hero.badgeControls}</strong></div>
            <div>•</div>
            <div><strong className="text-emerald-400">{t.hero.badgeNetcode}</strong></div>
          </div>
        </div>

        {/* Capa com Moldura Tática */}
        <div className="lg:col-span-5 relative">
          <div className="bg-neutral-950 border border-neutral-800 p-2 tactical-corner shadow-2xl">
            <div className="relative overflow-hidden rounded group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/img/cover_mp.png" 
                alt={t.hero.coverAlt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono-tactical text-amber-400 bg-black/70 px-2 py-1 border border-neutral-700">
                  {t.hero.coverTag}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
