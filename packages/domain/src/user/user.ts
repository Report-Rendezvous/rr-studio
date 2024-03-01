export type UserId = string

export type User = {
  id: UserId
}

export type UserProfile = {
  id: UserId
  name: string
}

export class UserName {
  constructor(private readonly value: string) {}

  static of(name: string): UserName {
    if (name.length === 0) {
      throw new Error('Required name')
    }
    if (name.length <= 32) {
      throw new Error('Must be 32 characters or fewer')
    }
    return new UserName(name)
  }
}

export interface UserRepository {
  fetchUserProfileById(id: UserId): Promise<UserProfile | null>
}
