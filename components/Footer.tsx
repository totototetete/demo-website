'use client';

import { Twitter, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// フッターコンポーネント
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* ロゴ・SNSリンク */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <span className="text-2xl font-black italic tracking-tighter text-[#002b5b]">
              HEnDA <span className="text-amber-500">Friends</span>
            </span>
          </div>
          <div className="flex gap-6 text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} aria-hidden="true" />
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* フッターナビゲーション */}
        <nav
          className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-bold text-slate-500 uppercase tracking-widest"
          aria-label="フッターナビゲーション"
        >
          <a href="#" className="hover:text-blue-800 transition-colors">
            {t.nav.beginners}
          </a>
          <a href="#" className="hover:text-blue-800 transition-colors">
            {t.nav.support}
          </a>
          <a href="#" className="hover:text-blue-800 transition-colors">
            {t.nav.matching}
          </a>
          <a href="#" className="hover:text-blue-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-800 transition-colors">
            Contact
          </a>
        </nav>

        {/* コピーライト */}
        <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
          © 2026 HEnDA Friends / All Japan High School English Debate Association.
        </p>
      </div>
    </footer>
  );
}
