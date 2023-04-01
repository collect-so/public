import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "@common/codeblock";
import { Section } from "@common/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "@common/utils";

const Code = `const person = await CollectSDK.find({
    Body: "Coupe",                          // EXACT MATCH
    Color: ["yellow", "orange", "!black"],  // AND
    HP: ">180, <365",                       // RANGE
    Price: "1900|2400",                     // RANGE
    Transmission: "!Automatic",             // NOT
    Interior: "Leather|Rag",                // OR
    Make: "~Chev",                          // PARTIAL MATCH
},{
    sortBy: "HP,desc"
})
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
              <h4 className="text-2xl sm:text-base text-content-primary-light font-bold">
                Query Free
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                With the Collect platform, you can focus on the data you need
                without worrying about how to get it. The platform offers a
                handy querying experience that helps you retrieve data with
                ease, without worrying about the complexity of queries.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                For example, you can use the CollectSDK.find() function to
                search for data based on specific criteria. The function takes
                two arguments: a search object and an options object. The search
                object contains the criteria you want to search for, while the
                options object allows you to specify additional options, such as
                how the results should be sorted.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                With the search object, you can search for data using a variety
                of operators, such as exact match, range, not, or, and partial
                match. This allows you to retrieve data that meets your specific
                needs without having to write complex queries.
              </p>{" "}
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                For instance, you can use the Body property to search for cars
                with the exact body type "Coupe". You can also use the Color
                property to search for cars that are either "yellow" or "orange"
                but not "black". Moreover, you can use the HP property to search
                for cars with horsepower between 180 and 365, and the Price
                property to search for cars with prices between 1900 and 2400.
                You can also use the Transmission property to search for cars
                that are not automatic, and the Interior property to search for
                cars with leather or rag interiors. Additionally, you can use
                the Make property to search for cars that contain the string
                "Chev" in the make field, even if it's a partial match.
              </p>
              <CodeBlock code={Code} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                By leveraging the powerful querying capabilities of the Collect
                platform, you can retrieve the exact data you need without the
                need for complex queries. This helps simplify your development
                process and allows you to build more efficient and effective
                applications.
              </p>
              <Link href="/">
                <p className="text-base sm:text-sm text-accent-brand font-medium flex items-center gap-4 pt-8">
                  <ArrowLeft />
                  Back to homepage
                </p>
              </Link>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}
