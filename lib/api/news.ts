import { getWixClient } from '@/lib/api/client';
import { ROUTES } from '@/lib/routes';
import type { NewsItem } from '@/lib/api/types';

const PLACEHOLDER_NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: { ja: 'イベント名', en: 'イベント名' },
    title: { ja: 'ニュースタイトル', en: 'ニュースタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 2,
    category: { ja: 'イベント名', en: 'イベント名' },
    title: { ja: 'ニュースタイトル', en: 'ニュースタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 3,
    category: { ja: 'イベント名', en: 'イベント名' },
    title: { ja: 'ニュースタイトル', en: 'ニュースタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 4,
    category: { ja: 'イベント名', en: 'イベント名' },
    title: { ja: 'ニュースタイトル', en: 'ニュースタイトル' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
];

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return PLACEHOLDER_NEWS_ITEMS;
  } catch {
    return PLACEHOLDER_NEWS_ITEMS;
  }
}
