'use client';

import React, { useState } from 'react';
import { Menu, X, Disc as DiscordIcon } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#" className="brand">
        <span className="brand-title">BLACK</span>
        <span className="brand-badge">MULTIPLAYER</span>
      </a>

      <nav>
        <ul className="nav-links">
          <li><a href="#servers">Servidores</a></li>
          <li><a href="#setup">Como Jogar</a></li>
          <li><a href="#specs">Requisitos</a></li>
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#controls">Controles</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#host">Hospedar Servidor</a></li>
          <li>
            <a 
              href="https://discord.gg/szt9HJYjDt" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#5865F2', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              Discord
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid var(--border)',
          color: '#fff',
          padding: '0.4rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(8, 10, 14, 0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 99
        }}>
          <a href="#servers" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>SERVIDORES</a>
          <a href="#setup" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>COMO JOGAR</a>
          <a href="#specs" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>REQUISITOS</a>
          <a href="#screenshots" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>SCREENSHOTS</a>
          <a href="#controls" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>CONTROLES</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>FAQ</a>
          <a href="#host" onClick={() => setMobileOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>HOSPEDAR</a>
          <a href="https://discord.gg/szt9HJYjDt" target="_blank" rel="noopener noreferrer" style={{ color: '#5865F2', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>ENTRAR NO DISCORD</a>
        </div>
      )}
    </header>
  );
}
