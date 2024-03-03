import {
  UserId,
  UserName,
  UserProfile,
  UserRepository
} from 'report-rendezvous-domain'

type UserProfileJson = {
  name: string
  email: string
}

interface UserDriver {
  fetchProfileById: (userId: string) => Promise<UserProfileJson | null>
  fetchProfileByName: (userName: string) => Promise<UserProfileJson | null>
}

type GatewayOptions = {
  driver: UserDriver
}

export function UserGateway({ driver }: GatewayOptions): UserRepository {
  return {
    fetchProfileById: async (userId: UserId): Promise<UserProfile | null> => {
      const user = await driver.fetchProfileById(userId)

      if (!user) {
        return null
      }

      return {
        name: new UserName(user.name),
        email: user.email
      } as UserProfile
    },
    fetchProfileByName: async (
      userName: UserName
    ): Promise<UserProfile | null> => {
      const user = await driver.fetchProfileByName(userName.value())

      if (!user) {
        return null
      }

      return {
        name: new UserName(user.name),
        email: user.email
      } as UserProfile
    }
  }
}
