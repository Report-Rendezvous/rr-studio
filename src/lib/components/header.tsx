import { MainNavigation } from '@/lib/components/mainNavigation'
import { SignInButton } from '@/lib/components/signInButton'
import { UserAccountNav } from '@/lib/components/userAccountNav'
import { siteConfig } from '@/lib/config/siteConfig'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  user?: {
    id: string
    name?: string | null
    image?: string | null
    email?: string | null
  }
  className?: string
}

export async function Header({ user, className }: HeaderProps) {
  return (
    <header className={className}>
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNavigation items={siteConfig.mainNaviItems} />
        {!user ? (
          <SignInButton href={siteConfig.urls.login} />
        ) : (
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email
            }}
          />
        )}
      </div>
    </header>
  )
}
