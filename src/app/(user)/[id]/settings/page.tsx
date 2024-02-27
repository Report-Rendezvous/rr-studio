import { UserNameForm } from '@/lib/components/userNameForm'
import { getCurrentUser } from '@/lib/utils/session'
import { redirect } from 'next/navigation'

export default async function SettingsPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="grid items-start gap-8 grid-cols-1">
      <div className="grid items-start gap-8">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">
            Account Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage account and website settings.
          </p>
        </div>
        <div className="grid gap-10">
          <UserNameForm user={{ id: user.id, name: user.name || '' }} />
        </div>
      </div>
    </div>
  )
}
