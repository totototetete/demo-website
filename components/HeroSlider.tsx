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

// ヒーロー画像の原寸アスペクト比（高さ / 幅）
const HERO_ASPECT_H_OVER_W = 1040 / 1680;
// 高さの上限
const MAX_HERO_HEIGHT_PX = 500;
// 高さ上限に対応する最大幅: floor(500 * (1680/1040)) ≈ 807px
const MAX_HERO_WIDTH_PX = Math.floor(MAX_HERO_HEIGHT_PX / HERO_ASPECT_H_OVER_W);
// スライド間のギャップ: 表示画像幅の 20%（0.2X）
const PEEK_GAP_PX = MAX_HERO_WIDTH_PX * 0.2;
// 高さ / 幅 の比率をパーセンテージで表した値（imageContainerHeight の vw 計算に使用）
const HERO_ASPECT_VW_PCT = HERO_ASPECT_H_OVER_W * 100;
// 両脇への映り込みを表示し始めるビューポート幅の閾値
// アクティブ画像を中央配置したとき隣画像の右端がビューポート左端に到達する幅 = 1.4X
//   50vw - X/2 - 0.2X(gap) - X = 0  →  V = 1.4X
const PEEK_THRESHOLD_PX = Math.ceil(MAX_HERO_WIDTH_PX * 1.4);

// ヒーロースライダーコンポーネント
export default function HeroSlider() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [autoPlayKey, setAutoPlayKey] = useState(0);
  // peekMode: ビューポート幅 >= PEEK_THRESHOLD_PX のとき true
  // SSR との不一致を避けるため初期値は false（非ピーク表示）
  const [peekMode, setPeekMode] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${PEEK_THRESHOLD_PX}px)`);
    setPeekMode(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPeekMode(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

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

  // --- レイアウト計算 ---
  //
  // [非ピークモード] ビューポート幅 < PEEK_THRESHOLD_PX (1.4X ≈ 1130px)
  //   - 各スライドの幅: 100vw、映り込みなし、gap なし
  //   - translateX: -currentSlide × 100vw
  //
  // [ピークモード] ビューポート幅 >= PEEK_THRESHOLD_PX
  //   - 各スライドの幅: X px (= MAX_HERO_WIDTH_PX ≈ 807px)
  //   - スライド間のギャップ: 0.2X px (= PEEK_GAP_PX ≈ 161px) ← CSS flex gap
  //   - アクティブスライドをビューポート中央に配置
  //   - translateX: 50vw - X/2 - currentSlide × (X + 0.2X)
  //              = 50vw - X/2 - currentSlide × 1.2X
  //   - 隣接スライドはギャップを挟んで左右から映り込む
  //
  // 画像コンテナの高さ: min(HERO_ASPECT_H_OVER_W × 100vw, MAX_HERO_HEIGHT_PX)
  //   - ≤807px 時: アスペクト比に比例（高さは500px未満）
  //   - ≥807px 時: 500px に固定（クランプ）

  const PEEK_STEP_PX = MAX_HERO_WIDTH_PX + PEEK_GAP_PX; // 1スライド進むときの移動量 (1.2X)

  const trackTransform = peekMode
    ? `translateX(calc(50vw - ${MAX_HERO_WIDTH_PX / 2}px - ${currentSlide * PEEK_STEP_PX}px))`
    : `translateX(-${currentSlide * 100}vw)`;

  const slideWidth = peekMode ? `${MAX_HERO_WIDTH_PX}px` : '100vw';

  // 画像コンテナの高さ（アスペクト比を維持しつつ最大500px）
  const imageContainerHeight = `min(${HERO_ASPECT_VW_PCT}vw, ${MAX_HERO_HEIGHT_PX}px)`;

  // ナビボタンの水平位置:
  //   ピークモード: 画像の左右端より内側に配置
  //   非ピークモード: ビューポート端より内側
  const prevButtonLeft = peekMode
    ? `calc(50% - ${MAX_HERO_WIDTH_PX / 2}px + 0.5rem)`
    : '0.5rem';
  const nextButtonRight = peekMode
    ? `calc(50% - ${MAX_HERO_WIDTH_PX / 2}px + 0.5rem)`
    : '0.5rem';

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden" aria-label="ヒーローセクション">
      <div className="relative">
        {/* スライドトラック */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: trackTransform,
            ...(peekMode ? { gap: `${PEEK_GAP_PX}px` } : {}),
          }}
          role="region"
          aria-live="polite"
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 flex justify-center"
              style={{ width: slideWidth }}
              aria-hidden={index !== currentSlide}
            >
              {/*
               * 画像コンテナ:
               * - 非ピークモード: 幅 100vw のスライド内で maxWidth により最大 807px に制限し中央配置
               * - ピークモード: スライド自体が 807px なので自動的に全幅
               * グラデーションとテキストはこのコンテナ内に収まるため、
               * 常に実際の画像幅を超えることはない
               */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  maxWidth: `${MAX_HERO_WIDTH_PX}px`,
                  height: imageContainerHeight,
                }}
              >
                <Image
                  src={imageErrors[slide.id] ? PLACEHOLDER_IMAGE : slide.image[lang]}
                  alt={slide.title[lang]}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    index !== currentSlide ? 'opacity-50' : 'opacity-100'
                  }`}
                  priority={index === 0}
                  onError={() => handleImageError(slide.id)}
                />

                {/* グラデーションオーバーレイ（アクティブスライドのみ表示） */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 ${
                    index !== currentSlide ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* テキストコンテンツ（アクティブスライドのみ表示） */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 text-white transition-opacity duration-500 ${
                    index !== currentSlide ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 drop-shadow-lg">
                    {slide.title[lang]}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl font-bold drop-shadow-md">
                    {slide.subtitle[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 前へボタン */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
          style={{ left: prevButtonLeft }}
          aria-label="前のスライド"
        >
          <ChevronLeft size={24} className="text-white" aria-hidden="true" />
        </button>

        {/* 次へボタン */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all"
          style={{ right: nextButtonRight }}
          aria-label="次のスライド"
        >
          <ChevronRight size={24} className="text-white" aria-hidden="true" />
        </button>

        {/* ページネーションドット */}
        <div
          className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2"
          role="tablist"
          aria-label="スライド選択"
        >
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