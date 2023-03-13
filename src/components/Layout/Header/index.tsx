import { ComponentPropsWithoutRef } from 'react'
import { EmailDialog } from '~/components/EmailDialog'
import { Logo } from '~/components/ui'
import { styled } from '~/config/stitches.config'

const Wrapper = styled('header', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  radii: '$md',
  alignItems: 'center',
  zIndex: '$header',
  height: '$header',
  top: '$pagePaddingBottom',
  bg: '$surface2',
  left: '$pagePaddingLeft',
  right: '$pagePaddingRight',
  p: '$3',
  backdropFilter: 'blur(12px)',
  backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
  borderColor: 'hsla(0, 0%, 92%, 0.93)',
  maxWidth: '$md',
  mx: 'auto',
})

export function Header(props: ComponentPropsWithoutRef<'header'>) {
  return (
    <Wrapper as="header" {...props}>
      <Logo size={48} />
      <EmailDialog />
    </Wrapper>
  )
}
