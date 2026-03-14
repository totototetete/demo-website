'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface HeroSlide {
  id: number;
  image: {
    ja: string;
    en: string;
  };
  title: {
    ja: string;
    en: string;
  };
  subtitle: {
    ja: string;
    en: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: {
      ja: '/images/hero-1-ja.jpg',
      en: '/images/hero-1-en.jpg',
    },
    title: {
      ja: '全国の高校英語ディベーターをつなぐ',
      en: 'Connecting High School Debaters Nationwide',
    },
    subtitle: {
      ja: 'HEnDA Friendsへようこそ',
      en: 'Welcome to HEnDA Friends',
    },
  },
  {
    id: 2,
    image: {
      ja: '/images/hero-2-ja.jpg',
      en: '/images/hero-2-en.jpg',
    },
    title: {
      ja: 'ディベート仲間を見つけよう',
      en: 'Find Your Debate Partner',
    },
    subtitle: {
      ja: 'マッチング機能で全国の仲間とつながる',
      en: 'Connect with debaters across the country',
    },
  },
  {
    id: 3,
    image: {
      ja: '/images/hero-3-ja.jpg',
      en: '/images/hero-3-en.jpg',
    },
    title: {
      ja: 'イベント情報をチェック',
      en: 'Check Event Information',
    },
    subtitle: {
      ja: '大会・練習会・セミナー情報を随時更新',
      en: 'Tournament, practice, and seminar updates',
    },
  },
];

const PLACEHOLDER_IMAGE = '/images/placeholder.jpg';
// 縦横比 1680:1040 = 61.905...vw、高さ上限 500px
const HERO_HEIGHT_STYLE = { height: `min(${(1040 / 1680) * 100}vw, 500px)` } as const;

// ヒーロースライダーコンポーネント
export default function HeroSlider() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  // 自動スライド（手動操作後にタイマーをリセット）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlayKey]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setAutoPlayKey((prev) => prev + 1);
  };

  const handleImageError = (slideId: number) => {
    setImageErrors((prev) => ({ ...prev, [slideId]: true }));
  };

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden" aria-label="ヒーローセクション">
      {/* スライドコンテナ */}
      <div className="relative">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            role="region"
            aria-live="polite"
          >
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full px-0 md:px-8 lg:px-16"
                aria-hidden={index !== currentSlide}
              >
                {/* 縦横比 1680:1040 ≈ 61.9vw、高さ上限 500px */}
                <div className="relative w-full" style={HERO_HEIGHT_STYLE}>
                  <div className="absolute inset-0">
                    <Image
                      src={imageErrors[slide.id] ? PLACEHOLDER_IMAGE : slide.image[lang]}
                      alt={slide.title[lang]}
                      fill
                      className="object-cover rounded-none md:rounded-lg"
                      priority={index === 0}
                      onError={() => handleImageError(slide.id)}
                    />
                    {/* オーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-none md:rounded-lg" />

                    {/* テキストコンテンツ */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 text-white">
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 drop-shadow-lg">
                        {slide.title[lang]}
                      </h2>
                      <p className="text-sm md:text-lg lg:text-xl font-bold drop-shadow-md">
                        {slide.subtitle[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 前へボタン */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
          aria-label="前のスライド"
        >
          <ChevronLeft size={24} className="text-white" aria-hidden="true" />
        </button>

        {/* 次へボタン */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
          aria-label="次のスライド"
        >
          <ChevronRight size={24} className="text-white" aria-hidden="true" />
        </button>

        {/* インジケーター */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="スライド選択">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); setAutoPlayKey((prev) => prev + 1); }}
              className={`h-2 md:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-6 md:w-8'
                  : 'w-2 md:w-3 bg-white/50 hover:bg-white/75'
              }`}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`スライド${index + 1}へ移動`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
