import Head from "next/head";
import { HeroSection } from "~/Sections/Hero";
import { Layout } from "~/components/Layout";
import { DevsSection } from "~/Sections/Devs";
import { SwipesSection } from "~/Sections/Swipes";
import { BenefitsSection } from "~/Sections/Benefits";
import { PricingSection } from "~/Sections/Pricing";
import { getAbsoluteURL } from "~/components/utils";
import cx from "classnames";
import { Section } from "~/components/section";
import { Badge } from "~/components/badge";
import { Logo } from "~/components/logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Low-code platform to skip complex backend work • Collect</title>
        <meta
          name="description"
          content="Collect Platform helps businesses build applications quickly and easily, regardless of the size or maturity of the team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Low-code platform to skip complex backend work • Collect"
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
        <Section
          className="container grid place-content-center text-center grid-rows-1 gap-8"
          data-theme="light"
        >
          <div>
            <Logo className="m-auto" />
            <h2 className="text-2xl font-bold text-content-primary-light sm:text-xl tracking-tight">
              collect
            </h2>

            <h2 className="text-xl font-bold text-content-secondary-light sm:text-base tracking-tight mt-4">
              Production-ready low-code toolkit built for people,{" "}
              <br className="md:hidden" />
              powered by graphs, and enhanced by AI
            </h2>
          </div>
        </Section>
        <SwipesSection />
        <BenefitsSection />
        <DevsSection />
        <PricingSection />
      </Layout>
    </>
  );
}
