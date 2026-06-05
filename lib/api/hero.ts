import { getWixClient } from '@/lib/api/client';
import type { HeroSlide } from '@/lib/api/types';

const PLACEHOLDER_HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: { ja: '/images/placeholder.jpg', en: '/images/placeholder.jpg' },
    title: { ja: 'お知らせタイトル', en: 'お知らせタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
  },
  {
    id: 2,
    image: { ja: '/images/placeholder.jpg', en: '/images/placeholder.jpg' },
    title: { ja: 'お知らせタイトル', en: 'お知らせタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
  },
  {
    id: 3,
    image: { ja: '/images/placeholder.jpg', en: '/images/placeholder.jpg' },
    title: { ja: 'お知らせタイトル', en: 'お知らせタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
  },
];

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return PLACEHOLDER_HERO_SLIDES;
  } catch {
    return PLACEHOLDER_HERO_SLIDES;
  }
}
