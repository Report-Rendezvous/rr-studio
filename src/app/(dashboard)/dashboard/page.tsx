import { getCurrentUser } from '@/lib/utils/session'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  return <h1>Dashboard</h1>
}
