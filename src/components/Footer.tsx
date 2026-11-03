import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>
          BLACK MULTIPLAYER MOD &bull; CRIADO PELA COMUNIDADE
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Baseado no projeto <a href="https://github.com/TGP482/BLACK-XBERecomp" target="_blank" rel="noopener noreferrer">BLACK-XBERecomp</a>. Código-fonte do multiplayer disponível no <a href="https://github.com/Peterson047/BLACK-Coop" target="_blank" rel="noopener noreferrer">BLACK-Coop</a>.
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>
          Este é um projeto não-oficial feito por fãs. <em>BLACK</em> é marca registrada da Criterion Games / Electronic Arts.
        </p>
      </div>
    </footer>
  );
}
