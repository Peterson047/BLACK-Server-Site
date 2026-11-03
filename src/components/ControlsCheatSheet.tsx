import React from 'react';

export default function ControlsCheatSheet() {
  const controls = [
    { key: 'F10', label: 'Menu Multiplayer' },
    { key: 'TAB', label: 'Placar e Pings' },
    { key: 'B', label: 'Escolher Arma (Spawn)' },
    { key: 'T', label: 'Chat Global' },
    { key: 'U', label: 'Chat de Equipe' },
    { key: 'V', label: 'Coronhada (Melee)' },
    { key: 'G', label: 'Lançar Granada' },
    { key: 'F6', label: 'Votar Revanche' },
  ];

  return (
    <section id="controls" className="section container">
      <span className="section-tag">// TECLAS DE JOGO</span>
      <h2 className="section-title">CONTROLES EM PARTIDA</h2>
      <p className="section-desc">Atalhos essenciais durante o combate tático:</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {controls.map((c, i) => (
          <div 
            key={i}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderRadius: '4px'
            }}
          >
            <span className="hud-key">{c.key}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#fff' }}>
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
