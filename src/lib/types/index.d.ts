import { Icons } from '@/lib/components/ui/icons'

export interface SiteConfig {
  urls: {
    login: string
    dashboard: string
  }
  mainNaviItems: MainNaviItems
  sideNavItems: (string) => SideNavItems
  dashboardNavItems: (NaviItem & NaviIcon)[]
  footerNaviAboutItems: NaviItem[]
  footerNaviLegalItems: NaviItem[]
}

interface NaviItem {
  title: string
  href: string
}
interface NaviIcon {
  icon: keyof Icons
}

export type MainNaviItems = MainNaviItem[]
export type MainNaviItem = NaviItem
export type SideNavItems = SideNavItem[]
export type SideNavItem = NaviItem & NaviIcon
