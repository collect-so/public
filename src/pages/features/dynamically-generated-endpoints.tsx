import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "@common/codeblock";
import { Section } from "@common/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "@common/utils";
import { CodeText } from "@common/codetext";

const CodeYouWrite = `const record = await CollectSDK.save('user', {
  name: "John Galt",
  email: "john.galt@example.com",
  password: "p@ssword"
})
`;

const CodeYouAbleToUse = `const user = await CollectSDK.get('user', {
  email: "john.galt@example.com"
})
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Manage your data your way • Collect</title>
        <meta
          name="description"
          content="Instantly generate API endpoints by labeling your records"
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
          content="Instantly generate API endpoints by labeling your records"
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
                Instantly generated endpoints
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                With this feature, you can now dynamically and automatically
                generate API endpoints by simply labeling your records on
                saving. When you save a record using CollectSDK, the system will
                recognize the type of record you're saving and automatically
                generate an API endpoint for it. For example, let's say you save
                a user record with the following code:
              </p>
              <CodeBlock code={CodeYouWrite} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                After saving this record, you will automatically get an API
                endpoint for working with user records:
              </p>
              <CodeBlock code={`const userEndpoint = "/api/v1/records/user"`} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                This endpoint will allow you to retrieve, update, or delete user
                records.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                In addition to generating the API endpoint, the system also
                recognizes the type of record you're saving. This means that you
                can easily retrieve records of the same type using the
                <CodeText>get</CodeText> method:
              </p>
              <CodeBlock code={CodeYouAbleToUse} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium">
                In this example, the system recognizes that you're looking for a
                user record and retrieves the record with the matching email
                address. Overall, this new feature makes it easy to manage and
                work with different types of records in your application by
                automatically generating API endpoints and recognizing record
                types.
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
