'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowToPlay() {
  const { t } = useLanguage();

  return (
    <section id="setup" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-8">
        <span className="text-xs font-mono-tactical text-amber-500">{t.setup.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.setup.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.setup.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Passo 1 */}
        <div className="bg-neutral-950 border border-neutral-800 p-6 tactical-corner space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-military text-amber-500 font-bold">01</span>
            <span className="text-xs font-mono-tactical text-neutral-500">{t.setup.step1Tag}</span>
          </div>
          <h3 className="text-xl font-military text-white tracking-wide">{t.setup.step1Title}</h3>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {t.setup.step1Desc}
          </p>
          <a href="https://github.com/Peterson047/BLACK-XBEMultiplayer/releases" target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-mono-tactical text-amber-400 hover:underline">
            {t.setup.step1Link}
          </a>
        </div>

        {/* Passo 2 */}
        <div className="bg-neutral-950 border border-neutral-800 p-6 tactical-corner space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-military text-amber-500 font-bold">02</span>
            <span className="text-xs font-mono-tactical text-neutral-500">{t.setup.step2Tag}</span>
          </div>
          <h3 className="text-xl font-military text-white tracking-wide">{t.setup.step2Title}</h3>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {t.setup.step2Desc}
          </p>
          <div className="text-[11px] font-mono-tactical text-neutral-500">
            {t.setup.step2Path}
          </div>
        </div>

        {/* Passo 3 */}
        <div className="bg-neutral-950 border border-neutral-800 p-6 tactical-corner space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-military text-amber-500 font-bold">03</span>
            <span className="text-xs font-mono-tactical text-neutral-500">{t.setup.step3Tag}</span>
          </div>
          <h3 className="text-xl font-military text-white tracking-wide">{t.setup.step3Title}</h3>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {t.setup.step3Desc}
          </p>
          <div className="text-[11px] font-mono-tactical text-emerald-400">
            {t.setup.step3Ready}
          </div>
        </div>

      </div>
    </section>
  );
}
