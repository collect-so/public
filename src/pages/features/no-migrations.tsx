import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "~/components/codeblock";
import { Section } from "~/components/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "~/components/utils";
import { OutlineButton } from "~/components/button";

const Code = `const person = await CollectSDK.update({
    Name: "John Galt",
    Age: 42,
    Born: "1935-10-11T06:00:00Z",
    Location: "37.5162,-77.5133",
    Verified: false 
 +  Status: "unemployed",    // Add new property instantly
})
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>No migrations feature • Collect</title>
        <meta
          name="description"
          content="You can add, modify, or delete fields in your data models with just a few clicks, freeing up your senior developers to focus on more pressing tasks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="No migrations feature • Collect"
        />
        <meta
          name="og:description"
          content="You can add, modify, or delete fields in your data models with just a few clicks, freeing up your senior developers to focus on more pressing tasks"
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
                No migrations, ever
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                With Collect's real-time data model modification feature, you
                can make changes to your data entities quickly and easily,
                without having to worry about time-consuming deployments or
                causing downtime for your application. You can add, modify, or
                delete fields in your data models with just a few clicks,
                freeing up your senior developers to focus on more pressing
                tasks.
              </p>
              <CodeBlock code={Code} />

              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                For example, with CollectSDK's update function, you can
                instantly add a new field to a data entity, such as a "Status"
                field for tracking the employment status of a person. This new
                field will be immediately available for querying and searching,
                and can be used in conjunction with other fields to build
                powerful APIs and functionality for your applications. This
                flexibility and agility in data model modification enables you
                to respond quickly to changing business requirements and
                customer needs, without being held back by rigid data models or
                cumbersome development processes.
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
