import { Footer } from '@/lib/components/footer'
import { Header } from '@/lib/components/header'
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
    <div className="flex min-h-screen flex-col space-y-6">
      <Header
        user={user}
        className="sticky top-0 z-40 bg-background border-b"
      />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
