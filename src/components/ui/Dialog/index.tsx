import React, { PropsWithChildren, ReactNode } from 'react'
import {
  Content as RadixContent,
  DialogProps,
  Overlay as RadixOverlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog'

import { styled } from '~/config/stitches.config'
import { fadeIn, slide } from '~/config/animations'

type Props = PropsWithChildren<{
  trigger: ReactNode
}> &
  DialogProps

const Overlay = styled(RadixOverlay, {
  background: 'rgba(0,0,0,0.2)',
  zIndex: '200',
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  animation: `${fadeIn} 150ms`,
})

const Content = styled(RadixContent, {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  maxHeight: '$xs',
  width: '$full',
  minHeight: '310px',
  background: '$surface',
  zIndex: '200',
  p: '$6',
  display: 'flex',
  flexDirection: 'column',
  borderTopLeftRadius: '$lg',
  borderTopRightRadius: '$lg',
  $$xFrom: '0',
  $$yFrom: '10px',
  animation: `${slide} ease 150ms`,
  boxShadow: '$modal',
  '@md': {
    radii: '$lg',
    maxWidth: '$sm',
    left: '50%',
    top: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate3d(-50%, -50%, 0)',
    $$xFrom: '-50%',
    $$yFrom: 'calc(-50% - 10px)',
  },
})

export const Dialog = ({ trigger, children, ...props }: Props) => (
  <Root {...props}>
    <Trigger asChild>{trigger}</Trigger>
    <Portal>
      <Overlay />
      <Content>{children}</Content>
    </Portal>
  </Root>
)
