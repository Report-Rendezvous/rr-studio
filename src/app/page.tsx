import { Footer } from '@/lib/components/footer'
import { Header } from '@/lib/components/header'
import { getCurrentUser } from '@/lib/utils/session'
import Image from 'next/image'

export default async function Home() {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header
        user={user}
        className="sticky top-0 z-40 bg-background border-b"
      />
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
