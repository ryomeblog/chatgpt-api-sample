import { OpenAIApi, Configuration } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatWithGPT3() {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "あなたはプロのプログラマーです。" },
                { role: "user", content: "「Hello world」と出力するHTMLを作成してください。" },
                { role: "assistant", content: "以下のHTMLコードが「Hello world」と出力されるようになります。\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello world</title>\n</head>\n<body>\n  <h1>Hello world</h1>\n</body>\n</html>\n```\n\nこのコードをHTMLファイル（例：`index.html`）に保存し、ウェブブラウザで開くと、「Hello world」という見出し（`<h1>`要素）が表示されます。" },
                { role: "system", content: "あなたはプロのプログラマーです。" },
                { role: "user", content: "HTMLコードの「Hello world」を赤字で表示してください。" }
            ]
        });

        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.error(JSON.stringify(error));
    }
}

chatWithGPT3();
