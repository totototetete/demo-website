import { getWixClient } from '@/lib/api/client';
import { ROUTES } from '@/lib/routes';
import type { NewsItem } from '@/lib/api/types';

const PLACEHOLDER_NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: { ja: 'イベント名', en: 'Event' },
    title: { ja: 'ニュースタイトル', en: 'News title' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 2,
    category: { ja: 'イベント名', en: 'Event' },
    title: { ja: 'ニュースタイトル', en: 'News title' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 3,
    category: { ja: 'イベント名', en: 'Event' },
    title: { ja: 'ニュースタイトル', en: 'News title' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
  {
    id: 4,
    category: { ja: 'イベント名', en: 'Event' },
    title: { ja: 'ニュースタイトル', en: 'News title' },
    subtitle: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    date: '2026.01.01',
    imageUrl: '/images/placeholder.jpg',
    href: ROUTES.news,
  },
];

async function fetchNewsItemsFromCms(_client: unknown): Promise<NewsItem[]> {
  throw new Error('Wix CMS integration is not implemented yet');
}

export async function getNewsItems(): Promise<NewsItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return await fetchNewsItemsFromCms(client);
  } catch {
    return PLACEHOLDER_NEWS_ITEMS;
  }
}
