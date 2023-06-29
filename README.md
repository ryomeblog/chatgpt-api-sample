# chatgpt-api-sample
ChatGPT API を使用したNode.jsサンプル

## 環境構築

- コマンド
```
npm install
```

- 実行例
```
>npm install

up to date, audited 261 packages in 590ms

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## 実行

- コマンド
```
node index.js
```

- 実行例
```
{"id":"chatcmpl-hogehoge","object":"chat.completion","created":0123456789,"model":"gpt-3.5-turbo-0613","choices":[{"index":0,"message":{"role":"assistant","content":"以下のHTMLコードを使って、「Hello world」を赤字で表示させることができます。\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello world</title>\n  <style>\n    .red-text {\n      color: red;\n    }\n  </style>\n</head>\n<body>\n  <h1 class=\"red-text\">Hello world</h1>\n</body>\n</html>\n```\n\nこのコードでは、`<style>`タグを使用して、`red-text`というクラスに対して`color: red;`というCSSプロパ
ティを設定しています。その後、`<h1>`要素でこのクラスを指定して、テキストが赤字で表示されるようにします。\n\nこのコードをHTMLファイルに保存し、ウェ 
ブブラウザで開くと、「Hello world」が赤字で表示されます。"},"finish_reason":"stop"}],"usage":{"prompt_tokens":200,"completion_tokens":218,"total_tokens":418}}
```