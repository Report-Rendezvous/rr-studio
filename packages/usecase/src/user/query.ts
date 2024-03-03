import {
  AccountName,
  AccountRepository,
  UserName,
  UserProfile,
  UserRepository
} from 'report-rendezvous-domain'
import { Result, UserNotFoundError } from '../types'

export type UserUsecaseOptions = {
  userRepository: UserRepository
  accountRepository: AccountRepository
}

export function UserQuery({
  userRepository,
  accountRepository
}: UserUsecaseOptions) {
  return {
    async fetchUserProfileBy(
      accountName: AccountName
    ): Promise<Result<UserProfile>> {
      const account = await accountRepository.findByName(accountName)

      if (!account) {
        return {
          data: null,
          error: new UserNotFoundError('Account not found')
        }
      }

      const user = await userRepository.fetchProfileById(account.id)

      throw new Error('Not implemented')
    }
  }
}
