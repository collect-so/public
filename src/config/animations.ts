import { keyframes } from '@stitches/react'

export const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const slide = keyframes({
  '0%': { opacity: 0, transform: 'translate3d($$xFrom, $$yFrom, 0)' },
  '100%': {
    opacity: 1,
  },
})

export const reveal = keyframes({
  '0%': { opacity: 0, filter: 'blur(3px)' },
  '30%': { opacity: 0, filter: 'blur(3px)' },
})
