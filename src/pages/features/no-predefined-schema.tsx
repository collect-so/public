import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "~/components/codeblock";
import { Section } from "~/components/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "~/components/utils";
import { OutlineButton } from "~/components/button";

const SwipeRepositoryCode = `
// AI Generated
const SwipeRepository = CollectSDK.register('Swipe', [
  {
    name: "UserID",
    type: "string"
  },
  {
    name: "DateSwiped",
    type: "date-time"
  },
  {
    name: "SwipeDirection",
    type: "string" // "right" or "left"
  }
])
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage your data your way • Collect</title>
        <meta
          name="description"
          content="Dynamically and automatically generate API endpoints by labeling your records"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Collect | Dynamically generated endpoints"
        />
        <meta
          name="og:description"
          content="Dynamically and automatically generate API endpoints by labeling your records"
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
          className="min-h-screen mt-[100px] md:mt-[60px] grid place-content-center"
          data-theme="light"
        >
          <div className="container">
            <div className="flex flex-col gap-4 sm:gap-2 py-16">
              <h4 className="text-2xl sm:text-base text-content-primary-light font-bold tracking-tights">
                No Predefined Schema Needed
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                One of the key benefits of using Collect is that you don't need
                to have a predefined schema in order to start working with your
                data. This means that Collect can adapt to your needs, no matter
                how simple or complex your data structures might be. With
                Collect, you can seamlessly add complexity to your data models
                with ease, achieving your goals quickly and efficiently.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                For example, in the code snippet provided, you can see that the
                item object being saved to Collect has a variety of different
                properties, including a Name, Color, Size, Weight, and Material.
                Some of these properties have values that are stored as arrays,
                such as Size and Material, while others are stored as objects
                with multiple properties, such as Weight.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                Additionally, you can see that the Color property has a value
                and a valueSeparator property. The value property is a string
                that lists multiple color values separated by commas, while the
                valueSeparator property specifies what character is used to
                separate the values. In this case, the Color property is stored
                as an array of strings.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                Overall, the flexibility of Collect allows you to work with a
                wide range of data structures, and the platform seamlessly
                handles the complexity of your data models, allowing you to
                focus on what's important - your data.
              </p>
              <CodeBlock code={SwipeRepositoryCode} />
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
