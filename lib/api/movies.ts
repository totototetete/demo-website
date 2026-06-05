import { getWixClient } from '@/lib/api/client';
import type { MovieItem } from '@/lib/api/types';

const PLACEHOLDER_MOVIES: MovieItem[] = [
  {
    id: 1,
    title: { ja: 'イベント名', en: 'イベント名' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 2,
    title: { ja: 'イベント名', en: 'イベント名' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 3,
    title: { ja: 'イベント名', en: 'イベント名' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 4,
    title: { ja: 'イベント名', en: 'イベント名' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
];

export async function getMovies(): Promise<MovieItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return PLACEHOLDER_MOVIES;
  } catch {
    return PLACEHOLDER_MOVIES;
  }
}
