'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
  t: translations.pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    // 1. Verifica se o usuário já escolheu manualmente
    const saved = localStorage.getItem('black_lang') as Language | null;
    if (saved === 'pt' || saved === 'en') {
      setLangState(saved);
      return;
    }

    // 2. Detecção automática baseada no idioma do sistema/navegador
    const userLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
    if (userLang.toLowerCase().startsWith('pt')) {
      setLangState('pt');
    } else {
      setLangState('en');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('black_lang', newLang);
    } catch {
      // Ignore if localStorage is unavailable
    }
  };

  const t = translations[lang] || translations.pt;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
