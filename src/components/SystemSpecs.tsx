'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function SystemSpecs() {
  const { t } = useLanguage();

  const specs = [
    {
      title: t.specs.card1Title,
      text: t.specs.card1Text,
    },
    {
      title: t.specs.card2Title,
      text: t.specs.card2Text,
    },
    {
      title: t.specs.card3Title,
      text: t.specs.card3Text,
    },
    {
      title: t.specs.card4Title,
      text: t.specs.card4Text,
    },
  ];

  return (
    <section id="specs" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-6">
        <span className="text-xs font-mono-tactical text-amber-500">{t.specs.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.specs.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.specs.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((s, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 p-5 space-y-2 tactical-corner">
            <div className="text-2xl font-military text-amber-500 font-bold">{s.title}</div>
            <p className="text-xs font-sans text-neutral-300 leading-relaxed">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
