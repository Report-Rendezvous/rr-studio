import { UserId, UserProfile, UserRepository } from 'report-rendezvous-domain'

export interface UserUCOptions {
  userRepository: UserRepository
}

export function UserProfileUsecase({ userRepository }: UserUCOptions) {
  return {
    async fetchUserProfileById(id: UserId): Promise<UserProfile | null> {
      return userRepository.fetchUserProfileById(id)
    }
  }
}
