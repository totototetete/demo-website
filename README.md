# HEnDA Friends - 全国高校英語ディベート連盟公式支援プラットフォーム

## 概要

HEnDA Friendsは、一般社団法人全国高校英語ディベート連盟（HEnDA）の公式支援プラットフォームです。Next.js 14（App Router）を使用して構築されており、高校英語ディベートに関わるすべての人々（現役生、コーチ、OB・OG、サポーター）のための情報を提供します。

## 主な機能

- **多言語対応**: 日本語・英語の切り替え機能
- **ヒーロースライダー**: 自動再生スライドショー
- **ニュースフィルタリング**: カテゴリ別ニュース絞り込み
- **練習試合マッチング掲示板**: 学校間の練習試合を組む機能
- **大会ダッシュボード**: 全国大会情報と出場枠の確認
- **動画アーカイブ**: ディベートの解説動画・大会アーカイブ
- **OB・OG交流**: 卒業生ネットワーク

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **フォント**: Inter (Google Fonts)

## ディレクトリ構成

```
demo-website/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ・フォント設定）
│   ├── page.tsx            # メインページ（Server Component）
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── Header.tsx          # ヘッダー（言語切り替え・ナビゲーション）
│   ├── HeroSlider.tsx      # ヒーロースライダー
│   ├── PickupSection.tsx   # ピックアップセクション
│   ├── NewsSection.tsx     # ニュースセクション（フィルタリング機能付き）
│   ├── BeginnersSection.tsx # 初心者向けセクション
│   ├── DebatersSection.tsx  # ディベーター向けセクション
│   ├── FansSection.tsx     # ファン向けセクション
│   ├── MovieSection.tsx    # 動画セクション
│   └── Footer.tsx          # フッター
├── contexts/
│   └── LanguageContext.tsx # 言語状態管理（Context API）
├── hooks/
│   ├── useLanguage.ts      # 言語切り替えカスタムフック
│   └── useSlider.ts        # スライダーカスタムフック
├── lib/
│   ├── types.ts            # 型定義
│   └── constants/
│       ├── dictionary.ts   # 多言語辞書
│       ├── newsData.ts     # ニュースデータ
│       └── pickupData.ts   # ピックアップデータ
├── tailwind.config.ts      # Tailwind CSS設定
├── tsconfig.json           # TypeScript設定
├── next.config.ts          # Next.js設定
├── postcss.config.mjs      # PostCSS設定
└── package.json            # 依存関係管理
```

## セットアップ手順

### 前提条件

- Node.js 18.17.0 以上
- npm 9.0.0 以上 または yarn

### インストール

1. リポジトリをクローン

```bash
git clone https://github.com/<YOUR_USERNAME>/demo-website.git
cd demo-website
```

2. 依存関係のインストール

```bash
npm install
```

3. 開発サーバーの起動

```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

### ビルド

```bash
npm run build
npm run start
```

### リント

```bash
npm run lint
```

## 開発ガイド

### コンポーネントの分類

本プロジェクトでは、Next.js 14のServer ComponentとClient Componentを適切に分離しています：

- **Server Component**: `app/page.tsx`（静的コンテンツのレンダリング）
- **Client Component**: インタラクティブな機能を持つすべてのコンポーネント（`'use client'`ディレクティブを使用）

### 言語切り替え

`LanguageContext`を通じて、アプリケーション全体の言語状態を管理しています。言語は日本語（ja）と英語（en）の2種類に対応しています。

### 型安全性

TypeScriptの厳格な型チェックを有効にしています。新しいデータを追加する場合は`lib/types.ts`で型定義を行ってください。

## ライセンス

© 2026 HEnDA Friends / All Japan High School English Debate Association.