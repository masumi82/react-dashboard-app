# react-dashboard-app

React + TypeScript の管理ダッシュボード & ランディングページアプリ。
フロントエンド学習を目的に、オープンソースのテンプレートをベースとして
カスタマイズしているプロジェクトです。

## 技術スタック

- React 19 / TypeScript
- Vite
- Tailwind CSS v4 / shadcn/ui
- React Router
- react-i18next（多言語化）
- Motion / Framer Motion（アニメーション）

## セットアップ

アプリ本体は `vite-version/` ディレクトリにあります。

```bash
cd vite-version
pnpm install
pnpm dev
```

開発サーバーは http://localhost:5173 で起動します。

> 環境によっては `pnpm dev` が起動前の依存チェックで失敗することがあります。
> その場合は `node_modules/.bin/vite` で直接起動できます。

## 実装した機能

### ランディングページの多言語化（i18n）

react-i18next による日本語 / 英語の2言語対応。既定は日本語で、ナビバーの
言語切替メニューから即座に切り替わり、選択は localStorage に保存されます。

### ダッシュボードのアニメーション

4枚の指標カードを、フェードで切り替わる1枚のカルーセルに統合。自動巡回・
手動操作（矢印 / ドット）・ホバー中の一時停止に対応しています。

### ダッシュボードのカラフル化

グラフ・カード・ステータスバッジ・サイドバーアイコンへ、テーマ対応の
上品なカラーアクセントを追加。ライト / ダーク両モードで破綻しません。

実装画面のスクリーンショットは
[docs/evidence/EVIDENCE.md](./docs/evidence/EVIDENCE.md) を参照してください。

## プロジェクト構成

- `vite-version/` — アプリ本体（Vite 版）
- `nextjs-version/` — テンプレート同梱の Next.js 版（本プロジェクトでは未使用）
- `docs/evidence/` — 実装エビデンスのスクリーンショット
- `tasks/todo.md` — 作業計画・履歴

## ベースとライセンス

このプロジェクトは
[shadcn-dashboard-landing-template](https://github.com/shadcnstore/shadcn-dashboard-landing-template)
（MIT License）をベースにカスタマイズしています。ベーステンプレートの
ライセンスは [License.md](./License.md) を参照してください。
