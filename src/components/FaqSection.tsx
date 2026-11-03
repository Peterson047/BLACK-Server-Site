'use client';

import React, { useState } from 'react';

interface FaqItemData {
  q: string;
  a: React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItemData[] = [
    {
      q: 'Preciso de emulador (PCSX2, RPCS3 ou Xemu) instalado para jogar?',
      a: (
        <p>
          <strong>Não!</strong> O projeto utiliza engenharia reversa estática e recompilação do executável original para gerar código nativo C++ x86-64. O jogo roda diretamente pelo <code>BLACK.exe</code> no Windows com desempenho altíssimo, tempos de carregamento instantâneos e sem o peso ou configurações complexas de um emulador.
        </p>
      )
    },
    {
      q: 'Onde consigo o arquivo Black.iso e qual versão devo usar?',
      a: (
        <p>
          Você deve usar a sua cópia original do jogo <strong>BLACK para Xbox Original</strong> em formato ISO. Renomeie o arquivo para <code>Black.iso</code> e coloque na pasta <code>assets\</code>. Na primeira inicialização, o motor extrai e prepara os arquivos automaticamente.
        </p>
      )
    },
    {
      q: 'Funciona com controle de Xbox e PlayStation?',
      a: (
        <p>
          <strong>Sim!</strong> O suporte a controles via XInput e DirectInput é 100% nativo. Controles de Xbox 360, Xbox One/Series e PlayStation (DualShock 4 / DualSense) funcionam imediatamente com vibração e mapeamento idêntico ao console original.
        </p>
      )
    },
    {
      q: 'Como funciona a compra de armas durante a partida?',
      a: (
        <p>
          Ao entrar na partida ou quando renascer na base da sua equipe, pressione a tecla <kbd className="hud-key-small">B</kbd>. Um menu tático abrirá permitindo escolher armas primárias icônicas (M16A2, AK-47, G36C, SPAS-12, Remington 870, Walther WA2000) e secundárias (Glock 19, Magnum, MP5).
        </p>
      )
    },
    {
      q: 'Como funciona a rotação e o reinício das partidas no servidor?',
      a: (
        <p>
          O servidor dedicado é 24/7 e autoritativo. Ao final da partida de Team Deathmatch, a tela de vitória/derrota é exibida para todos os jogadores e uma nova rodada começa <strong>automaticamente após 15 segundos</strong>, sem travar ou depender da ação manual de nenhum jogador.
        </p>
      )
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section container">
      <span className="section-tag">// DÚVIDAS FREQUENTES</span>
      <h2 className="section-title">PERGUNTAS FREQUENTES</h2>
      <p className="section-desc">Tudo o que você precisa saber para entrar em combate sem dificuldades:</p>

      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`faq-item ${isOpen ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
