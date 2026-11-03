import React from 'react';

export default function HostGuide() {
  return (
    <section id="host" className="section container">
      <span className="section-tag">// PARA HOSPEDADORES DE SERVIDORES</span>
      <h2 className="section-title">QUER CRIAR SEU PRÓPRIO SERVIDOR?</h2>
      <p className="section-desc">
        O servidor dedicado roda em Linux (Ubuntu / Debian) de forma leve (~400 MB RAM) com suporte a rotação automática e console de comandos.
      </p>

      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        padding: '1.5rem',
        borderRadius: '6px',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          color: '#fff',
          marginBottom: '0.5rem'
        }}>
          Como subir o servidor no Linux (VPS / WSL):
        </h3>
        <div className="code-box">
          <span style={{ color: 'var(--amber)' }}># 1. Instale as dependências:</span><br />
          sudo apt install -y xvfb python3 mesa-vulkan-drivers libvulkan1 libshaderc1 libssl3t64<br /><br />
          <span style={{ color: 'var(--amber)' }}># 2. Compile e configure:</span><br />
          ./build.sh && server/setup.sh<br /><br />
          <span style={{ color: 'var(--amber)' }}># 3. Inicie na porta desejada (UDP):</span><br />
          server/run.sh 1508 "Meu Servidor BLACK"
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Para gerenciar a partida sem reiniciar o processo, use o console: <code style={{ color: 'var(--amber)', fontFamily: 'var(--font-mono)' }}>server/cmd.sh status</code>, <code style={{ color: 'var(--amber)', fontFamily: 'var(--font-mono)' }}>server/cmd.sh restart</code> ou <code style={{ color: 'var(--amber)', fontFamily: 'var(--font-mono)' }}>server/cmd.sh kick &lt;id&gt;</code>.
        </p>
      </div>
    </section>
  );
}
