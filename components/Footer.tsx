'use client';

import Image from 'next/image';
import { Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { ROUTES } from '@/lib/routes';

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
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* ロゴ・SNSリンク */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/images/logo-light.svg"
              alt="HEnDA Friends"
              width={512}
              height={129}
              className="w-[280px] h-auto"
            />
          </div>
          <div className="flex gap-6 text-slate-400">
            <a
              href="https://twitter.com/hendafriends"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} />
            </a>
            <a
              href="https://www.youtube.com/@WIP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/hendafriends"
              target="_blank"
              rel="noopener noreferrer"
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
          aria-label={lang === 'ja' ? 'フッターナビゲーション' : 'Footer navigation'}
        >
          <a href={ROUTES.beginners} className="hover:text-blue-800 transition-colors">
            {t.nav.beginners}
          </a>
          <a href={ROUTES.support} className="hover:text-blue-800 transition-colors">
            {t.nav.support}
          </a>
          <a href={ROUTES.matching} className="hover:text-blue-800 transition-colors">
            {t.nav.matching}
          </a>
          <a href={ROUTES.privacy} className="hover:text-blue-800 transition-colors">
            Privacy Policy
          </a>
          <a href={ROUTES.contact} className="hover:text-blue-800 transition-colors">
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
