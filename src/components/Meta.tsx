import Head from "next/head"
import { getAbsoluteURL } from "~/utils"

export const defaultTitle = "Instant Backend In a Single Line"

export const defaultDescription =
  "Zero-config REST Backend. Fully customizable and Type-Safe."

export const Meta = ({
  title = defaultTitle,
  description = defaultDescription,
  image = getAbsoluteURL("/images/og.png?v=2"),
}: {
  title?: string
  image?: string
  description?: string
}) => {
  const titleWithSuffix = `${title} • Collect`

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="hsl(223.81, 0%, 13.34%)" />

      {/* HTML Meta Tags */}
      <title>{titleWithSuffix}</title>
      <meta name="description" content={description} />

      {/*Facebook Meta Tags */}
      <meta property="og:url" content={getAbsoluteURL()} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter  Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="collect.so" />
      <meta property="twitter:url" content={getAbsoluteURL()} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
