'use client';

import { useLanguageContext } from '@/contexts/LanguageContext';

// 言語切り替えカスタムフック
export function useLanguage() {
  return useLanguageContext();
}
