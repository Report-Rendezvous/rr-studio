import { Footer } from '@/lib/components/footer'
import { Header } from '@/lib/components/header'
import { getCurrentUser } from '@/lib/utils/session'
import { Suspense } from 'react'

interface ReportRootLayoutProps {
  children?: React.ReactNode
}

export default async function ReportRootLayout({
  children
}: ReportRootLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        user={user}
        className="sticky top-0 z-40 bg-background border-b"
      />
      <div className="grid flex-1 py-[50px]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}
