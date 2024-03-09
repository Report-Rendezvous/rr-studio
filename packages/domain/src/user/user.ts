export type UserId = string

export type User = {
  id: UserId
}

export class UserName {
  constructor(readonly value: string) {}

  static of(name: string): UserName {
    if (name.length === 0) {
      throw new Error('Required name')
    }
    if (name.length >= 32) {
      throw new Error('Must be 32 characters or fewer')
    }
    return new UserName(name)
  }
}

export type UserProfile = {
  name: UserName
  email: string
}

export interface UserRepository {
  fetchProfileByName(userName: UserName): Promise<UserProfile | null>
}
