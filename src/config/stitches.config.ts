import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

import { Manrope, DM_Serif_Display } from 'next/font/google'
import { colors } from '~/config/colors'

const manrope = Manrope({ subsets: ['latin'] })
//const dmSerifDisplay = DM_Serif_Display({
//  subsets: ['latin'],
//  weight: '400',
//})

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      content: manrope.style.fontFamily,
//      display: dmSerifDisplay.style.fontFamily,
    },
    colors,
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '18px',
      4: '24px',
      5: '36px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '84px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '64px',
      9: '80px',
      pagePaddingLeft: 'max(env(safe-area-inset-left), 3.4vw)',
      pagePaddingRight: 'max(env(safe-area-inset-right), 3.4vw)',
      pagePaddingBottom: '30px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '64px',
      9: '80px',
      xs: '400px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      screenH: '100vh',
      screenW: '100vw',
      full: '100%',
      header: '74px',
    },
    radii: {
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '12px',
      card: 'clamp(24px, 6.4vw, 35px)',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      header: '3',
      main: '2',
      footer: '1',
      max: '999',
    },
    shadows: {
      footer: '0px 24px 64px 0px #1B1C1D1F, 0px 16px 40px 0px #1B1C1D14',
      modal: '0px 24px 64px 0px #1B1C1D1F, 0px 16px 40px 0px #1B1C1D14',
    },
  },
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1280px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    radii: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})
