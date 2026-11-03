import React from 'react';

export default function HowToPlay() {
  return (
    <section id="setup" className="section container">
      <span className="section-tag">// TUTORIAL DE INSTALAÇÃO</span>
      <h2 className="section-title">COMO JOGAR EM 3 PASSOS</h2>
      <p className="section-desc">
        O mod roda de forma nativa no Windows 10/11 (64-bit) com placa de vídeo compatível com Vulkan.
      </p>

      <div className="steps-grid">
        {/* Passo 1 */}
        <div className="step-card">
          <div className="step-num">01</div>
          <h3 className="step-title">BAIXE O CLIENTE</h3>
          <p className="step-desc">
            Baixe a versão Alpha mais recente no repositório <a href="https://github.com/Peterson047/BLACK-XBEMultiplayer/releases" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)' }}>BLACK-XBEMultiplayer</a> e descompacte a pasta no seu computador.
          </p>
        </div>

        {/* Passo 2 */}
        <div className="step-card">
          <div className="step-num">02</div>
          <h3 className="step-title">COLOQUE SUA ISO</h3>
          <p className="step-desc">
            Coloque o arquivo da sua cópia legal do jogo (<strong>Black.iso</strong> de Xbox Original) dentro da pasta <code style={{ color: 'var(--amber)', fontFamily: 'var(--font-mono)' }}>assets\</code>. O jogo gera os pacotes multiplayer sozinho na primeira vez.
          </p>
        </div>

        {/* Passo 3 */}
        <div className="step-card">
          <div className="step-num">03</div>
          <h3 className="step-title">ABRA E CONECTE</h3>
          <p className="step-desc">
            Execute o <strong style={{ color: '#fff' }}>BLACK.exe</strong>. Aperte <strong style={{ color: 'var(--amber)' }}>F10</strong> para abrir o menu multiplayer, cole o IP do servidor e clique em <strong>Connect by IP</strong>!
          </p>
        </div>
      </div>
    </section>
  );
}
