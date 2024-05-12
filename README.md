# furuyoni-simulator-event-api-example

[ふるよにボードシミュレーター　拡張イベント API（バージョン0.2）](https://furuyoni-tools-doc.notion.site/API-0-2-11bce2f58716491f9de0dc9d78d18723?pvs=4)に対応したChrome拡張機能のサンプルです。



## 動かす方法

事前に[Node.js](https://nodejs.org/)のインストールが必要です。

(1) GitHub画面右上の「Code」ボタン →「Download ZIP」ボタンをクリックし、ソースコード一式をzip形式でダウンロードして、任意のフォルダに展開する。

もしくは、gitコマンドでレポジトリをクローンする。

```
% git clone https://github.com/tetradice/furuyoni-simulator-event-api-example.git
```

(2) npmコマンドで必要なパッケージ一式をインストールする。

```
% cd (ソースコードを配置したフォルダ)
% npm install
```

(3) 拡張機能をビルドする。

```
% npm run build
```


(4) Google Chromeの拡張機能画面を開き、画面右上のデベロッパーモードスイッチをONにする。

(5) 「パッケージ化されていない拡張機能を読み込む」ボタンから、ソースコードを配置したフォルダを選択して、上記の拡張機能を読み込む。

![](doc/img/chrome_install.png)


(6) [ふるよにボードシミュレーター](https://furuyoni-simulator.herokuapp.com/)にアクセスし、卓を開く。

(7) 「選択メガミを公開」「再構成」「切り札を表向きにする」などの操作を行った時に、ブラウザの開発ツール（Google Chromeの場合はF12で表示）に以下のようなログが出力されていればOK。

![](doc/img/log_print.png)

あとはソースコード（src/content.ts）内の該当処理を書き換えて、再度 npm run build コマンドでビルドすることで、書き換えた拡張機能を実行させることができます。

※ソースコードの変更時に自動でビルドを行いたい場合は、以下のコマンドを実行してください。

```
% npm run watch
```


### 推奨エディタ

Visual Studio Code


### 推奨パッケージマネージャ

pnpm