'use client'

import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { useEffect, useMemo } from 'react'
import { articleCreateAction } from '@/lib/actions/articleCreateAction'
import { serverActionEmpty } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'

interface NewArticleButtonProps extends ButtonProps {}

export function NewArticleButton({ ...props }: NewArticleButtonProps) {
  const initialState = useMemo(() => ({ temporaryArticleId: '' }), [])

  const [state, action] = useFormState(articleCreateAction, initialState)
  const status = useFormStatus()

  useEffect(() => {
    if (state == initialState) return
    redirect(`/editor/${state.temporaryArticleId}`)
  }, [initialState, state])

  return (
    <form action={serverActionEmpty}>
      <Button
        type="submit"
        formAction={action}
        className={cn({
          'cursor-not-allowed opacity-60': status.pending
        })}
        disabled={status.pending}
        {...props}
      >
        {status.pending ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.add className="mr-2 h-4 w-4" />
        )}
        New Article
      </Button>
    </form>
  )
}
