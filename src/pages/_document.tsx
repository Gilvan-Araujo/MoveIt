import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='description' content='Description' />
                    <meta name='keywords' content='Keywords' />

                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                    <meta name="theme-color" content="#317EFB" />

                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}