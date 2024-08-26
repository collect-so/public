import Head from "next/head"
import { useRouter } from "next/router"
// import { getAbsoluteURL } from "~/utils"

export const defaultTitle = "Instant Backend In a Single Line"

export const defaultDescription =
  "Build modern SaaS and data-intensive apps with radically smaller teams."

export const Meta = ({
  title = defaultTitle,
  description = defaultDescription,
  image = "/opengraph-image.png?v=" + Math.random(),
}: {
  title?: string
  image?: string
  description?: string
}) => {
  const titleWithSuffix = `${title} • Collect`

  const route = useRouter()

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="hsl(223.81, 0%, 13.34%)" />

      {/* HTML Meta Tags */}
      <title>{titleWithSuffix}</title>
      <meta name="description" content={description} />

      {/*Facebook Meta Tags */}
      <meta property="og:url" content={route.asPath} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter  Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="collect.so" />
      <meta property="twitter:url" content={route.asPath} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={route.asPath} />
    </Head>
  )
}
