import { getCurrentUser } from '@/lib/utils/session'

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  return <h1>Billing</h1>
}
