import { UserGateway } from 'report-rendezvous-gateway'
import { UserProfileUsecase } from 'report-rendezvous-usecase'
import { notFound } from 'next/navigation'
import { UserName, UserProfile } from 'report-rendezvous-domain'
import { UserDriver } from '@/lib/api/userDriver'

async function getUserProfile(name: string): Promise<UserProfile | null> {
  const userName = new UserName(name)
  const result = await UserProfileUsecase({
    userRepository: UserGateway({ driver: UserDriver() })
  }).fetchUserProfileByName(userName)

  if (result.data) {
    return result.data
  }

  return null
}

type UserPageProps = {
  params: {
    name: string
  }
}

export default async function UserPage({ params: { name } }: UserPageProps) {
  const user = await getUserProfile(name)

  if (!user) {
    notFound()
  }

  return (
    <div className="text-[50px]">
      <h1>User Page</h1>
      <p>Your User ID: {decodeURIComponent(name)}</p>
    </div>
  )
}
