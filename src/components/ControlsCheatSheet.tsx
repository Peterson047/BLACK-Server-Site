'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ControlsCheatSheet() {
  const { t } = useLanguage();

  const controls = [
    { key: 'F10', title: t.controls.f10Title, sub: t.controls.f10Sub },
    { key: 'TAB', title: t.controls.tabTitle, sub: t.controls.tabSub },
    { key: 'B', title: t.controls.bTitle, sub: t.controls.bSub, highlight: true },
    { key: 'T', title: t.controls.tTitle, sub: t.controls.tSub },
    { key: 'U', title: t.controls.uTitle, sub: t.controls.uSub },
    { key: 'V', title: t.controls.vTitle, sub: t.controls.vSub },
    { key: 'G', title: t.controls.gTitle, sub: t.controls.gSub },
    { key: 'F6', title: t.controls.f6Title, sub: t.controls.f6Sub },
  ];

  return (
    <section id="controls" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-6">
        <span className="text-xs font-mono-tactical text-amber-500">{t.controls.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.controls.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.controls.desc}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {controls.map((c, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 p-4 flex items-center gap-3 tactical-corner">
            <span className="hud-key">{c.key}</span>
            <div>
              <div className={`text-sm font-military ${c.highlight ? 'text-amber-400' : 'text-white'}`}>
                {c.title}
              </div>
              <div className="text-[11px] font-mono-tactical text-neutral-400">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
