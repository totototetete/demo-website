'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Youtube,
  Twitter,
  Instagram,
  Menu,
  X,
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Users,
  BookOpen,
  Globe,
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

// ヘッダーコンポーネント
export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // メニュー開閉トグル（メモ化）
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // ナビゲーションアイテム
  const navItems = [
    { label: t.nav.beginners, icon: <BookOpen size={16} aria-hidden="true" /> },
    { label: t.nav.support, icon: <Users size={16} aria-hidden="true" /> },
    { label: t.nav.rules, icon: <Calendar size={16} aria-hidden="true" /> },
    { label: t.nav.dashboard, icon: <LayoutDashboard size={16} aria-hidden="true" /> },
    { label: t.nav.matching, icon: <MessageSquare size={16} aria-hidden="true" /> },
    { label: t.nav.alumni, icon: <Users size={16} aria-hidden="true" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#002b5b] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:h-20">
        {/* ロゴ・サイトタイトル */}
        <div className="flex items-center gap-4">
          <div
            className="bg-white p-2 rounded shadow-inner cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="ホームへ戻る"
            onClick={() => router.push('/')}
            onKeyDown={(e) => e.key === 'Enter' && router.push('/')}
          >
            <span className="text-xl font-black italic tracking-tighter text-[#002b5b]">
              HEnDA <span className="text-amber-500">Friends</span>
            </span>
          </div>
          <h1 className="hidden text-[10px] font-bold leading-tight text-slate-200 lg:block max-w-[240px]">
            {t.siteTitle}
          </h1>
        </div>

        {/* アクションボタン群 */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          {/* 言語切り替えボタン */}
          <button
            onClick={toggleLang}
            aria-label={lang === 'ja' ? 'Switch to English' : '日本語に切り替え'}
            className="flex items-center gap-1.5 rounded-full border border-blue-400 px-3 py-1 text-[11px] font-black hover:bg-white hover:text-[#002b5b] transition-all"
          >
            <Globe size={14} aria-hidden="true" />
            <span>{lang === 'ja' ? 'EN' : 'JP'}</span>
          </button>

          {/* 検索ボタン */}
          <button
            className="flex flex-col items-center gap-0.5 hover:text-amber-400 transition-colors"
            aria-label="検索"
          >
            <Search size={18} aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-tight">SEARCH</span>
          </button>

          {/* SNSリンク */}
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 hover:text-amber-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={18} aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-tight">YouTube</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 hover:text-amber-400 transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter size={18} aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-tight">X</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 hover:text-amber-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-tight">Instagram</span>
          </a>

          {/* モバイルメニューボタン */}
          <button
            onClick={toggleMenu}
            className="ml-2 rounded-full bg-amber-500 p-2 text-white md:hidden"
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* デスクトップナビゲーション */}
      <nav className="hidden border-t border-blue-800 bg-[#001f42] md:block text-white" aria-label="メインナビゲーション">
        <ul className="mx-auto flex max-w-7xl justify-between px-4">
          {navItems.map((item, i) => (
            <li key={i} className="group relative flex-1 border-r border-blue-800 last:border-r-0">
              <a
                href="#"
                className="flex h-12 flex-col items-center justify-center gap-1 transition-all group-hover:bg-blue-800"
              >
                <span className="text-amber-400">{item.icon}</span>
                <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <nav
          className="border-t border-blue-800 bg-[#001f42] md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="py-2">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 text-sm font-bold hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-amber-400">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
