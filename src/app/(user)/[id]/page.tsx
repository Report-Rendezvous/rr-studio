import { UserGateway } from '@/lib/gateway/userGateway'
import { UserProfileUsecase } from 'report-rendezvous-usecase'
import { notFound } from 'next/navigation'
import { UserProfile } from 'report-rendezvous-domain'

interface UserPageProps {
  params: {
    id: string
  }
}

async function getUserProfile(id: string): Promise<UserProfile | null> {
  return await UserProfileUsecase({
    userRepository: UserGateway
  }).fetchUserProfileById(id)
}

export default async function UserPage(props: UserPageProps) {
  const {
    params: { id: id }
  } = props
  const user = await getUserProfile(id)

  if (!user) {
    notFound()
  }

  return (
    <div className="text-[50px]">
      <h1>User Page</h1>
      <p>Your User ID: {decodeURIComponent(id)}</p>
    </div>
  )
}
