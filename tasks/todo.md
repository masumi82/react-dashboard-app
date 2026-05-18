# タスク: ランディングページの日本語化（i18n対応）

## 概要
`vite-version` に react-i18next を導入し、ランディングページ全体を
日本語(ja)/英語(en) の2言語対応にする。

## スコープ（A: 基盤＋切替UI＋LP全体）
- i18n 基盤の構築
- 言語切替UI（ナビバー）
- ランディングページ全15セクションの翻訳
- ダッシュボード以降は対象外（同じパターンで後日拡張）

## 採用技術（決定事項）
- react-i18next / i18next / i18next-browser-languagedetector
- 既定言語: ja（localStorage 永続化、保存済みの選択のみ優先）
- 名前空間: `common`（共通）/ `landing`（LP）

## チェックリスト

### 1. i18n 基盤
- [x] react-i18next 等を pnpm で導入
- [x] `src/i18n/index.ts` に i18next 設定（既定ja・永続化）
- [x] `src/i18n/locales/{en,ja}/{common,landing}.json` を作成
- [x] `src/i18n/i18next.d.ts` で t() キーを型安全化
- [x] `main.tsx` で i18n を読み込み
- [x] 言語切替時に `<html lang>` を更新

### 2. 言語切替UI
- [x] `LanguageSwitcher` コンポーネント作成（ドロップダウン）
- [x] `navbar.tsx`（PC／モバイル両方）に切替UIを追加

### 3. ランディング各セクションの翻訳（15＋mega-menu）
- [x] hero-section / navbar / mega-menu
- [x] features-section / stats-section / about-section
- [x] testimonials-section / pricing-section / team-section
- [x] faq-section / blog-section / contact-section
- [x] cta-section / logo-carousel / footer / landing-theme-customizer

### 4. 検証
- [x] dev server 起動・型エラーなし（私の変更分は0件）
- [x] LP が日本語で表示される
- [x] 言語切替で en ⇄ ja が動作する
- [x] リロード後も選択言語が保持される

## レビュー

### 実装結果
- **i18n基盤**: react-i18next + i18next-browser-languagedetector を導入。
  `src/i18n/` に設定・型定義・翻訳リソース（common / landing 名前空間）を配置。
- **翻訳対象**: ランディングページの全16ファイル（15セクション＋mega-menu）。
  ハードコードされた文字列・`alt`・`aria-label`・`placeholder`・バリデーション
  メッセージまで `t()` 化。文章中のマークアップは `<Trans>` で対応。
- **言語切替UI**: `LanguageSwitcher`（ドロップダウン）をナビバーに追加。
- **型安全**: `i18next.d.ts` で `t()` のキーを型チェック。データ配列は
  `as const` でリテラル型を維持。

### 検証結果（Playwright で実機確認）
- 既定で日本語表示 ✓
- 言語切替（日本語 ⇄ English）が即座に反映 ✓
- リロード後も選択言語を保持（localStorage）✓
- `<html lang>` が言語と同期 ✓
- コンソールエラー 0 件 ✓
- テーマカスタマイザーパネルも翻訳表示 ✓

### 既知の制約・残課題
- `pnpm dev` の起動前依存チェックの問題は未対応（ユーザー指示で後回し）。
  現状は `node_modules/.bin/vite` で直接起動して動作確認済み。
- テンプレート由来の型エラー11件（`src/app/tasks/`・`src/components/ui/chart.tsx`）
  は本タスクの対象外のため未修正。
- ダッシュボード等の他画面は未翻訳（スコープ外。同じパターンで拡張可能）。
- `index.html` の `<html lang>` は静的に `en` のまま（実行時に JS で更新）。
  JS実行前の初期HTMLやSEOクローラーには `en` が見える。学習用途では許容。

### 変更ファイル
- 新規: `src/i18n/`（index.ts, i18next.d.ts, locales/{en,ja}/{common,landing}.json）、
  `src/components/language-switcher.tsx`
- 変更: `main.tsx`, `tsconfig.app.json`, `package.json`,
  `src/app/landing/components/` の全15ファイル, `src/components/landing/mega-menu.tsx`

---

# タスク2: ダッシュボードのセクションカードをアニメーション切替に統合

## 概要
ダッシュボードの4枚の指標カード（Total Revenue / New Customers /
Active Accounts / Growth Rate）を、フェードで切り替わる1枚のカードに統合。

## 実装内容
- `motion`（Framer Motion v12）を導入
- `src/app/dashboard/components/section-cards.tsx` を書き換え:
  - 4指標を `cards` データ配列（`as const`）に整理
  - 横長カード1枚に統合。中身を `AnimatePresence` + `motion.div` でフェード切替
  - 自動巡回（4秒間隔。`useEffect` + `setTimeout`、index変更で再起動）
  - 手動操作（左右の矢印ボタン＋ドット4個。アクティブなドットを強調）
  - カードのホバー中は自動送りを一時停止
  - `min-h-36` で切替時のレイアウトのガタつきを防止

## 検証結果（Playwright で実機確認）
- 4枚 → 1枚に統合 ✓
- 自動巡回が動作（放置で次の指標へ進む）✓
- ドット／矢印での手動操作が動作 ✓
- アクティブなドットの強調表示 ✓
- コンソールエラー 0 件 ✓
- `section-cards.tsx` の型エラーなし ✓

## 学べた要素
`useState` / `useEffect`（タイマーとクリーンアップ）/ Framer Motion の
`AnimatePresence`（要素の出入りアニメーション）。

---

# タスク3: ダッシュボードを全体的にカラフルに（上品なアクセント）

## 概要
モノクロ基調のダッシュボードに、ライト/ダーク両対応の彩りを加える。

## 実装内容
- グラフ（`chart-area-interactive.tsx`）: 2系列を `--chart-1` / `--chart-2`
  のテーマ配色に色分け
- セクションカード（`section-cards.tsx`）: 指標ごとに淡い背景グラデーション、
  トレンドバッジ・アイコンを意味で色分け（上昇=緑 / 下降=赤）
- テーブル（`data-table.tsx`）: Status バッジを色分け（Done=エメラルド /
  In Process 等=アンバー）
- サイドバー（`app-sidebar.tsx` + `nav-main.tsx`）: ナビ13項目のアイコンに
  項目ごとの固有色（`iconColor` を追加）

## 検証結果（Playwright で実機確認）
- ライトモード・ダークモード両方で配色が破綻なく表示 ✓
- コンソールエラー 0 件 ✓
- 変更ファイルの型エラーなし ✓
