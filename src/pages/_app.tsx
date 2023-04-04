import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CLCR2SYDC6`}
      />

      <Script id="gtm" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-CLCR2SYDC6');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
