'use client';

import { Play, BookOpen, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { ROUTES } from '@/lib/routes';

// アイコンリスト（インデックスで対応）
const icons = [
  <Play key="play" fill="currentColor" size={40} aria-hidden="true" />,
  <BookOpen key="book" size={40} aria-hidden="true" />,
  <GraduationCap key="grad" size={40} aria-hidden="true" />,
];

// 初心者向けセクションコンポーネント
export default function BeginnersSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 border-t border-slate-200" aria-label="はじめての方へ">
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl font-black italic text-[#002b5b] flex items-center justify-center gap-2 uppercase tracking-tighter">
            <BookOpen className="text-amber-500" aria-hidden="true" />
            {t.sections.forBeginners}
          </h2>
          <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
            {t.sections.beginnerSub}
          </p>
        </div>

        {/* コンテンツグリッド */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
          {t.items.beginner.map((item, i) => (
            <a
              key={i}
              href={ROUTES.beginners}
              className="group flex flex-col items-center bg-slate-50 p-8 rounded-2xl border-2 border-transparent hover:border-amber-500 hover:bg-white transition-all shadow-sm"
              aria-label={item.title}
            >
              <div className="mb-6 rounded-full bg-amber-100 p-6 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="mb-3 text-lg font-black text-slate-800 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-slate-500 leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
