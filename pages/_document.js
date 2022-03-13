import Document, { Html, Head, Main, NextScript } from 'next/document'
import { KEYWORDS, DESCRIPTION, AUTHOR, LANG } from '../lib/constants'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    // Available themes can be found at https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
    const theme = 'okaidia'

    return (
      <Html lang={LANG}>
        <Head>
          <meta name="description" content={DESCRIPTION} />
          <meta name="author" content={AUTHOR} />
          <meta name="keywords" content={KEYWORDS} />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
