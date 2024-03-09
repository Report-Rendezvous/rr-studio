import {
  Account,
  AccountEmail,
  AccountRepository
} from 'report-rendezvous-domain'
import { Result } from '../types'

type AccountUsecaseOption = {
  accountRepository: AccountRepository
}

export function AccountQueryUsecase({
  accountRepository
}: AccountUsecaseOption) {
  return {
    async findBy(email: AccountEmail): Promise<Result<Account>> {
      try {
        const account = await accountRepository.findByEmail(email)
        if (!account) {
          return { data: null, error: new Error('account not found') }
        }
        return { data: account, error: null }
      } catch (e: any) {
        return { data: null, error: e }
      }
    }
  }
}
