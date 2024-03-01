import { getCurrentUser } from '@/lib/utils/session'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Change is upon us. The Dashboard feature is just around the corner!</p>
    </div>
  )
}
