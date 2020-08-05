import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document<any> {
    render() {
        return (
            <Html lang="nl">
                <Head>
                    <link href="/favicon.ico" rel="shortcut icon" />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/apple-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/apple-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/apple-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/apple-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/apple-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/apple-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/android-icon-192x192.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/favicon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="/ms-icon-144x144.png"
                    />

                    <script src="/assets/cssbeautify.js" />
                    <link href="/assets/fonts/style.css" rel="stylesheet" />

                    <meta property="og:site_name" content="FD Design System" />

                    <meta property="og:type" content="article" />

                    <meta
                        property="og:image"
                        content="/assets/images/default-share.png"
                    />

                    <meta property="twitter:name" content="summary" />

                    <meta property="twitter:site" content="FD Design System" />

                    <meta
                        property="twitter:image"
                        content="/assets/images/default-share.png"
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `try {
    var query = window.matchMedia("(prefers-color-scheme: dark)");
    var preference = window.localStorage.getItem("theme");
    if (preference) {
        if ((preference === "system" && query.matches) || preference === "dark") {
            document.documentElement.style.backgroundColor = "#191919";
        } else {
            document.documentElement.style.backgroundColor = "#FFEADB";
        }
    }
} catch (e) {}`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
