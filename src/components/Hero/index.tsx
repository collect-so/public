import { Box, DisplayText, Text } from '~/components/ui'

import { styled } from '~/config/stitches.config'
import { HeroFigure } from '~/components/Hero/Figure'
import { slide } from '~/config/animations'

// const Chip = styled('div', {
//   all: 'unset',
//   display: 'flex',
//   alignItems: 'center',
//   fontFamily: '$content',
//   height: '$6',
//   color: '$contentPrimary',
//   backdropFilter: 'blur(12px)',
//   fontSize: '$1',
//   fontWeight: '500',
//   lineHeight: '$6',
//   whiteSpace: 'nowrap',
//   px: '$3',
//   background: 'hsla(0, 0%, 0%, 0.439)',
//   borderWidth: '1px',
//   borderStyle: 'solid',
//   borderColor: 'rgba(0, 0, 0, 0.05)',
//   borderImage: 'initial',
//   borderRadius: '$pill',
//   transition: 'background 260ms ease 0s, width',
// })

const HeroWrapper = styled(Box, {
  gridColumn: 'full',
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
  gridAutoRows: 'max-content',
  position: 'relative',
  px: '$4',
  height: '100vh',
  maxHeight: '-webkit-fill-available',
})

const Title = styled(DisplayText, {
  $$yFrom: '10px',
  $$xFrom: 0,
  animation: `${slide} 0.7s ease-out`,
  background:
    'linear-gradient(to right bottom, $contentSecondary 30%, $contentPrimary)',
  '-webkit-text-fill-color': 'transparent',
  '-webkit-background-clip': 'text',
})

const Subtitle = styled(Text, {
  $$yFrom: '4%',
  $$xFrom: 0,
  opacity: '0',
  mt: '$7',
  maxWidth: '$md',
  mx: 'auto',
  animation: `${slide} 0.3s ease-out 0.55s forwards`,
})

export function Hero() {
  return (
    <HeroWrapper as="section">
      <HeroFigure />
      <Title align="center">Manage Your Data Your Way</Title>
      <Subtitle
        as="p"
        align="center"
        size={{
          '@xs': 'md',
          '@sm': 'lg',
          '@md': 'xl',
        }}
        color="contentSecondary">
        Collect platform helps businesses build applications quickly and easily,
        regardless of the size or maturity of the team
      </Subtitle>
    </HeroWrapper>
  )
}
