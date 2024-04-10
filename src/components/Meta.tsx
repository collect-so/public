import Head from "next/head";
import { getAbsoluteURL } from "~/utils";

export const defaultTitle = "Efficient Backend, In Minutes";

export const defaultDescription =
  "Open-source zero-configuration REST Backend with database and storage out of the box. Fully customizable and typesafe.";

export const Meta = ({
  title = defaultTitle,
  description = defaultDescription,
}: {
  title?: string;
  description?: string;
}) => {
  const titleWithSuffix = `${title} • Collect`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* HTML Meta Tags */}
      <title>{titleWithSuffix}</title>
      <meta name="description" content={description} />

      {/*Facebook Meta Tags */}
      <meta property="og:url" content={getAbsoluteURL()} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleWithSuffix} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={getAbsoluteURL("/images/og.png")} />

      {/* Twitter  Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="collect.so" />
      <meta property="twitter:url" content={getAbsoluteURL()} />
      <meta name="twitter:title" content={titleWithSuffix} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={getAbsoluteURL("/images/og.png")} />
    </Head>
  );
};
