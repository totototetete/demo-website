import { getWixClient } from '@/lib/api/client';
import type { MovieItem } from '@/lib/api/types';

const PLACEHOLDER_MOVIES: MovieItem[] = [
  {
    id: 1,
    title: { ja: 'イベント名', en: 'Event title' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 2,
    title: { ja: 'イベント名', en: 'Event title' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 3,
    title: { ja: 'イベント名', en: 'Event title' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
  {
    id: 4,
    title: { ja: 'イベント名', en: 'Event title' },
    time: '05:00',
    thumbnailUrl: '/images/placeholder.jpg',
    videoUrl: '#',
  },
];

async function fetchMoviesFromCms(_client: unknown): Promise<MovieItem[]> {
  throw new Error('Wix CMS integration is not implemented yet');
}

export async function getMovies(): Promise<MovieItem[]> {
  try {
    const client = await getWixClient();
    if (!client) {
      throw new Error('Wix client is not configured');
    }
    return await fetchMoviesFromCms(client);
  } catch {
    return PLACEHOLDER_MOVIES;
  }
}
