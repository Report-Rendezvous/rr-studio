import { SignInCard } from '@/lib/components/signinCard'
import { buttonVariants } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { getCurrentUser } from '@/lib/utils/session'
import { cn } from '@/lib/utils/utils'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const user = await getCurrentUser()
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Report Rendezvous STUDIO
          </h1>
        </div>
        <SignInCard />
      </div>
    </div>
  )
}
