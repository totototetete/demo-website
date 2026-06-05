'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getFanItems } from '@/lib/api/fans';
import type { FanItem } from '@/lib/api/types';

// ファン向けセクションコンポーネント
export default function FansSection() {
  const { lang, t } = useLanguage();
  const [items, setItems] = useState<FanItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const data = await getFanItems();
      if (isMounted) {
        setItems(data);
      }
    };
    void load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      className="bg-white py-16"
      aria-label={lang === 'ja' ? 'OB・OG・サポーターの方へ' : 'For alumni and supporters'}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-10 text-center flex flex-col items-center">
          <h2 className="text-3xl font-black italic text-[#002b5b] flex items-center justify-center gap-2 uppercase tracking-tighter">
            <Heart className="text-amber-500" aria-hidden="true" />
            {t.sections.forFans}
          </h2>
          <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
            {t.sections.fanSub}
          </p>
        </div>

        {/* ファンカードリスト */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all border border-slate-100"
              aria-label={item.label[lang]}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.label[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-4 left-4 text-white font-black text-sm tracking-tight">
                  {item.label[lang]}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-slate-500 leading-relaxed">{item.desc[lang]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
