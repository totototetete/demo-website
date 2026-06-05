'use client';

import { useEffect, useMemo, useState } from 'react';
import { Youtube, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getMovies } from '@/lib/api/movies';
import type { MovieItem } from '@/lib/api/types';

// 動画セクションコンポーネント
export default function MovieSection() {
  const { lang, t } = useLanguage();
  const [movies, setMovies] = useState<MovieItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const data = await getMovies();
      if (isMounted) {
        setMovies(data);
      }
    };
    void load();
    return () => {
      isMounted = false;
    };
  }, []);

  const mainMovie = useMemo(() => movies[0], [movies]);
  const sideMovies = useMemo(() => movies.slice(1), [movies]);

  return (
    <section
      className="bg-[#002b5b] py-16 text-white overflow-hidden"
      aria-label="動画セクション"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* セクションタイトル */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <Youtube className="text-amber-500" size={36} aria-hidden="true" />
            <h2 className="text-3xl font-black tracking-tighter italic uppercase">
              {t.sections.movie}
            </h2>
          </div>
          <p className="text-lg font-bold text-slate-300 tracking-tight">
            {t.sections.movieSub}
          </p>
        </div>

        {/* 動画グリッド */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* メイン動画 */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl group cursor-pointer bg-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainMovie?.thumbnailUrl ?? '/images/placeholder.jpg'}
                alt={mainMovie?.title[lang] ?? ''}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <div className="rounded-full bg-amber-500 p-6 text-white shadow-lg scale-90 group-hover:scale-100 transition-transform">
                  <Play fill="white" size={40} aria-hidden="true" />
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold tracking-tight">{mainMovie?.title[lang] ?? ''}</h3>
          </div>

          {/* 動画リスト */}
          <div
            className="flex flex-col gap-4 overflow-y-auto max-h-[450px] pr-2"
            aria-label="動画リスト"
          >
            {sideMovies.map((m) => (
              <div
                key={m.id}
                className="flex gap-4 p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={m.title[lang]}
                onKeyDown={(e) => { if (e.key === 'Enter') { /* 動画再生処理をここに追加 */ } }}
              >
                <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.thumbnailUrl}
                    alt={m.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/80 px-1 text-[8px] font-bold rounded">
                    {m.time}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[11px] font-bold leading-tight group-hover:text-amber-400 transition-colors">
                    {m.title[lang]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
