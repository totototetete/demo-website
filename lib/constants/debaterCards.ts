import { ROUTES } from '@/lib/routes';
import { DebaterCardItem, Language } from '@/lib/types';

export const DEBATER_CARDS: Record<Language, DebaterCardItem[]> = {
  ja: [
    { title: 'マッチング掲示板', desc: '学校・レベル・日程を選んで試合を組もう。', href: ROUTES.matching },
    { title: '大会ダッシュボード', desc: '全国の大会情報・出場枠を一覧で。', href: ROUTES.dashboard },
    { title: 'ジャッジ依頼窓口', desc: '練習試合や地区大会への派遣依頼。', href: ROUTES.support },
    { title: '過去の論題アーカイブ', desc: '過去10年以上の資料を公開。', href: ROUTES.topics },
  ],
  en: [
    { title: 'Matching Board', desc: 'Arrange matches by school, level, and date.', href: ROUTES.matching },
    { title: 'Tournament Dashboard', desc: 'View national tournament info and quotas.', href: ROUTES.dashboard },
    { title: 'Judge Request Desk', desc: 'Request judges for practice or regional matches.', href: ROUTES.support },
    { title: 'Topic Archive', desc: 'Access over 10 years of debate topics.', href: ROUTES.topics },
  ],
};
