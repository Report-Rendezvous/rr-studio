import { Icons } from './icons'

export type SiteConfig = {
  mainNaviItems: MainNaviItems
  sideNavItems: (userName: string) => SideNavItems
  dashboardNavItems: SideNavItems
  footerNaviAboutItems: FooterNaviItems
  footerNaviLegalItems: FooterNaviItems
}
export type MainNaviItems = MainNaviItem[]
export type MainNaviItem = {
  title: string
  href: string
}
export type SideNavItems = SideNavItem[]
export type SideNavItem = {
  title: string
  href: string
  icon: string
}
export type FooterNaviItems = FooterNaviItem[]
export type FooterNaviItem = {
  title: string
  href: string
}
