// 言語タイプ
export type Language = 'ja' | 'en';

// ニュースカテゴリのキー
export type NewsCategoryKey = 'すべて' | '運営補助' | '普及促進' | 'イベント' | '交流' | 'その他' | 'All' | 'Support' | 'Promotion' | 'Event' | 'Network' | 'Others';

// ニュースアイテムの型
export interface NewsItem {
  id: number;
  category: { ja: string; en: string };
  title: { ja: string; en: string };
  date: string;
  imageUrl: string;
}

// ヒーロースライドの型
export interface HeroSlide {
  title: string;
  sub: string;
}

// ナビゲーションアイテムの型
export interface NavItem {
  label: string;
}

// ピックアップアイテムの型
export interface PickupItem {
  title: string;
  label: string;
}

// ビギナーアイテムの型
export interface BeginnerItem {
  title: string;
  desc: string;
}

// ディベーターアイテムの型
export interface DebaterItem {
  title: string;
  desc: string;
}

// ファンアイテムの型
export interface FanItem {
  label: string;
  desc: string;
}

// 動画アイテムの型
export interface MovieItem {
  title: string;
  time: string;
}

// 辞書の型
export interface DictSection {
  pickup: string;
  news: string;
  forBeginners: string;
  forDebaters: string;
  forFans: string;
  movie: string;
  beginnerSub: string;
  debaterSub: string;
  fanSub: string;
  movieSub: string;
  more: string;
  learnMore: string;
}

export interface DictNav {
  beginners: string;
  support: string;
  rules: string;
  dashboard: string;
  matching: string;
  alumni: string;
}

export interface DictItems {
  beginner: BeginnerItem[];
  debater: DebaterItem[];
  fan: FanItem[];
  movies: MovieItem[];
}

export interface Dict {
  siteTitle: string;
  nav: DictNav;
  sections: DictSection;
  newsCats: string[];
  hero: HeroSlide[];
  items: DictItems;
}
