import { DashboardNav } from '@/lib/components/dashboardNav'
import { Footer } from '@/lib/components/footer'
import { MainNavigation } from '@/lib/components/mainNavigation'
import { UserAccountNav } from '@/lib/components/userAccountNav'
import { siteConfig } from '@/lib/config/siteConfig'
import { getCurrentUser } from '@/lib/utils/session'
import { redirect } from 'next/navigation'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/')
  }

  return (
    <div className="flex flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background w-full">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNavigation items={siteConfig.mainNaviItems} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email
            }}
          />
        </div>
      </header>

      <div className="container flex flex-1 items-start gap-2">
        <aside className="sticky w-[200px] py-2" style={{ top: '65px' }}>
          <DashboardNav items={siteConfig.dashboardNavItems} />
        </aside>
        <main className="container py-2 border rounded-md">
          {children}
          <p className="h-[1000px]" />
        </main>
      </div>
      <Footer />
    </div>
  )
}
