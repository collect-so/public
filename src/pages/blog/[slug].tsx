import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

import { Layout } from "~/components/Layout"
import { GetStaticPaths, GetStaticProps } from "next"
import { LetterTypingText } from "~/components/LetterTypingText"
import { getPost, getPosts } from "~/sections/blog/utils"
import { Post } from "~/sections/blog/types"
import { MDXRenderer } from "~/sections/blog/MDXRenderer"
import { PostCard } from "~/sections/blog/PostCard"
import classNames from "classnames"
import Head from "next/head"
import { getAbsoluteURL } from "~/utils"

type Props = {
  serializedPost: MDXRemoteSerializeResult
  data: Post["data"]
  morePosts: Array<Post>
}

type Params = {
  slug: string
}

export default function PostPage({ serializedPost, data, morePosts }: Props) {
  return (
    <Layout
      title={data.title}
      description={data.description}
      image={getAbsoluteURL(data.image)}
    >
      {data?.noindex && (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}

      <MDXRenderer {...serializedPost} data={data} />

      {morePosts?.length > 0 && (
        <section className="overflow-hidden grid grid-cols-12 mt-16 gap-16 container">
          <LetterTypingText
            as="h2"
            className="col-start-3 col-span-9 typography-3xl"
          >
            More Blog Posts
          </LetterTypingText>

          <div className="col-start-3 col-span-9 flex overflow-visible">
            {morePosts.map((post, idx) => (
              <PostCard
                key={post.slug}
                post={post}
                className={classNames("!h-[520px] !w-auto !aspect-[9/16]")}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  const post = getPost(params.slug)

  const serializedPost = await serialize(post.content, {
    // mdxOptions: {
    //   remarkPlugins: [],
    //   rehypePlugins: [],
    // },
    scope: post.data,
  })

  const morePosts = getPosts()
    .filter((post) => post.slug !== params.slug)
    .slice(0, 3)

  return {
    props: {
      serializedPost,
      data: post.data,
      morePosts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPosts().map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
