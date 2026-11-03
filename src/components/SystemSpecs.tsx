import React from 'react';
import { Zap, Monitor, Gamepad2, Globe } from 'lucide-react';

export default function SystemSpecs() {
  const specs = [
    {
      icon: <Zap size={32} style={{ color: 'var(--amber)' }} />,
      title: 'DESEMPENHO NATIVO',
      text: 'Sem overhead de emulação. Latência mínima de comando, 60 FPS cravados ou framerate livre, com carregamento ultrarrápido dos mapas.'
    },
    {
      icon: <Monitor size={32} style={{ color: 'var(--amber)' }} />,
      title: 'SISTEMA COMPATÍVEL',
      text: 'Windows 10 ou 11 (64-bit). Requer GPU compatível com Vulkan 1.2+ (NVIDIA GTX 600+, AMD Radeon HD 7000+, Intel Arc / Iris / HD 500+).'
    },
    {
      icon: <Gamepad2 size={32} style={{ color: 'var(--amber)' }} />,
      title: 'CONTROLE OU MOUSE',
      text: 'Controle nativo de Xbox ou PlayStation com suporte a vibração, ou mira rápida no Teclado e Mouse para tiroteios frenéticos.'
    },
    {
      icon: <Globe size={32} style={{ color: 'var(--amber)' }} />,
      title: 'NETCODE DEDICADO',
      text: 'Servidor autoritativo de alta taxa de tick (UDP), com predição no cliente, hitmarkers na mira e sincronização de projéteis e explosões.'
    }
  ];

  return (
    <section id="specs" className="section container">
      <span className="section-tag">// TECNOLOGIA E COMPATIBILIDADE</span>
      <h2 className="section-title">PORT NATIVO PARA PC &bull; 60+ FPS</h2>
      <p className="section-desc">
        O <strong>BLACK Multiplayer</strong> não roda em emuladores pesados (PCSX2/Xemu). O código foi recompilado em C++ para Windows x86-64 com renderizador Vulkan de alto rendimento.
      </p>

      <div className="specs-grid">
        {specs.map((spec, i) => (
          <div key={i} className="spec-card">
            <div className="spec-icon">{spec.icon}</div>
            <div className="spec-title">{spec.title}</div>
            <p className="spec-text">{spec.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
