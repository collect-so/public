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

const Code = `const order = await Collect.save({
  id: "2139823",
  date: "2022-01-12T12:00:00Z",
  products: [{
    Name: "GeForce RTX 4090",               // Nested Record #1
    Price: 1599
  },{
    Name: "Heroes of Might and Magic III",  // Nested Record #2
    Price: 15
  }]
})
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Data nesting feature • Collect</title>
        <meta
          name="description"
          content="With the Data Nesting feature of Collect storage engine, you can work with your data effortlessly and intuitively, without having to worry about relational entropy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Data nesting feature • Collect"
        />
        <meta
          name="og:description"
          content="With the Data Nesting feature of Collect storage engine, you can work with your data effortlessly and intuitively, without having to worry about relational entropy"
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
                Data Nesting
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                With the Data Nesting feature of Collect storage engine, you can
                work with your data effortlessly and intuitively, without having
                to worry about relational entropy. This will give you peace of
                mind and allow your apps to operate seamlessly.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                For example, consider the following code snippet that creates
                three records using the Data Nesting feature: Here, the order
                record has three fields: <CodeText>id</CodeText>,{" "}
                <CodeText>date</CodeText>, and <CodeText>products</CodeText>.
                The <CodeText>products</CodeText>
                field is a nested array that contains two additional records,
                each with its own <CodeText>Name</CodeText> and{" "}
                <CodeText>Price</CodeText> fields.
              </p>
              <CodeBlock code={Code} />

              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                By leveraging the Data Nesting feature of Collect, you can
                easily and intuitively organize your data, without the need for
                complex relational databases or manual data manipulation.
              </p>
              <div className="py-8 flex justify-center">
                <Image src={nested} alt={"Nested data structures"} />
              </div>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                So, whether you're building a complex enterprise application or
                a simple personal project, the Data Nesting feature of Collect
                storage engine can help you streamline your data management and
                focus on what really matters - delivering a great user
                experience.
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
