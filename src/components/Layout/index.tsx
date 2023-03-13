import { PropsWithChildren } from 'react'
import { Hero } from '~/components/Hero'
import { Header } from './Header'
import { Box } from '~/components/ui'
import { styled } from '~/config/stitches.config'
import { Footer } from './Footer'

const Main = styled(Box, {
  display: 'grid',
  gridTemplateColumns:
    '[full-start] $space$pagePaddingLeft [main-start] 1fr [main-end] $space$pagePaddingRight [full-end]',
  width: '$full',
  mx: 'auto',
  zIndex: '$main',
  position: 'relative',
  boxShadow: '$footer',
  background: '$surface',
})

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <Main as="main">
        <Hero />
      </Main>
      <Footer />
    </>
  )
}
