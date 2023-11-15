import Head from "next/head";
import { HeroSection } from "~/Sections/Hero";
import { Layout } from "~/components/Layout";
import { PricingSection } from "~/Sections/Pricing";
import { getAbsoluteURL } from "~/components/utils";
import { AIEnhancements } from "~/Sections/AIEnhancements";
import { HowItWorksSection } from "~/Sections/HowItWorks";
import { FAQSection } from "~/Sections/FAQ";
import Link from "next/link";
import { OutlineButton } from "~/components/button";
import { Book } from "lucide-react";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import cx from "classnames";
import { Section } from "~/components/section";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* HTML Meta Tags */}
        <title>Create API from any data • Collect</title>
        <meta
          name="description"
          content="Turn any JSON or CSV into ready-to-use APIs"
        />

        {/*Facebook Meta Tags */}
        <meta property="og:url" content={getAbsoluteURL()} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Create API from any data • Collect"
        />
        <meta
          property="og:description"
          content="Turn any JSON or CSV into ready-to-use APIs"
        />
        <meta property="og:image" content={getAbsoluteURL("/images/og.png")} />

        {/* Twitter  Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="collect.so" />
        <meta property="twitter:url" content={getAbsoluteURL()} />
        <meta
          name="twitter:title"
          content="Create API from any data • Collect"
        />
        <meta
          name="twitter:description"
          content="Turn any JSON or CSV into ready-to-use APIs"
        />
        <meta name="twitter:image" content={getAbsoluteURL("/images/og.png")} />
      </Head>
      <Layout>
        <HeroSection />
        <HowItWorksSection />

        {/*<AIEnhancements />*/}
        {/*<SwipesSection />*/}
        {/*<DevsSection />*/}
        <PricingSection />
        <FAQSection />
      </Layout>
    </>
  );
}
