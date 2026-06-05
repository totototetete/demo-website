export interface LocalizedText {
  ja: string;
  en: string;
}

export interface HeroSlide {
  id: number;
  image: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
}

export interface PickupItem {
  id: number;
  title: LocalizedText;
  label: string;
  href: string;
  imageUrl: string;
}

export interface NewsItem {
  id: number;
  category: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  date: string;
  imageUrl: string;
  href: string;
}

export interface FanItem {
  id: number;
  label: LocalizedText;
  desc: LocalizedText;
  href: string;
  imageUrl: string;
}

export interface MovieItem {
  id: number;
  title: LocalizedText;
  time: string;
  thumbnailUrl: string;
  videoUrl: string;
}
