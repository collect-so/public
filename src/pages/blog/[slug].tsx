import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { Layout } from "~/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { LetterTypingText } from "~/components/LetterTypingText";
import { WireBox } from "~/components/WireBox";
import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: { title?: string; description?: string; date?: string };
};

type Params = {
  slug: string;
};

const H2 = (props: ComponentPropsWithoutRef<"h2">) => (
  <h2 className="text-content2" {...props} />
);

const components = {
  // a: CustomLink,
  // // It also works with dynamically-imported components, which is especially
  // // useful for conditionally loading components for certain routes.
  // // See the notes in README.md for more details.
  // TestComponent: dynamic(() => import("../../components/TestComponent")),
  // Head,
  h2: H2,
};

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      {/* <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header> */}

      <section className="grid place-items-center py-36 relative">
        <div
          className="absolute top-0 left-0 h-full w-full pointer-events-none -z-10"
          aria-hidden
        >
          <WireBox
            className="w-full h-full left-0 top-0 text-accent-green"
            wireColor="currentColor"
          />
          <div className="absolute inset-0 h-full w-full to-90% bg-gradient-to-b from-transparent to-fill pointer-events-none" />
        </div>

        {frontMatter.date && (
          <p className="typography-base text-content2 mb-2">
            {dateFormatter.format(new Date(frontMatter.date))}
          </p>
        )}

        <LetterTypingText
          as="h1"
          className="typography-4xl !mb-0 font-special md:text-2xl max-w-[34rem]
          text-center"
          animate
        >
          {frontMatter.title as string}
        </LetterTypingText>

        {frontMatter.description && (
          <p className="typography-lg text-content2 py-6 text-center">
            {frontMatter.description}
          </p>
        )}
      </section>

      <section className="container">
        {/* @ts-expect-error */}
        <MDXRemote {...source} components={components} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // mdxOptions: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
