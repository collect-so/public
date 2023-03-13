import { styled } from '~/config/stitches.config'
import NextLink from 'next/link'

export const Link = styled(NextLink, {
  display: 'inline-flex',
  color: '$contentPrimary',
  '@hover': {
    '& :hover': { color: '$primary' },
  },
})
