import { UserId, UserProfile } from '@/lib/domain/user'
import { UserPort } from '@/lib/port/userPort'

export interface UserUCOptions {
  userPort: UserPort
}

export function UserProfileUsecase({ userPort }: UserUCOptions) {
  return {
    async fetchUserProfileById(id: UserId): Promise<UserProfile> {
      return userPort.fetchUserProfileById(id)
    }
  }
}
