import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import path from "path";

import { Layout } from "~/components/Layout";
import { POSTS_PATH, postFilePaths } from "~/utils/mdxUtils";

type Post = {
  content: string;
  data: { title?: string };
  filePath: string;
};

type Props = { posts: Array<Post> };

export default function Index({ posts }: Props) {
  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`/blog/[slug]`}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));

    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};
