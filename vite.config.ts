import { defineConfig } from "vite";

export default defineConfig({
  // プロジェクトのルートディレクトリを指定（TypeScriptソースコードを含む）
  root: "src",

  // ビルド設定
  build: {
    // ビルド結果を出力するディレクトリ
    outDir: "../dist",
    // 静的アセットを配置するディレクトリ
    assetsDir: ".",
    // Rollupオプション
    rollupOptions: {
      // エントリーポイントの設定
      input: {
        background: "src/background.ts", // バックグラウンドスクリプトのパス
        content: "src/content.ts", // コンテンツスクリプトのパス
      },
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
});
