import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "@common/codeblock";
import { Section } from "@common/section";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { getAbsoluteURL } from "@common/utils";
import { CodeText } from "@common/codetext";

const PersonCode = `const person = await CollectSDK.save({
  Name: "John Galt",               // Magic Field "Name"     [String]
  Age: 42,                         // Magic Field "Age"      [Number]
  Born: "1935-10-11T06:00:00Z",    // Magic Field "Born"     [DateTime]
  Location: "37.5162,-77.5133",    // Magic Field "Location" [Geo]
  Verified: false                  // Magic Field "Verified" [Boolean]
})
`;

const VehicleCode = `const vehicle = await CollectSDK.save({
  Name: "Packard",                 // Existing Magic Field "Name"
  Model: "400 2-Door Hardtop",
  Location: "30.1348,-95.1055",    // Existing Magic Field "Location"
  "Year Make": 1955,
  Color: ["Turquoise blue", "Packard ivory"]
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
                Magic Fields
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                Magic Fields is a powerful feature of the Collect SDK that
                allows you to effortlessly interconnect data entities with
                shared properties. This means you can easily search and filter
                data across your store, even if the entities are vastly
                different in nature.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                With Magic Fields, you can define a set of properties that apply
                to multiple records in your database. Here is an example of how
                you can use Magic Fields in Collect SDK:
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                To save a person record with Magic Fields:
              </p>

              <CodeBlock code={PersonCode} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                To save a vehicle record with Magic Fields:
              </p>

              <CodeBlock code={VehicleCode} />

              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                Those entities now linked "virtually" by its properties
                <CodeText>Name</CodeText> and <CodeText>Location</CodeText>,
                which enables you to find them by those fields and build
                powerful APIs on top of this functionality. For example, with
                cloud functions and webhooks features trigger some actions in
                your applications when locations are close enough.
              </p>

              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                By using Magic Fields, you can easily connect records with
                shared properties and efficiently search and filter your data
                across your entire store.
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
