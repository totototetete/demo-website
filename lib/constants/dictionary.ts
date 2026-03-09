import { Dict } from '../types';

// 多言語辞書
export const dict: Record<'ja' | 'en', Dict> = {
  ja: {
    siteTitle: "一般社団法人 全国高校英語ディベート連盟公式支援プラットフォーム",
    nav: {
      beginners: "はじめての方へ",
      support: "運営補助",
      rules: "大会ルール",
      dashboard: "大会ダッシュボード",
      matching: "マッチング掲示板",
      alumni: "OB・OG交流"
    },
    sections: {
      pickup: "ピックアップ",
      news: "ニュース",
      forBeginners: "For Beginners",
      forDebaters: "For Debaters",
      forFans: "For Fans",
      movie: "Movie",
      beginnerSub: "はじめての方におすすめ",
      debaterSub: "現役生・コーチにおすすめ",
      fanSub: "OB・OG・サポーターにおすすめ",
      movieSub: "動画で学ぶ英語ディベート",
      more: "もっと見る",
      learnMore: "詳細を見る"
    },
    newsCats: ['すべて', '運営補助', '普及促進', 'イベント', '交流', 'その他'],
    hero: [
      { title: 'HEnDA Friends 公式サイト開設', sub: 'OB・OGの力を、次世代のディベーターへ' },
      { title: '練習試合マッチング掲示板', sub: '学校間の練習試合やコーチングをスムーズに' },
      { title: '統合ダッシュボード', sub: '大会情報や全国枠をリアルタイムに確認' }
    ],
    items: {
      beginner: [
        { title: '5分でわかる解説動画', desc: '動画で基本をサクッと理解。' },
        { title: 'ルールガイド2026', desc: 'PDFでいつでもルールを確認。' },
        { title: 'モデルディベート実演', desc: '実際の試合を見て流れを掴もう。' }
      ],
      debater: [
        { title: 'マッチング掲示板', desc: '学校・レベル・日程を選んで試合を組もう。' },
        { title: '大会ダッシュボード', desc: '全国の大会情報・出場枠を一覧で。' },
        { title: 'ジャッジ依頼窓口', desc: '練習試合や地区大会への派遣依頼。' },
        { title: '過去の論題アーカイブ', desc: '過去10年以上の資料を公開。' }
      ],
      fan: [
        { label: 'OB・OG交流会', desc: '卒業後も続くネットワーク。' },
        { label: 'YouTube公式チャンネル', desc: '名勝負をいつでも視聴可能。' },
        { label: 'サポーター募集中', desc: 'ディベート界の未来を支える。' }
      ],
      movies: [
        { title: '2025年全国大会 決勝戦アーカイブ', time: '1:20:00' },
        { title: 'ジャッジ必見：POIの判定基準', time: '15:20' },
        { title: 'OB・OGからのメッセージ', time: '08:45' },
        { title: 'モデルディベート実演（肯定側）', time: '45:10' }
      ]
    }
  },
  en: {
    siteTitle: "HEnDA Official Alumni & Support Platform",
    nav: {
      beginners: "For Beginners",
      support: "Support",
      rules: "Rules",
      dashboard: "Dashboard",
      matching: "Matching Board",
      alumni: "Alumni Network"
    },
    sections: {
      pickup: "PICKUP",
      news: "NEWS",
      forBeginners: "For Beginners",
      forDebaters: "For Debaters",
      forFans: "For Fans",
      movie: "MOVIE",
      beginnerSub: "Recommended for newcomers",
      debaterSub: "For active debaters & coaches",
      fanSub: "For alumni & supporters",
      movieSub: "Learn through videos",
      more: "VIEW MORE",
      learnMore: "LEARN MORE"
    },
    newsCats: ['All', 'Support', 'Promotion', 'Event', 'Network', 'Others'],
    hero: [
      { title: 'HEnDA Friends Website Launched', sub: 'Alumni power for the next generation' },
      { title: 'Practice Match Matching Board', sub: 'Smooth arrangements for matches and coaching' },
      { title: 'Integrated Dashboard', sub: 'Check tournament info and quotas in real-time' }
    ],
    items: {
      beginner: [
        { title: '5-min Intro Video', desc: 'Learn the basics quickly via video.' },
        { title: 'Rule Guide 2026', desc: 'Check rules anytime with our PDF guide.' },
        { title: 'Model Debate Demo', desc: 'Understand the flow by watching real matches.' }
      ],
      debater: [
        { title: 'Matching Board', desc: 'Arrange matches by school, level, and date.' },
        { title: 'Tournament Dashboard', desc: 'View national tournament info and quotas.' },
        { title: 'Judge Request Desk', desc: 'Request judges for practice or regional matches.' },
        { title: 'Topic Archive', desc: 'Access over 10 years of debate topics.' }
      ],
      fan: [
        { label: 'Alumni Network', desc: 'Keep connecting even after graduation.' },
        { label: 'Official YouTube', desc: 'Watch legendary matches anytime.' },
        { label: 'Supporters Wanted', desc: 'Support the future of English debate.' }
      ],
      movies: [
        { title: '2025 Nationals Final Archive', time: '1:20:00' },
        { title: 'Judge Guide: POI Criteria', time: '15:20' },
        { title: 'Messages from Alumni', time: '08:45' },
        { title: 'Model Debate Demo (Aff)', time: '45:10' }
      ]
    }
  }
};
