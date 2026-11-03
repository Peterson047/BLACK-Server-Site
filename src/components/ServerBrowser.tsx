'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ServerBrowser() {
  const { t } = useLanguage();
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedFav, setCopiedFav] = useState(false);

  const serverIp = '189.126.105.191:1508';
  const favoritesText = `TDM-FAVORITES 1\n189.126.105.191:1508`;

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopiedIp(true);
      setTimeout(() => setCopiedIp(false), 2200);
    });
  };

  const copyFav = () => {
    navigator.clipboard.writeText(favoritesText).then(() => {
      setCopiedFav(true);
      setTimeout(() => setCopiedFav(false), 2200);
    });
  };

  return (
    <section id="servers" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-6">
        <div>
          <span className="text-xs font-mono-tactical text-amber-500">{t.servers.tag}</span>
          <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.servers.title}</h2>
          <p className="text-xs font-mono-tactical text-neutral-400">
            {t.servers.desc}
          </p>
        </div>
        <div className="hidden sm:block stamp-secret px-3 py-1 text-xs">
          {t.servers.stamp}
        </div>
      </div>

      {/* Card Principal do Servidor Dedicado Brasil */}
      <div className="bg-neutral-950 border-2 border-amber-500/50 p-6 tactical-corner shadow-xl space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-mono-tactical text-emerald-400 font-bold uppercase tracking-wider">{t.servers.status}</span>
              <span className="text-neutral-700">|</span>
              <span className="text-xs font-mono-tactical text-neutral-400">{t.servers.location}</span>
            </div>
            <h3 className="text-3xl font-military text-white tracking-wider mt-1">
              {t.servers.serverName}
            </h3>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 px-4 py-2 text-right">
            <div className="text-xs font-mono-tactical text-neutral-500">{t.servers.restartLabel}</div>
            <div className="text-sm font-military text-amber-400 font-bold">{t.servers.restartTime}</div>
          </div>
        </div>

        {/* Grid de Status do Servidor */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono-tactical">
          <div className="bg-neutral-900/80 p-3 border border-neutral-800">
            <div className="text-neutral-500">{t.servers.statLocLabel}</div>
            <div className="text-base text-neutral-200 font-bold mt-1">{t.servers.statLocVal}</div>
          </div>
          <div className="bg-neutral-900/80 p-3 border border-neutral-800">
            <div className="text-neutral-500">{t.servers.statMapLabel}</div>
            <div className="text-base text-amber-400 font-bold mt-1">{t.servers.statMapVal}</div>
          </div>
          <div className="bg-neutral-900/80 p-3 border border-neutral-800">
            <div className="text-neutral-500">{t.servers.statModeLabel}</div>
            <div className="text-base text-neutral-200 font-bold mt-1">{t.servers.statModeVal}</div>
          </div>
          <div className="bg-neutral-900/80 p-3 border border-neutral-800">
            <div className="text-neutral-500">{t.servers.statCapLabel}</div>
            <div className="text-base text-emerald-400 font-bold mt-1">{t.servers.statCapVal}</div>
          </div>
        </div>

        {/* Linha de Cópia de IP */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-900 p-4 border border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono-tactical text-neutral-500">{t.servers.ipLabel}</span>
            <span className="text-base sm:text-lg font-mono-tactical text-amber-400 font-bold">
              {serverIp}
            </span>
            <span className="text-xs font-mono-tactical text-neutral-500 hidden md:inline">
              (black-mp.vps-kinghost.net)
            </span>
          </div>

          <button 
            onClick={copyIp}
            className={`w-full sm:w-auto btn-military px-6 py-2.5 font-military text-lg font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              copiedIp 
                ? 'bg-emerald-500 text-black' 
                : 'bg-amber-500 hover:bg-amber-400 text-black'
            }`}
          >
            <span>{copiedIp ? t.servers.copiedBtn : t.servers.copyBtn}</span>
          </button>
        </div>

        {/* Instrução Rápida de Entrada */}
        <div className="bg-neutral-900/50 border border-neutral-800/80 p-3 text-xs font-mono-tactical text-neutral-300">
          <strong className="text-amber-400">{t.servers.howToJoin}</strong> {t.servers.howToJoinDesc}
        </div>

        {/* DICA PRO: FAVORITOS */}
        <div className="bg-amber-950/20 border border-amber-500/40 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-500 text-black font-military font-bold text-xs">{t.servers.favBadge}</span>
            <h4 className="text-lg font-military text-white tracking-wide">
              {t.servers.favTitle}
            </h4>
          </div>
          <p className="text-xs font-sans text-neutral-300">
            {t.servers.favDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <pre className="w-full bg-black border border-neutral-800 p-3 text-xs font-mono-tactical text-emerald-400 overflow-x-auto">{favoritesText}</pre>
            <button 
              onClick={copyFav}
              className={`w-full sm:w-auto px-4 py-3 text-xs font-mono-tactical whitespace-nowrap cursor-pointer transition-colors ${
                copiedFav 
                  ? 'bg-emerald-600 text-black font-bold' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
              }`}
            >
              {copiedFav ? t.servers.favCopiedBtn : t.servers.favCopyBtn}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
