import { UserName, UserProfile, UserRepository } from 'report-rendezvous-domain'
import { Result, UserNotFoundError } from '../types'

export type UserUsecaseOptions = {
  userRepository: UserRepository
}

export function UserProfileUsecase({ userRepository }: UserUsecaseOptions) {
  return {
    async fetchUserProfileByName(
      userName: UserName
    ): Promise<Result<UserProfile>> {
      const user = await userRepository.fetchProfileByName(userName)

      return user
        ? { data: user, error: null }
        : { data: null, error: new UserNotFoundError(userName.value()) }
    }
  }
}
