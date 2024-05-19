import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import { Layout } from "~/components/Layout"
import { GetStaticProps } from "next"
import { Post } from "~/sections/blog/types"
import { MDXRenderer } from "~/sections/blog/MDXRenderer"

type Props = {
  serializedPost: MDXRemoteSerializeResult
  data: Post["data"]
}

type Params = {
  slug: string
}

export default function PostPage({ serializedPost, data }: Props) {
  return (
    <Layout
      title={data.title}
      description={data.description}
      image={data.image}
    >
      <MDXRenderer {...serializedPost} data={data} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  return {
    notFound: true,
  }

  // const serializedPost = await serialize(post.content, {
  //   // mdxOptions: {
  //   //   remarkPlugins: [],
  //   //   rehypePlugins: [],
  //   // },
  //   scope: post.data,
  // })

  // return {
  //   props: {
  //     serializedPost,
  //     data: post.data,
  //   },
  // }
}
