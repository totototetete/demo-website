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
    },
    dashboard: {
      title: '大会ダッシュボード',
      subtitle: '全国大会と地区大会の進行状況をまとめて確認できます。',
      statsTitle: '本日のサマリー',
      scheduleTitle: '直近スケジュール',
      noticesTitle: '運営からのお知らせ',
      linksTitle: '関連リンク',
      stats: [
        { label: '開催予定大会', value: '12', note: '今月開催予定' },
        { label: 'エントリー校数', value: '184', note: '全国合計' },
        { label: '確定ジャッジ', value: '96', note: '配置確定済み' }
      ],
      schedule: [
        { round: '春季全国予選', date: '2026-05-18', venue: 'オンライン', status: '受付中' },
        { round: '関東ブロック大会', date: '2026-05-25', venue: '早稲田大学', status: '組合せ公開' },
        { round: '全国大会 決勝', date: '2026-06-15', venue: '東京国際フォーラム', status: '準備中' }
      ],
      scheduleHeaders: {
        round: '大会',
        date: '日程',
        venue: '会場',
        status: 'ステータス'
      },
      calendar: {
        prevMonth: '前月',
        nextMonth: '次月',
        today: '今日',
        weekdays: ['日', '月', '火', '水', '木', '金', '土'],
        legendTournament: '大会',
        legendDeadline: '申込締切',
        openTitle: '申込受付中',
        daysLeft: '締切まで',
        daysLeftSuffix: '日',
        daysLeftToday: '本日締切！',
        noOpenEntries: '現在申込受付中の大会はありません'
      },
      calendarEvents: [
        { title: '春季全国予選', date: '2026-05-18', type: 'tournament' },
        { title: '関東ブロック大会', date: '2026-05-25', type: 'tournament' },
        { title: '全国大会 決勝', date: '2026-06-15', type: 'tournament' },
        { title: '春季全国予選 申込締切', date: '2026-05-12', type: 'deadline' },
        { title: '関東ブロック大会 申込締切', date: '2026-05-20', type: 'deadline' },
        { title: '全国大会 決勝 申込締切', date: '2026-06-07', type: 'deadline' }
      ],
      notices: [
        '全国大会の参加校向けガイドライン（2026年度版）を公開しました。',
        '地区大会のジャッジ希望登録は各開催日の7日前までに完了してください。',
        '進行遅延時の連絡は大会当日チャネルをご確認ください。'
      ],
      links: [
        { label: '大会要項・ルール', desc: '最新の大会要項と競技ルールを確認できます。' },
        { label: '出場枠一覧', desc: '地区ごとの出場枠と推薦枠の内訳を掲載しています。' },
        { label: 'マッチング掲示板', desc: '練習試合と調整依頼をまとめて管理できます。' }
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
    },
    dashboard: {
      title: 'Tournament Dashboard',
      subtitle: 'Track national and regional tournament progress in one place.',
      statsTitle: 'Today’s Summary',
      scheduleTitle: 'Upcoming Schedule',
      noticesTitle: 'Operations Updates',
      linksTitle: 'Quick Links',
      stats: [
        { label: 'Scheduled Events', value: '12', note: 'Planned for this month' },
        { label: 'Registered Schools', value: '184', note: 'Nationwide total' },
        { label: 'Confirmed Judges', value: '96', note: 'Already assigned' }
      ],
      schedule: [
        { round: 'Spring National Qualifier', date: '2026-05-18', venue: 'Online', status: 'Open for Entry' },
        { round: 'Kanto Block Tournament', date: '2026-05-25', venue: 'Waseda University', status: 'Pairings Released' },
        { round: 'National Final', date: '2026-06-15', venue: 'Tokyo International Forum', status: 'In Preparation' }
      ],
      scheduleHeaders: {
        round: 'Round',
        date: 'Date',
        venue: 'Venue',
        status: 'Status'
      },
      calendar: {
        prevMonth: 'Prev',
        nextMonth: 'Next',
        today: 'Today',
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        legendTournament: 'Tournament',
        legendDeadline: 'Deadline',
        openTitle: 'Entry Open',
        daysLeft: '',
        daysLeftSuffix: ' day(s) left',
        daysLeftToday: 'Last day!',
        noOpenEntries: 'No tournaments currently open for entry'
      },
      calendarEvents: [
        { title: 'Spring National Qualifier', date: '2026-05-18', type: 'tournament' },
        { title: 'Kanto Block Tournament', date: '2026-05-25', type: 'tournament' },
        { title: 'National Final', date: '2026-06-15', type: 'tournament' },
        { title: 'Spring Qualifier Entry Deadline', date: '2026-05-12', type: 'deadline' },
        { title: 'Kanto Block Entry Deadline', date: '2026-05-20', type: 'deadline' },
        { title: 'National Final Entry Deadline', date: '2026-06-07', type: 'deadline' }
      ],
      notices: [
        'The 2026 participation guideline for Nationals is now available.',
        'Please complete judge availability registration at least 7 days before each event.',
        'For delays on tournament day, check the official live operations channel.'
      ],
      links: [
        { label: 'Rules & Tournament Guide', desc: 'Review the latest tournament guide and competition rules.' },
        { label: 'Quota Overview', desc: 'See regional and recommendation slot allocations.' },
        { label: 'Matching Board', desc: 'Coordinate practice matches and requests in one place.' }
      ]
    }
  }
};
