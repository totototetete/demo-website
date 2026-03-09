import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

// メタデータの設定（SEO最適化）
export const metadata: Metadata = {
  title: {
    default: 'HEnDA Friends | 全国高校英語ディベート連盟公式支援プラットフォーム',
    template: '%s | HEnDA Friends',
  },
  description:
    '全国高校英語ディベート連盟（HEnDA）の公式支援プラットフォームです。練習試合マッチング、大会ダッシュボード、OB・OG交流など、英語ディベートに関する情報を提供しています。',
  keywords: ['英語ディベート', '高校', 'HEnDA', '全国大会', 'ディベート', '練習試合'],
  authors: [{ name: 'HEnDA Friends' }],
  openGraph: {
    title: 'HEnDA Friends',
    description: '全国高校英語ディベート連盟公式支援プラットフォーム',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEnDA Friends',
    description: '全国高校英語ディベート連盟公式支援プラットフォーム',
  },
};

// 構造化データ（JSON-LD）
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HEnDA Friends',
  description: '全国高校英語ディベート連盟公式支援プラットフォーム',
  url: 'https://henda-friends.jp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 構造化データの埋め込み */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f0f0f0] font-sans text-gray-900 antialiased">
        {/* 言語プロバイダーでアプリ全体をラップ */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
