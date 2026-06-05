import { Suspense } from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import PickupSection from '@/components/PickupSection';
import NewsSection from '@/components/NewsSection';
import BeginnersSection from '@/components/BeginnersSection';
import DebatersSection from '@/components/DebatersSection';
import FansSection from '@/components/FansSection';
import MovieSection from '@/components/MovieSection';
import Footer from '@/components/Footer';

// ローディングフォールバックコンポーネント
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16" aria-label="Loading">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
    </div>
  );
}

// メインページコンポーネント（Server Component）
export default function Home() {
  return (
    <main>
      {/* ヘッダー */}
      <Header />

      {/* ヒーロースライダー */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSlider />
      </Suspense>

      {/* ピックアップセクション */}
      <Suspense fallback={<SectionLoader />}>
        <PickupSection />
      </Suspense>

      {/* ニュースセクション */}
      <Suspense fallback={<SectionLoader />}>
        <NewsSection />
      </Suspense>

      {/* 初心者向けセクション */}
      <Suspense fallback={<SectionLoader />}>
        <BeginnersSection />
      </Suspense>

      {/* ディベーター向けセクション */}
      <Suspense fallback={<SectionLoader />}>
        <DebatersSection />
      </Suspense>

      {/* ファン向けセクション */}
      <Suspense fallback={<SectionLoader />}>
        <FansSection />
      </Suspense>

      {/* 動画セクション */}
      <Suspense fallback={<SectionLoader />}>
        <MovieSection />
      </Suspense>

      {/* フッター */}
      <Footer />
    </main>
  );
}
