import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { metaThemeColor } from "~/config/theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="msapplication-TileColor" content={metaThemeColor} />
          <meta name="theme-color" content={metaThemeColor} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
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
