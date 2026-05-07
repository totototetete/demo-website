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
  href: string;
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

// ディベーターカードアイテムの型
export interface DebaterCardItem extends DebaterItem {
  href: string;
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

// 大会ダッシュボード統計カードの型
export interface DashboardStatItem {
  label: string;
  value: string;
  note: string;
}

// 大会ダッシュボード日程アイテムの型
export interface DashboardScheduleItem {
  round: string;
  date: string;
  venue: string;
  status: string;
}

// 大会ダッシュボードリンクアイテムの型
export interface DashboardLinkItem {
  label: string;
  desc: string;
}

// 大会ダッシュボード日程ヘッダーの型
export interface DashboardScheduleHeaders {
  round: string;
  date: string;
  venue: string;
  status: string;
}

// 大会ダッシュボードの辞書型
export interface DashboardContent {
  title: string;
  subtitle: string;
  statsTitle: string;
  scheduleTitle: string;
  noticesTitle: string;
  linksTitle: string;
  stats: DashboardStatItem[];
  schedule: DashboardScheduleItem[];
  scheduleHeaders: DashboardScheduleHeaders;
  notices: string[];
  links: DashboardLinkItem[];
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
  dashboard: DashboardContent;
}
