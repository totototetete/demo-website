import { ROUTES } from '@/lib/routes';

// ピックアップデータ
export const PICKUP_DATA = {
  ja: [
    { title: '練習試合マッチング開始！', label: 'NEW', href: ROUTES.matching },
    { title: '5分でわかるルール', label: 'GUIDE', href: ROUTES.rules },
    { title: '統合ダッシュボード', label: 'TOOL', href: ROUTES.dashboard },
    { title: 'ジャッジ講習アーカイブ', label: 'VIDEO', href: ROUTES.support },
  ],
  en: [
    { title: 'Matching Board Open!', label: 'NEW', href: ROUTES.matching },
    { title: '5-min Rule Guide', label: 'GUIDE', href: ROUTES.rules },
    { title: 'Quotas Dashboard', label: 'TOOL', href: ROUTES.dashboard },
    { title: 'Judge Seminar Archive', label: 'VIDEO', href: ROUTES.support },
  ],
} as const;
