import { styled } from '~/config/stitches.config'

export const Text = styled('span', {
  // Reset
  lineHeight: '1.5',
  margin: 0,
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  fontFamily: '$content',
  defaultVariants: {
    color: 'contentPrimary',
    weight: '400',
  },
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    size: {
      sm: {
        fontSize: '$1',
      },
      md: {
        fontSize: '$2',
      },
      lg: {
        fontSize: '$3',
      },
      xl: {
        fontSize: '$4',
      },
    },
    weight: {
      300: {
        fontWeight: '300',
      },
      400: {
        fontWeight: '400',
      },
      500: {
        fontWeight: '500',
      },
      600: {
        fontWeight: '600',
      },
    },
    color: {
      contentPrimary: {
        color: '$contentPrimary',
      },
      contentSecondary: {
        color: '$contentSecondary',
      },
      primary: {
        color: '$primary',
      },
      primaryContrast: {
        color: '$primaryContrast',
      },
      primaryDark: {
        color: '$primaryDark',
      },
    },
  },
})

export const DisplayText = styled(Text, {
  fontFamily: '$display',
  lineHeight: '1.2',
  defaultVariants: {
    size: 'lg',
  },
  variants: {
    size: {
      lg: {
        letterSpacing: '-0.025em',
        '@xs': { fontSize: '$6' },
        '@sm': {
          fontSize: '$7',
        },
        '@md': {
          fontSize: '$8',
        },
        '@lg': {
          fontSize: '$9',
        },
      },
    },
  },
})
