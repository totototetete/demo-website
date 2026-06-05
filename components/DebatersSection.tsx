'use client';

import { MessageSquare, Calendar, Users, BookOpen, ChevronRight, Trophy, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { DEBATER_CARDS } from '@/lib/constants/debaterCards';
import { ROUTES } from '@/lib/routes';

// アイコンリスト（インデックスで対応）
const icons = [
  <MessageSquare key="msg" size={28} aria-hidden="true" />,
  <Calendar key="cal" size={28} aria-hidden="true" />,
  <Users key="users" size={28} aria-hidden="true" />,
  <BookOpen key="book" size={28} aria-hidden="true" />,
];

// 背景色クラスリスト
const bgColors = ['bg-blue-600', 'bg-indigo-600', 'bg-slate-700', 'bg-blue-800'];

// ディベーター向けセクションコンポーネント
export default function DebatersSection() {
  const { lang, t } = useLanguage();
  const items = DEBATER_CARDS[lang];

  return (
    <section className="bg-slate-50 py-16" aria-label={lang === 'ja' ? 'ディベーターの方へ' : 'For debaters'}>
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl font-black italic text-[#002b5b] flex items-center justify-center gap-2 uppercase tracking-tighter">
            <Trophy className="text-amber-500" aria-hidden="true" />
            {t.sections.forDebaters}
          </h2>
          <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
            {t.sections.debaterSub}
          </p>
        </div>

        {/* コンテンツグリッド */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-xl sm:items-center sm:gap-6 sm:p-6"
              aria-label={item.title}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg ${bgColors[i % bgColors.length]}`}
              >
                {icons[i]}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-1">{item.desc}</p>
              </div>
              <ChevronRight
                className="ml-auto text-slate-300 group-hover:text-amber-500 transition-colors"
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href={ROUTES.dashboard}
            className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-xl sm:items-center sm:gap-6 sm:p-6"
            aria-label={t.nav.dashboard}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#002b5b] text-white shadow-lg">
              <LayoutDashboard size={28} aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight">
                {t.nav.dashboard}
              </h3>
              <p className="mt-1 text-xs font-bold text-slate-500">{t.dashboard.subtitle}</p>
            </div>
            <ChevronRight
              className="ml-auto text-slate-300 group-hover:text-amber-500 transition-colors"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
