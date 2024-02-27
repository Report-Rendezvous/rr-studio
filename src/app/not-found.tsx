import { EmptyPlaceholder } from '@/lib/components/emptyPlaceholder'
import { buttonVariants } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { cn } from '@/lib/utils/utils'
import Link from 'next/link'

const NotFound = () => {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Icons.fileWarning className={cn('h-10 w-10')} />
      </div>
      <EmptyPlaceholder.Title>ouch! Not Found </EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        Page cound not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link href="/dashboard" className={buttonVariants({ variant: 'ghost' })}>
        Go to Dashboard
      </Link>
    </EmptyPlaceholder>
  )
}

export default NotFound
