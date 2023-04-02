import Head from "next/head";
import { Layout } from "~/components/Layout";
import { CodeBlock } from "~/components/codeblock";
import { Section } from "~/components/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "~/components/utils";
import { OutlineButton } from "~/components/button";

export const UserRepositoryCode = `
// AI Generated
const UserRepository = CollectSDK.register('User', [
  {
    name: "Name",
    type: "string",
    required: true
  },
  {
    name: "Age",
    type: "number"
  },
  {
    name: "Gender",
    type: "string",
    required: true
  },
  {
    name: "Bio",
    type: "string"
  },
  {
    name: "Location",
    type: "geo",
    required: true
  },
  {
    name: "Picture",
    type: "file"
    max: "5mb",
    extensions: ["jpg", "png", "jpeg", "webp"]
  }
])
`;

export const SwipeRepositoryCode = `
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

export const ResultUsageCode = `
// Just push it to the storage ✨
const user = await UserRepository.save({
  Name: "Liza Klasvitzh",
  Gender: "female",
  Location: "50.0508,14.3534"
})

const swipe = await SwipeRepository.save({
  UserID: "2138918", 
  SwipeDirection: "right",
  DateSwiped: "2023-03-31T08:51:40Z"
})

await CollectSDK.link(
  user,
  swipe, 
  { metadata: "some additional info" }
)
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Collect and ChatGPT integration • Collect</title>
        <meta
          name="description"
          content="Build backend instantly with Collect API and ChatGPT"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Collect and ChatGPT integration • Collect"
        />
        <meta
          name="og:description"
          content="Build backend instantly with Collect API and ChatGPT"
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
                ChatGPT integration
              </h4>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                With the integration of Collect API and ChatGPT API, you can
                bypass the tedious part of developing your application. Simply
                input your application idea, such as "Make a dating app", and
                the Collect API with ChatGPT will do the rest of the work.
              </p>

              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                As an example, let's say you want to create a dating app.
                Collect API with ChatGPT will automatically generate the
                necessary code to create user profiles and implement the swipe
                feature.
              </p>
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                The first code block shows the automatically generated code for
                registering a User repository with specific fields, including
                name, age, gender, bio, location, and picture.
              </p>
              <CodeBlock code={UserRepositoryCode} />

              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                The second code block shows the automatically generated code for
                registering a Swipe repository with fields for user ID, swipe
                direction, and date swiped.
              </p>
              <CodeBlock code={SwipeRepositoryCode} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                Using these generated code blocks, you can easily create user
                profiles and implement the swipe feature in your dating app. The
                resulting code to build the app includes simple API calls to
                save user and swipe data, as well as link the two pieces of data
                with optional metadata:
              </p>
              <CodeBlock code={ResultUsageCode} />
              <p className="text-base sm:text-sm text-content-secondary-light font-medium tracking-tight">
                With this feature, you can save valuable time and effort in
                developing your application, allowing you to focus on other
                aspects of creating a great user experience.
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
