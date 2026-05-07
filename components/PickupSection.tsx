'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { PICKUP_DATA } from '@/lib/constants/pickupData';

// ピックアップセクションコンポーネント
export default function PickupSection() {
  const { lang, t } = useLanguage();
  const items = PICKUP_DATA[lang];

  return (
    <section className="bg-[#002b5b] py-12" aria-label="ピックアップ">
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-2 bg-amber-500" aria-hidden="true"></div>
          <h2 className="text-2xl font-black text-white italic tracking-wider uppercase">
            {t.sections.pickup}
          </h2>
        </div>

        {/* ピックアップグリッド */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
              aria-label={item.title}
            >
              <div className="relative overflow-hidden aspect-video bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/placeholder.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <span className="absolute left-2 top-2 bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase z-10">
                  {item.label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
