import { Footer } from '@/lib/components/footer'
import { Header } from '@/lib/components/header'
import { getCurrentUser } from '@/lib/utils/session'

interface ArticleViewLayoutProps {
  children?: React.ReactNode
}

export default async function ArticleViewLayout({
  children
}: ArticleViewLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header
        user={user}
        className="sticky top-0 z-40 bg-background border-b"
      />
      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
