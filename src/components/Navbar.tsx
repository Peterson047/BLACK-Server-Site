'use client';

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/95 backdrop-blur sticky top-0 z-40">
      {/* Navegação Principal */}
      <div className="bg-neutral-900/80 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <a href="#" className="flex items-center text-decoration-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="BLACK Logo" 
              className="h-10 md:h-12 w-auto object-contain hover:brightness-110 transition-all"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex flex-wrap items-center gap-4 xl:gap-5 font-mono-tactical text-xs text-neutral-300">
            <a href="#servers" className="hover:text-amber-400 transition-colors">{t.nav.servers}</a>
            <a href="#setup" className="hover:text-amber-400 transition-colors">{t.nav.setup}</a>
            <a href="#controls" className="hover:text-amber-400 transition-colors">{t.nav.controls}</a>
            <a href="#screenshots" className="hover:text-amber-400 transition-colors">{t.nav.screenshots}</a>
            <a href="#specs" className="hover:text-amber-400 transition-colors">{t.nav.specs}</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">{t.nav.faq}</a>
            <a href="#host" className="hover:text-amber-400 transition-colors">{t.nav.host}</a>
            
            {/* Language Selector */}
            <div className="flex items-center gap-1 border border-neutral-700 bg-neutral-950 px-2 py-1 rounded text-xs font-mono-tactical">
              <Globe size={13} className="text-amber-500 mr-1" />
              <button
                onClick={() => setLang('pt')}
                className={`px-1 py-0.5 rounded cursor-pointer transition-colors ${
                  lang === 'pt' ? 'text-black bg-amber-500 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Português"
              >
                PT
              </button>
              <span className="text-neutral-700">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 rounded cursor-pointer transition-colors ${
                  lang === 'en' ? 'text-black bg-amber-500 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            <a 
              href="https://discord.gg/szt9HJYjDt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-400 hover:text-indigo-300 font-bold ml-1"
            >
              {t.nav.discord}
            </a>
          </nav>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Language Selector Mobile */}
            <div className="flex items-center gap-1 border border-neutral-700 bg-neutral-950 px-2 py-1 rounded text-xs font-mono-tactical">
              <button
                onClick={() => setLang('pt')}
                className={`px-1 py-0.5 rounded ${lang === 'pt' ? 'text-black bg-amber-500 font-bold' : 'text-neutral-400'}`}
              >
                PT
              </button>
              <span className="text-neutral-700">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 rounded ${lang === 'en' ? 'text-black bg-amber-500 font-bold' : 'text-neutral-400'}`}
              >
                EN
              </button>
            </div>

            <button 
              className="p-2 text-neutral-300 hover:text-white border border-neutral-700 bg-neutral-900 rounded cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 p-4 flex flex-col gap-3 font-mono-tactical text-xs text-neutral-300">
          <a href="#servers" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.servers}</a>
          <a href="#setup" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.setup}</a>
          <a href="#controls" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.controls}</a>
          <a href="#screenshots" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.screenshots}</a>
          <a href="#specs" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.specs}</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.faq}</a>
          <a href="#host" onClick={() => setMobileOpen(false)} className="hover:text-amber-400">{t.nav.host}</a>
          <a href="https://discord.gg/szt9HJYjDt" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold">
            {t.nav.joinDiscord}
          </a>
        </div>
      )}
    </header>
  );
}
