import { NewsItem } from '../types';

// ニュースデータ
export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    category: { ja: 'イベント', en: 'Event' },
    title: { ja: '全国大会 2026年大会の日程が決定しました', en: 'National Tournament 2026 Schedule Fixed' },
    date: '2026.02.19',
    imageUrl: '/images/placeholder.jpg'
  },
  {
    id: 2,
    category: { ja: '運営補助', en: 'Support' },
    title: { ja: '春季地区大会のジャッジ派遣依頼を開始', en: 'Request for Judges for Spring Regionals Started' },
    date: '2026.02.15',
    imageUrl: '/images/placeholder.jpg'
  },
  {
    id: 3,
    category: { ja: '普及促進', en: 'Promotion' },
    title: { ja: '新入生向け英語ディベート体験会を開催', en: 'English Debate Experience Event for New Students' },
    date: '2026.02.10',
    imageUrl: '/images/placeholder.jpg'
  },
  {
    id: 4,
    category: { ja: '交流', en: 'Network' },
    title: { ja: 'OB・OGネットワーク交流会を3月に開催', en: 'Alumni Network Meetup in March' },
    date: '2026.02.05',
    imageUrl: '/images/placeholder.jpg'
  },
];
