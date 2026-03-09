'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language } from '@/lib/types';
import { dict } from '@/lib/constants/dictionary';
import { Dict } from '@/lib/types';

// 言語コンテキストの型定義
interface LanguageContextType {
  lang: Language;
  t: Dict;
  toggleLang: () => void;
}

// 言語コンテキストの作成
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 言語プロバイダーコンポーネント
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ja');

  // 言語切り替え関数（メモ化）
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ja' ? 'en' : 'ja'));
  }, []);

  const t = dict[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 言語コンテキストを使用するカスタムフック
export function useLanguageContext(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
