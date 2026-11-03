import React from 'react';
import Image from 'next/image';
import { Gamepad2, Download, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero container">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/img/cover_mp.png" 
        alt="BLACK Multiplayer" 
        className="hero-cover"
        width={720}
        height={405}
      />

      <h1 className="hero-title">BLACK MULTIPLAYER</h1>
      <p className="hero-subtitle">
        O clássico FPS da Criterion (2006) rodando nativamente no Windows com <strong>modo multiplayer online</strong>. Partidas Team Deathmatch (Black Ops vs. Seventh Wave) a 60+ FPS com suporte a teclado e mouse.
      </p>

      <div className="hero-buttons">
        <a href="#servers" className="btn btn-primary">
          <Gamepad2 size={18} />
          <span>Onde Jogar (Servidores)</span>
        </a>
        <a 
          href="https://github.com/Peterson047/BLACK-XBEMultiplayer/releases" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
        >
          <Download size={18} />
          <span>Baixar Jogo (Alpha Build)</span>
        </a>
        <a 
          href="https://discord.gg/szt9HJYjDt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-discord"
        >
          <MessageSquare size={18} />
          <span>Entrar no Discord</span>
        </a>
      </div>
    </section>
  );
}
