'use client'

import { Button } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { FC } from 'react'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  children: React.ReactNode
}

export const FormSubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const status = useFormStatus()

  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending && (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      )}
      {children}
    </Button>
  )
}
