import { UserGateway } from '@/lib/gateway/userGateway'
import { UserProfileUsecase } from '@/lib/usecase/userUsecase'
import { notFound } from 'next/navigation'
import { UserProfile } from '@/lib/domain/user'

interface UserPageProps {
  params: {
    id: string
  }
}

async function getUserProfile(id: string): Promise<UserProfile> {
  return await UserProfileUsecase({
    userPort: UserGateway
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
