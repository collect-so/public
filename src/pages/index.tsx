import Head from 'next/head'
import { Hero } from '~/components/Hero'
import { Layout } from '~/components/Layout'

const getAbsoluteURL = (path: string) => {
  if (typeof window === 'undefined') {
    return path
  }
  return `${window.location.origin}${path}`
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage your date your way • Collect</title>
        <meta
          name="description"
          content="Collect platform helps businesses build applications quickly and easily, regardless of the size or maturity of the team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          key="title"
          content="Manage your date your way"
        />
        <meta
          name="og:description"
          content="Collect platform helps businesses build applications quickly and easily, regardless of the size or maturity of the team"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://collect.so/" />
        <meta
          property="og:image"
          key="image"
          content={getAbsoluteURL('/images/ogimage.png')}
        />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
