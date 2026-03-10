'use client';

import Image from 'next/image';
import { Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// Xロゴコンポーネント
const XLogo = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// フッターコンポーネント
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* ロゴ・SNSリンク */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="HEnDA Friends"
              width={100}
              height={30}
              className="h-auto w-auto"
            />
          </div>
          <div className="flex gap-6 text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} />
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
