'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseSliderOptions {
  totalSlides: number;
  autoPlayInterval?: number;
}

interface UseSliderReturn {
  currentSlide: number;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
}

// スライダーカスタムフック
export function useSlider({ totalSlides, autoPlayInterval = 5000 }: UseSliderOptions): UseSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 次のスライドへ（メモ化）
  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // 前のスライドへ（メモ化）
  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // 特定のスライドへ（メモ化）
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // 自動再生タイマー
  useEffect(() => {
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval]);

  return { currentSlide, goToNext, goToPrev, goToSlide };
}
