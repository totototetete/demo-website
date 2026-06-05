import { getWixClient } from '@/lib/api/client';
import { ROUTES } from '@/lib/routes';
import type { PickupItem } from '@/lib/api/types';

const PLACEHOLDER_PICKUP_ITEMS: PickupItem[] = [
  {
    id: 1,
    title: { ja: 'ピックアップ', en: 'ピックアップ' },
    label: 'PICKUP',
    href: ROUTES.matching,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 2,
    title: { ja: 'ピックアップ', en: 'ピックアップ' },
    label: 'PICKUP',
    href: ROUTES.rules,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 3,
    title: { ja: 'ピックアップ', en: 'ピックアップ' },
    label: 'PICKUP',
    href: ROUTES.dashboard,
    imageUrl: '/images/placeholder.jpg',
  },
  {
    id: 4,
    title: { ja: 'ピックアップ', en: 'ピックアップ' },
    label: 'PICKUP',
    href: ROUTES.support,
    imageUrl: '/images/placeholder.jpg',
  },
];

async function fetchPickupItemsFromCms(_client: unknown): Promise<PickupItem[]> {
  throw new Error('Wix CMS integration is not implemented yet');
}

export async function getPickupItems(): Promise<PickupItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return await fetchPickupItemsFromCms(client);
  } catch {
    return PLACEHOLDER_PICKUP_ITEMS;
  }
}
