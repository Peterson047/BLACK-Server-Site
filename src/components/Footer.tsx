'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-8 text-xs font-mono-tactical text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500"></span>
            <span className="text-neutral-300 font-bold">{t.footer.credit}</span>
          </div>
          <div>
            <span>{t.footer.dev}</span>
          </div>
        </div>

        <p className="text-neutral-400">
          {t.footer.base}{' '}
          <a href="https://github.com/TGP482/BLACK-XBERecomp" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">BLACK-XBERecomp</a>,{' '}
          <a href="https://github.com/Peterson047/BLACK-Coop" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">BLACK-Coop</a>,{' '}
          <a href="https://github.com/Peterson047/BLACK-XBEMultiplayer" target="_blank" rel="noopener noreferrer" className="text-amber-500 underline">BLACK-XBEMultiplayer</a>.
        </p>

        <p className="text-[11px] text-neutral-600">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
