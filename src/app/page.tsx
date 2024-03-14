import { Footer } from '@/lib/components/footer'
import { MainNavigation } from '@/lib/components/mainNavigation'
import { SignInButton } from '@/lib/components/signInButton'
import { siteConfig } from '@/lib/config/siteConfig'
import { getCurrentUser } from '@/lib/utils/session'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 bg-background border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNavigation items={siteConfig.mainNaviItems} />
          <SignInButton href={siteConfig.urls.login} />
        </div>
      </header>

      <main className="flex flex-col items-center justify-between py-12 h-dvh">
        <div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
