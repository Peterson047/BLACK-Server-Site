'use client';

import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  sub: string;
}

export default function ScreenshotGallery() {
  const screenshots: Screenshot[] = [
    {
      src: '/img/server_browser.png',
      alt: 'Menu de Conexão F10',
      caption: 'Menu de Conexão Multiplayer [F10]',
      sub: 'Conexão direta por IP, busca na rede local e Lista de Servidores Favoritos.'
    },
    {
      src: '/img/buy_menu.png',
      alt: 'Menu do Arsenal [B]',
      caption: 'Menu do Arsenal / Compra [B]',
      sub: 'Escolha seu armamento tático no início da rodada (Rifles, Shotguns e Pistolas).'
    },
    {
      src: '/img/tab_menu.png',
      alt: 'Placar de Pontuação [TAB]',
      caption: 'Placar Tático com Pings [TAB]',
      sub: 'Acompanhe pontuação, baixas, pings de cada operador e progresso da partida.'
    }
  ];

  const [activeImage, setActiveImage] = useState<Screenshot | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section id="screenshots" className="section container">
      <span className="section-tag">// GALERIA DO MOD</span>
      <h2 className="section-title">SCREENSHOTS EM PARTIDA</h2>
      <p className="section-desc">
        Imagens reais capturadas nas partidas multiplayer no Windows. Clique em qualquer imagem para ver em tela cheia.
      </p>

      <div className="screenshot-grid">
        {screenshots.map((s, idx) => (
          <div 
            key={idx} 
            className="screen-item"
            onClick={() => setActiveImage(s)}
          >
            <div className="screen-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.alt} />
              <div className="zoom-badge">
                <Maximize2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                AMPLIAR
              </div>
            </div>
            <div className="screen-caption">{s.caption}</div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-modal open" role="dialog" aria-modal="true">
          <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}></div>
          <div className="lightbox-box">
            <button 
              className="lightbox-close" 
              onClick={() => setActiveImage(null)}
              title="Fechar (Esc)"
            >
              <X size={20} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="lightbox-img-el" 
            />
            <div className="lightbox-caption">
              <strong>{activeImage.caption}</strong> &bull; {activeImage.sub}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
