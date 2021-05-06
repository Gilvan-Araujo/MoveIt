import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                    <meta name='description' content='Description' />
                    <meta name='keywords' content='Keywords' />

                    <link rel="manifest" href="/manifest.json" />
                    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                    <meta name="theme-color" content="#317EFB" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
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