'use client';

import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useSlider } from '@/hooks/useSlider';

// ヒーロースライダーコンポーネント
export default function HeroSlider() {
  const { t } = useLanguage();
  const { currentSlide, goToNext, goToPrev } = useSlider({
    totalSlides: t.hero.length,
    autoPlayInterval: 5000,
  });

  return (
    <section
      className="relative overflow-hidden bg-black md:h-[500px]"
      aria-label="ヒーローセクション"
    >
      {/* スライドコンテナ */}
      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        role="region"
        aria-live="polite"
      >
        {t.hero.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 relative bg-gradient-to-br from-slate-900 to-blue-900 min-h-[300px] md:min-h-0"
            aria-hidden={i !== currentSlide}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl font-bold text-amber-400">{slide.sub}</p>
              <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-black py-3 px-10 rounded-full shadow-xl transition-all hover:scale-105">
                {t.sections.learnMore}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 前へボタン */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/50 hover:scale-110 transition-transform"
        aria-label="前のスライドへ"
      >
        <ChevronLeft size={40} aria-hidden="true" />
      </button>

      {/* 次へボタン */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white hover:bg-black/50 hover:scale-110 transition-transform"
        aria-label="次のスライドへ"
      >
        <ChevronRight size={40} aria-hidden="true" />
      </button>

      {/* スライドインジケーター */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="スライド選択">
        {t.hero.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? 'w-6 bg-amber-500' : 'w-2 bg-white/50'
            }`}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`スライド ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
