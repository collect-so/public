import { Close } from '@radix-ui/react-dialog'
import { ArrowRight, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import {
  Button,
  Dialog,
  Text,
  Input,
  Box,
  FieldSet,
  InputLabel,
  Link,
} from '~/components/ui'
import { contactEmail, contactEmailUrl } from '~/config/urls'

export function EmailDialog() {
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(values),
    })
    setSuccess(true)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          css={{
            '@hover': {
              '&:hover svg': {
                transform: 'translate(4px, 0)',
              },
            },
          }}>
          Join waitlist <ArrowRight />
        </Button>
      }>
      <Box css={{ display: 'flex', justifyContent: 'space-between', mb: '$7' }}>
        <Text size="xl" weight={500}>
          {success ? "We'll be in touch" : 'Join waitlist'}
        </Text>
        <Close asChild>
          <X />
        </Close>
      </Box>
      <Box
        as="form"
        onSubmit={handleSubmit}
        css={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {success ? (
          <Text>
            There’s currently a waitlist but your invite should come soon. Feel
            free to reach out anytime:{' '}
            <Link as="a" rel="noreferrer noopener" href={contactEmailUrl}>
              {contactEmail}
            </Link>
          </Text>
        ) : (
          <FieldSet>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
            <InputLabel htmlFor="email" as="label">
              Email
            </InputLabel>
          </FieldSet>
        )}

        {!success && (
          <Button
            css={{
              mt: 'auto',
            }}
            type="submit">
            Join
          </Button>
        )}
        <Close asChild>
          <Button
            variant={success ? 'primary' : 'secondary'}
            css={{ mt: success ? 'auto' : '$2' }}
            type="button">
            Close
          </Button>
        </Close>
      </Box>
    </Dialog>
  )
}
