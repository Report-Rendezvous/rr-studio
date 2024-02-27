import Link from 'next/link'

import { cn } from '@/lib/utils/utils'

type Item = {
  title: string
  href: string
}

type MainNavigationProps = React.HTMLAttributes<HTMLElement> & {
  className?: string
  items?: Item[]
}

export function MainNavigation(props: MainNavigationProps) {
  const { className, items, ...restProps } = props
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...restProps}
    >
      <Link href="/" className="text-xl font-medium transition-colors">
        Report Rendezvous STUDIO
      </Link>
      {items?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-foreground/80"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
