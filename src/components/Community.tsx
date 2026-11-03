import React from 'react';
import { MessageSquare, Coffee } from 'lucide-react';

export default function Community() {
  return (
    <section className="section container">
      <div className="community-box">
        <div>
          <h3 style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.8rem',
            color: '#fff',
            marginBottom: '0.5rem'
          }}>
            ENCONTRE JOGADORES NO DISCORD
          </h3>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            maxWidth: '580px'
          }}>
            Junte-se à comunidade oficial para marcar partidas, campeonatos, avisar quando o servidor estiver lotado e reportar bugs diretamente aos desenvolvedores.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a 
            href="https://discord.gg/szt9HJYjDt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-discord"
          >
            <MessageSquare size={18} />
            <span>Entrar no Discord</span>
          </a>
          <a 
            href="https://pixgg.com/peterson047" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            <Coffee size={18} />
            <span>Apoiar via PIX</span>
          </a>
        </div>
      </div>
    </section>
  );
}
