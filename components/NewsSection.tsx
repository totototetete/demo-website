'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { NEWS_DATA } from '@/lib/constants/newsData';
import { ROUTES } from '@/lib/routes';

// ニュースセクションコンポーネント（フィルタリング機能付き）
export default function NewsSection() {
  const { lang, t } = useLanguage();
  // 言語に依存しないインデックスでタブを管理（言語切り替え時の不整合を防ぐ）
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // 現在のアクティブカテゴリ名（言語に対応）
  const activeTab = t.newsCats[activeTabIndex] ?? t.newsCats[0];

  // フィルタリングされたニュースデータ（メモ化）
  const filteredNews = useMemo(() => {
    // インデックス0は「すべて/All」（全件表示）
    if (activeTabIndex === 0) {
      return NEWS_DATA;
    }
    return NEWS_DATA.filter((news) => news.category[lang] === activeTab);
  }, [activeTabIndex, activeTab, lang]);

  return (
    <section className="py-12" aria-label="ニュース">
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-2 bg-[#002b5b]" aria-hidden="true"></div>
          <h2 className="text-2xl font-black text-[#002b5b] italic tracking-wider uppercase">
            {t.sections.news}
          </h2>
        </div>

        {/* カテゴリタブ */}
        <div className="mb-8 border-b border-gray-200 overflow-x-auto">
          <ul className="flex gap-4 pb-px min-w-max" role="tablist" aria-label="ニュースカテゴリ">
            {t.newsCats.map((cat, index) => (
              <li key={cat} role="presentation">
                <button
                  onClick={() => setActiveTabIndex(index)}
                  role="tab"
                  aria-selected={activeTabIndex === index}
                  className={`whitespace-nowrap pb-4 px-2 text-sm font-bold transition-all ${
                    activeTabIndex === index
                      ? 'border-b-4 border-amber-500 text-blue-900'
                      : 'text-gray-400 hover:text-blue-600'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ニュースグリッド */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" role="tabpanel">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <a
                key={news.id}
                href={ROUTES.news}
                className="group bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
                aria-label={news.title[lang]}
              >
                <div className="aspect-video w-full mb-3 overflow-hidden rounded bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={news.imageUrl}
                    alt={news.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mb-2 text-[10px] font-bold text-blue-600 uppercase tracking-tighter">
                  [{news.category[lang]}]
                </p>
                <h3 className="mb-3 text-sm font-bold leading-tight group-hover:text-amber-600 transition-colors">
                  {news.title[lang]}
                </h3>
                <p className="text-[10px] text-gray-400 font-bold">
                  <time dateTime={news.date}>{news.date}</time>
                </p>
              </a>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              {lang === 'ja' ? 'ニュースがありません' : 'No news available'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
