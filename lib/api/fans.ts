import { getWixClient } from '@/lib/api/client';
import { ROUTES } from '@/lib/routes';
import type { FanItem } from '@/lib/api/types';

const PLACEHOLDER_FAN_ITEMS: FanItem[] = [
  {
    id: 1,
    label: { ja: 'イベント名', en: 'イベント名' },
    desc: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 2,
    label: { ja: 'イベント名', en: 'イベント名' },
    desc: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 3,
    label: { ja: 'イベント名', en: 'イベント名' },
    desc: { ja: 'ニュースサブタイトル', en: 'ニュースサブタイトル' },
    href: ROUTES.alumni,
    imageUrl: '/images/placeholder.jpg',
  },
];

export async function getFanItems(): Promise<FanItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return PLACEHOLDER_FAN_ITEMS;
  } catch {
    return PLACEHOLDER_FAN_ITEMS;
  }
}
