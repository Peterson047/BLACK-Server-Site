'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

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
