import { styled } from '~/config/stitches.config'

export const FieldSet = styled('fieldset', {
  borderRadius: '8px',
  lineHeight: 0,
  position: 'relative',
  minWidth: 0,
  gridColumn: '1 / -1',
  border: '0',
})

export const InputLabel = styled('label', {
  clip: 'rect(0 0 0 0)',
  wordWrap: 'normal',
  backgroundColor: '$surface',
  border: 0,
  borderRadius: '10px',
  color: '$contentPrimary',
  fontFamily: '$content',
  fontSize: '12.5px',
  fontStretch: '100%',
  fontWeight: 500,
  height: '1px',
  left: '12px',
  lineHeight: ' 22px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: '-16px',
  whiteSpace: 'nowrap',
  width: '1px',
})

export const Input = styled('input', {
  outline: 'none',
  width: '100%',
  border: 0,
  transition: 'all 150ms ease-in-out',
  $$borderColor: '$colors$contentSecondary',
  $$borderColorHover: '$colors$primary',
  $$borderColorFocus: '$colors$primary',
  [`&:not(:placeholder-shown) + ${InputLabel}`]: {
    clip: 'auto',
    height: 'auto',
    margin: '0',
    padding: '4px',
    width: 'auto',
  },
  defaultVariants: {
    size: '3',
  },
  variants: {
    size: {
      '3': {
        borderRadius: '$2',
        height: '48px',
        p: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$7',
        radii: '$md',
        gap: '$2',
        fontFamily: '$content',
        boxShadow: '0 0 0 1px $$borderColor',
        '&:hover': {
          boxShadow: '0 0 0 1px $$borderColorHover',
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $$borderColorFocus',
        },
      },
    },
  },
})
