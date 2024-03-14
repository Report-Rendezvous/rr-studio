'use client'

import { Icons } from '@/lib/components/ui/icons'
import { SideNavItem, SideNavItems } from '@/lib/types'
import { cn } from '@/lib/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type AccountSettingNavProps = {
  items: SideNavItems
}

export const AccountSettingNav = ({ items }: AccountSettingNavProps) => {
  const path = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {items.map((item: SideNavItem, index: number) => {
        const Icon = Icons[item.icon.toString()]
        return (
          <Link href={item.href} key={index}>
            <span
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                path === item.href ? 'bg-accent' : 'transparent'
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
