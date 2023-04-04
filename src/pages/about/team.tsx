import Head from "next/head";
import { Layout } from "~/components/Layout";
import { Section } from "~/components/section";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { getAbsoluteURL } from "~/components/utils";
import { OutlineButton } from "~/components/button";
import { team } from "~/Sections/Team/data";
import { TeamMember } from "~/components/team-member";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meet the team • Collect</title>
        <meta name="description" content="People behind the Collect Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="People behind Collect Platform • Collect"
        />
        <meta
          name="og:description"
          content="People behind the Collect Platform"
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
          className="min-h-[50vh] mt-[100px] md:mt-[60px] "
          data-theme="light"
        >
          <div className="container ">
            <div className="flex flex-col gap-4 sm:gap-2 py-16">
              <h1 className="text-2xl sm:text-base text-content-primary-light font-bold tracking-tight">
                Meet the team
              </h1>

              <div className="grid grid-cols-3 gap-8 items-center place-content-center md:grid-cols-1 my-16">
                {team.map((member, index) => (
                  <TeamMember {...member} key={index} />
                ))}
              </div>
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