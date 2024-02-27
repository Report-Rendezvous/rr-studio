import { authOptions } from '@/lib/utils/auth'
import { User, getServerSession } from 'next-auth'

export async function getCurrentUser(): Promise<User | undefined> {
  const session = await getServerSession(authOptions)
  return session?.user
}
