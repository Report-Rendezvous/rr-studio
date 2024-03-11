import { UserName, UserProfile, UserRepository } from 'report-rendezvous-domain'
import { IUserDriver } from 'report-rendezvous-driver'

type GatewayOptions = {
  driver: IUserDriver
}

export function UserGateway({ driver }: GatewayOptions): UserRepository {
  return {
    fetchProfileByName: async (
      userName: UserName
    ): Promise<UserProfile | null> => {
      const user = await driver.fetchProfileByName(userName.value)

      if (!user) {
        return null
      }

      return {
        name: new UserName(user.name),
        email: user.email
      }
    }
  }
}
