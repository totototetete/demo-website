import { getWixClient } from '@/lib/api/client';
import { ROUTES } from '@/lib/routes';
import type { FanItem } from '@/lib/api/types';

const PLACEHOLDER_FAN_ITEMS: FanItem[] = [
  {
    id: 1,
    label: { ja: 'イベント名', en: 'Event title' },
    desc: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 2,
    label: { ja: 'イベント名', en: 'Event title' },
    desc: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 3,
    label: { ja: 'イベント名', en: 'Event title' },
    desc: { ja: 'ニュースサブタイトル', en: 'News subtitle' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
];

async function fetchFanItemsFromCms(_client: unknown): Promise<FanItem[]> {
  throw new Error('Wix CMS integration is not implemented yet');
}

export async function getFanItems(): Promise<FanItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return await fetchFanItemsFromCms(client);
  } catch {
    return PLACEHOLDER_FAN_ITEMS;
  }
}
