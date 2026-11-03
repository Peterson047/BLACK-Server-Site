'use client';

import React, { useState } from 'react';
import { Copy, Check, Server, Star, Terminal } from 'lucide-react';

export default function ServerBrowser() {
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedFav, setCopiedFav] = useState(false);

  const serverIp = '189.126.105.191:1508';
  const favoritesText = `TDM-FAVORITES 1\n189.126.105.191:1508`;

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopiedIp(true);
      setTimeout(() => setCopiedIp(false), 2000);
    });
  };

  const copyFav = () => {
    navigator.clipboard.writeText(favoritesText).then(() => {
      setCopiedFav(true);
      setTimeout(() => setCopiedFav(false), 2000);
    });
  };

  return (
    <section id="servers" className="section container">
      <span className="section-tag">// SERVIDORES DISPONÍVEIS</span>
      <h2 className="section-title">ONDE JOGAR AGORA</h2>
      <p className="section-desc">
        Conecte-se aos servidores dedicados oficiais online 24/7. Baixo ping no Brasil e partidas automáticas.
      </p>

      {/* Official Dedicated Server Card */}
      <div className="server-card">
        <div className="server-header">
          <div>
            <div className="server-badge-status">
              <span className="pulse"></span>
              <span>OFICIAL 24/7 // ONLINE</span>
            </div>
            <div className="server-name">BLACK Dedicated (Brasil)</div>
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--amber)',
            background: 'rgba(245,158,11,0.1)',
            padding: '0.35rem 0.75rem',
            borderRadius: '3px'
          }}>
            HOST AUTORITATIVO LINUX
          </div>
        </div>

        <div className="server-grid">
          <div className="stat-item">
            <div className="stat-label">LOCALIZAÇÃO</div>
            <div className="stat-val">São Paulo, BR</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">MAPA ATIVO</div>
            <div className="stat-val">Veblensk City</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">MODO DE JOGO</div>
            <div className="stat-val">Team Deathmatch</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">CAPACIDADE</div>
            <div className="stat-val">Até 7 Jogadores</div>
          </div>
        </div>

        <div className="server-ip-row">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginRight: '0.5rem' }}>
              IP DO SERVIDOR:
            </span>
            <span className="ip-text">{serverIp}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
              (black-mp.vps-kinghost.net)
            </span>
          </div>
          <button 
            className={`btn-copy ${copiedIp ? 'copied' : ''}`}
            onClick={copyIp}
          >
            {copiedIp ? <Check size={14} /> : <Copy size={14} />}
            <span>{copiedIp ? 'IP COPIADO!' : 'COPIAR IP'}</span>
          </button>
        </div>
      </div>

      {/* Quick How to Join */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        padding: '1.25rem 1.5rem',
        borderRadius: '4px',
        fontSize: '0.95rem',
        marginBottom: '1.5rem'
      }}>
        <strong style={{ color: 'var(--amber)' }}>Como entrar:</strong> No jogo, aperte <kbd className="hud-key" style={{ fontSize: '0.75rem', padding: '2px 6px', minWidth: 'auto' }}>F10</kbd> → aba <strong>Host / Join (LAN)</strong> → digite o IP <code style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>189.126.105.191</code> e porta <code style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>1508</code> → clique em <strong>Connect by IP</strong>.
      </div>

      {/* Favorites Pro-Tip */}
      <div className="favorites-card">
        <div className="favorites-header">
          <span className="favorites-badge">⭐ DICA PRO</span>
          <h3 className="favorites-title">SALVE O SERVIDOR NOS FAVORITOS DO JOGO</h3>
        </div>
        <p className="favorites-desc">
          Para não precisar digitar o IP toda vez no menu <kbd className="hud-key-small">F10</kbd>, crie um arquivo chamado <code className="code-inline">tdm-favorites.txt</code> na mesma pasta do <code>BLACK.exe</code> com o seguinte conteúdo:
        </p>
        <div className="favorites-code-wrap">
          <pre className="favorites-code">{favoritesText}</pre>
          <button 
            className={`btn-copy-small ${copiedFav ? 'copied' : ''}`}
            onClick={copyFav}
          >
            {copiedFav ? <Check size={13} /> : <Copy size={13} />}
            <span>{copiedFav ? 'CONFIG COPIADA!' : 'COPIAR TEXTO'}</span>
          </button>
        </div>
        <p className="favorites-sub">
          Assim que você abrir o menu multiplayer (<kbd className="hud-key-small">F10</kbd>), o servidor oficial aparecerá instantaneamente com ping em tempo real!
        </p>
      </div>
    </section>
  );
}
