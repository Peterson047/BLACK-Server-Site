'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HostGuide() {
  const { t } = useLanguage();

  return (
    <section id="host" className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800/80">
      <div className="pb-3 border-b border-neutral-800 mb-6">
        <span className="text-xs font-mono-tactical text-amber-500">{t.host.tag}</span>
        <h2 className="text-3xl font-military text-white tracking-wider mt-1">{t.host.title}</h2>
        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.host.desc}
        </p>
      </div>

      <div className="bg-neutral-950 border border-neutral-800 p-6 tactical-corner space-y-4">
        <h3 className="text-base font-mono-tactical text-white font-bold">
          {t.host.boxTitle}
        </h3>

        <div className="bg-black border border-neutral-800 p-4 font-mono-tactical text-xs text-neutral-300 space-y-2 overflow-x-auto">
          <div><span className="text-amber-400">{t.host.comment1}</span></div>
          <div className="text-emerald-400">sudo apt install -y xvfb python3 mesa-vulkan-drivers libvulkan1 libshaderc1 libssl3t64</div>
          <br />
          <div><span className="text-amber-400">{t.host.comment2}</span></div>
          <div className="text-emerald-400">./build.sh &amp;&amp; server/setup.sh</div>
          <br />
          <div><span className="text-amber-400">{t.host.comment3}</span></div>
          <div className="text-emerald-400">server/run.sh 1508 &quot;Meu Servidor BLACK&quot;</div>
        </div>

        <p className="text-xs font-mono-tactical text-neutral-400">
          {t.host.subText}
          <code className="text-amber-400 ml-1">server/cmd.sh status</code>, <code className="text-amber-400 ml-1">server/cmd.sh restart</code> ou <code className="text-amber-400 ml-1">server/cmd.sh kick &lt;id&gt;</code>.
        </p>
      </div>
    </section>
  );
}
