import { getCurrentUser } from '@/lib/utils/session'

export default async function DashboardSettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  return <h1>Dashboard Settings</h1>
}
