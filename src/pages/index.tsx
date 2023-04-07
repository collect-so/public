import Head from "next/head";
import { HeroSection } from "~/Sections/Hero";
import { Layout } from "~/components/Layout";
import { DevsSection } from "~/Sections/Devs";
import { SwipesSection } from "~/Sections/Swipes";
import { BenefitsSection } from "~/Sections/Benefits";
import { PricingSection } from "~/Sections/Pricing";
import { getAbsoluteURL } from "~/components/utils";
import { Section } from "~/components/section";
import { Logo } from "~/components/logo";
import heroApp from "~/images/hero-app.png";
import classNames from "classnames";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import { useCallback, useRef, useState } from "react";

const AppDemoSection = () => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return;
    }
    const { top } = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setElementTop(top + scrollTop);
  }, [ref]);

  const { height } = useWindowSize(0, 0);
  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize, height]);

  const scale = useTransform(
    scrollY,
    [elementTop, elementTop + height],
    [0.8, 1],
    {
      clamp: true,
    },
  );

  return (
    <Section ref={ref} className=" container items-center mb-24">
      <motion.div style={{ scale }} data-theme="dark">
        <Image
          src={heroApp}
          alt={"app"}
          className={classNames("rounded-lg")}
          quality={100}
          data-theme="dark"
        />
      </motion.div>
    </Section>
  );
};
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
        <AppDemoSection />

        <Section
          className="min-h-[50vh] container grid place-content-center text-center grid-rows-1 gap-8 items-center"
          data-theme="light"
        >
          <div>
            <Logo className="m-auto" />
            <h2 className="text-2xl font-bold text-content-primary-light sm:text-xl tracking-tight">
              collect
            </h2>

            <h2 className="text-xl font-medium text-content-secondary-light sm:text-base tracking-tight mt-4">
              Easy-to-use low-code toolkit, offering query language-free storage
              engine <br className="sm:hidden" /> with data nesting, file
              storage, lightning-fast search and filtering capabilities
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
