import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "~/components/codeblock";
import Image from "next/image";
import { Section } from "~/components/section";
import nested from "~/images/nested-structures.png";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "~/components/utils";
import { CodeText } from "~/components/codetext";
import { OutlineButton } from "~/components/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our mission • Collect</title>
        <meta
          name="description"
          content="Our mission is to increase the success rate of startups by providing a platform that allows them to build their products faster and more efficiently"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" key="title" content="Our mission • Collect" />
        <meta
          name="og:description"
          content="Our mission is to increase the success rate of startups by providing a platform that allows them to build their products faster and more efficiently"
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
        <Section
          className="min-h-[50vh] mt-[100px] md:mt-[60px] grid place-content-center"
          data-theme="light"
        >
          <div className="container">
            <div className="flex flex-col gap-4 sm:gap-2 py-16">
              <h4 className="text-2xl sm:text-base text-content-primary-light font-bold tracking-tight">
                Our mission
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                We are the Collect team, and we understand the challenges that
                startups face when it comes to developing their products. We
                know that it takes more than just a great idea and a talented
                team to succeed. It takes time, resources, and a lot of hard
                work. That's why we created Collect, to provide a solution that
                empowers startups to focus on their core business, rather than
                the technical complexities of developing and managing their data
                infrastructure.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                At Collect, our mission is to increase the success rate of
                startups by providing a platform that allows them to build their
                products faster and more efficiently. We believe that by
                streamlining the development process and removing technical
                barriers, we can help startups bring their products to market
                more quickly, allowing them to iterate and refine their ideas
                based on customer feedback. Our ultimate goal is to help
                startups achieve their vision, and we are committed to providing
                the tools and support they need to succeed. Join us in our
                mission to make startup success a reality for everyone.
              </p>
              <Link href="/">
                <OutlineButton>
                  <ArrowLeft />
                  Back to homepage
                </OutlineButton>
              </Link>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}
