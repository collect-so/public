import { styled } from '~/config/stitches.config'

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',
  cursor: 'pointer',

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$content',
  fontSize: '$1',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  transition: 'all 150ms ease-in-out',

  '& svg': {
    transition: 'inherit',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$disabled',
    color: '$disabledContrast',
  },

  defaultVariants: {
    size: '3',
    variant: 'primary',
  },

  variants: {
    size: {
      '3': {
        borderRadius: '$2',
        height: '48px',
        px: '$6',
        fontSize: '$3',
        lineHeight: '$sizes$7',
        radii: '$md',
        gap: '$2',
      },
    },
    variant: {
      primary: {
        background: '$primaryGradient',
        color: '$primaryContrast',
        '@hover': {
          '&:hover': {
            background: '$primaryGradientHover',
          },
        },
        '&:active': {
          background: '$primaryHover',
        },
        '&:focus-visible': {
          background: '$primaryHover',
        },
      },

      secondary: {
        color: '$primary',
        '@hover': {
          '&:hover': {
            color: '$primaryHover',
          },
        },
        '&:active': {
          color: '$primaryHover',
        },
        '&:focus-visible': {
          color: '$primaryHover',
        },
      },
    },
  },
})
