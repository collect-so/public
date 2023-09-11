import Head from "next/head";
import { HeroSection } from "~/Sections/Hero";
import { Layout } from "~/components/Layout";
import { PricingSection } from "~/Sections/Pricing";
import { getAbsoluteURL } from "~/components/utils";
import { AIEnhancements } from "~/Sections/AIEnhancements";
import { HowItWorksSection } from "~/Sections/HowItWorks";
import { FAQSection } from "~/Sections/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turn ideas into reliable APIs • Collect</title>
        <meta
          name="description"
          content="Collect Platform helps businesses build applications quickly and easily, regardless of the size or maturity of the team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Turn ideas into reliable APIs • Collect"
        />
        <meta
          name="og:description"
          content="Collect Platform helps businesses build applications quickly and easily, regardless of the size or maturity of the team"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getAbsoluteURL()} />
        <meta
          property="og:image"
          key="image"
          content={getAbsoluteURL("/images/og.png")}
        />
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
