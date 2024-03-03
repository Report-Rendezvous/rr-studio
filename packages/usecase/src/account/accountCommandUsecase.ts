import {
  Account,
  AccountId,
  AccountName,
  AccountRepository
} from 'report-rendezvous-domain'
import { DuplicateAccountError, Result } from '../types'

type AccountUsecaseOption = {
  accountRepository: AccountRepository
}

export function AccountUsecase({ accountRepository }: AccountUsecaseOption) {
  return {
    async createAccount(
      id: string,
      name: string,
      email: string
    ): Promise<Result<AccountId>> {
      const account = await accountRepository.findById(id)
      if (account) {
        return {
          data: null,
          error: new DuplicateAccountError(id)
        }
      }
      const accountId = await accountRepository.save({
        id: id,
        name: new AccountName(name),
        email: email
      })

      return accountId
        ? { data: accountId, error: null }
        : { data: null, error: new Error('account save error') }
    }
  }
}
