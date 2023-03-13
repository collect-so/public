import Image from 'next/image'
import { reveal } from '~/config/animations'
import { styled } from '~/config/stitches.config'

const Figure = styled('figure', {
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  overflow: 'hidden',
  animation: `${reveal} 1.3s linear`,
  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    zIndex: 1,
    inset: 0,
    background:
      'radial-gradient(ellipse 80% 50% at 50% -30%, rgba(0 143 253 / 40%), transparent), linear-gradient(160deg, transparent,rgba(255, 255, 255, 0.5))',
  },
  '& img': {
    height: 'auto !important',
    top: 'auto !important',
    transform: 'translate(3.5%, 25%) rotate3d(1, 1, 1, -15deg)',
    filter: 'drop-shadow(0px 30px 130px rgba(0, 0, 0, 0.1))',
    maxWidth: '90vw',
    mx: 'auto',
    maxHeight: '45vh',
    objectFit: 'contain',
    '@sm': {
      maxWidth: '75vw',
    },
  },
})

export const HeroFigure = () => {
  return (
    <Figure>
      <Image fill src={'/images/app.png'} alt="app ui" priority quality={100} />
    </Figure>
  )
}
