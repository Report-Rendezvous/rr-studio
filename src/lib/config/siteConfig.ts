import { MainNaviItems, SideNavItems, SiteConfig } from '@/lib/types'

export const siteConfig: SiteConfig = {
  urls: {
    login: '/login',
    dashboard: '/dashboard'
  },
  mainNaviItems: [
    {
      title: 'Libraries',
      href: '/libraries'
    },
    {
      title: 'Marketplace',
      href: '/marketplace'
    }
  ],
  dashboardNavItems: [
    {
      title: 'Overview',
      href: '/dashboard',
      icon: 'chevronRight'
    },
    {
      title: 'Articles',
      href: '/dashboard/articles',
      icon: 'fileText'
    },
    {
      title: 'Activity',
      href: '/dashboard/activity',
      icon: 'activity'
    }
  ],
  sideNavItems: (userName: string): SideNavItems => {
    return [
      {
        title: 'Settings',
        href: `/${userName}/settings`,
        icon: 'settings'
      },
      {
        title: 'Billing',
        href: `/${userName}/billing`,
        icon: 'receipt'
      }
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
