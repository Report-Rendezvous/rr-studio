import { UserProfile, UserId } from '@/lib/domain/user'

export interface UserPort {
  fetchUserProfileById(id: UserId): Promise<UserProfile>
}
