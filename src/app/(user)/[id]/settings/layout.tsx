import { notFound } from 'next/navigation'
import { MainNavigation } from '@/lib/components/mainNavigation'
import { siteConfig } from '@/lib/config/siteConfig'
import { Footer } from '@/lib/components/footer'
import { getCurrentUser } from '@/lib/utils/session'
import { UserAccountNav } from '@/lib/components/userAccountNav'
import Link from 'next/link'
import { cn } from '@/lib/utils/utils'
import { Icons } from '@/lib/components/ui/icons'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
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
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <nav className="grid items-start gap-2">
            <Link href={'/test'}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  'bg-accent' ?? 'transparent'
                )}
              >
                <Icons.chevronRight className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </span>
            </Link>
          </nav>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
