import { Footer } from '@/lib/components/footer'
import { Header } from '@/lib/components/header'
import { getCurrentUser } from '@/lib/utils/session'
import { Suspense } from 'react'

interface EditorLayoutProps {
  children: React.ReactNode
}

export default async function EditorLayout({ children }: EditorLayoutProps) {
  const user = await getCurrentUser()
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header
        user={user}
        className="sticky top-0 z-40 bg-background border-b"
      />
      <div className="grid flex-1">
        <main className="flex justify-center w-full flex-1 overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}
