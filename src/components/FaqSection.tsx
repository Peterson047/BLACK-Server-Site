'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-6">
        <span className="text-xs font-mono-tactical text-amber-500">{t.faq.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.faq.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.faq.desc}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="bg-neutral-950 border border-neutral-800 overflow-hidden">
              <button 
                onClick={() => toggle(i)}
                className="w-full p-4 text-left flex items-center justify-between text-neutral-200 hover:text-amber-400 font-sans font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>{f.q}</span>
                <span className="font-mono-tactical text-amber-500 text-base font-bold">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-xs font-sans text-neutral-400 border-t border-neutral-900 pt-3 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
