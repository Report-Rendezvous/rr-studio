import { Icons } from '@/lib/components/ui/icons'
import {
  MainNaviItems,
  SideNavItem,
  SideNavItems,
  SiteConfig
} from '@/lib/types'

export const siteConfig: SiteConfig = {
  mainNaviItems: [
    {
      title: 'Libraries',
      href: '/libraries'
    },
    {
      title: 'Marketplace',
      href: '/marketplace'
    }
  ] as MainNaviItems,
  dashboardNavItems: [
    {
      title: 'Overview',
      href: '/dashboard',
      icon: 'chevronRight'
    },
    {
      title: 'Activity',
      href: '/dashboard/activity',
      icon: 'activity' as keyof typeof Icons
    }
  ] as SideNavItems,
  sideNavItems: (userName: string): SideNavItems => {
    return [
      {
        title: 'Settings',
        href: `/${userName}/settings`,
        icon: 'settings' as keyof typeof Icons
      } as SideNavItem,
      {
        title: 'Billing',
        href: `/${userName}/billing`,
        icon: 'receipt' as keyof typeof Icons
      } as SideNavItem
    ]
  },
  footerNaviAboutItems: [
    {
      title: 'What is RR STUDIO',
      href: '/about'
    },
    {
      title: 'Contact Us',
      href: '/contact'
    }
  ],
  footerNaviLegalItems: [
    {
      title: 'Terms of Service',
      href: '/terms'
    },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      title: 'Inactivity Policy',
      href: '/inactivity-policy'
    }
  ]
}
