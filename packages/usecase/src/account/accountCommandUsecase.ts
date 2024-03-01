import { AccountName, AccountRepository } from 'report-rendezvous-domain'

type AccountUsecaseOption = {
  accountRepository: AccountRepository
}

export class DuplicateAccountError extends Error {
  constructor(readonly duplicatedAccountId: string) {
    super(
      `Duplicate Account error: AccountID '${duplicatedAccountId}' already exists.`
    )
  }
}

export function AccountUsecase({ accountRepository }: AccountUsecaseOption) {
  return {
    async createAccount(id: string, name: string, email: string) {
      const account = await accountRepository.findById(id)
      if (account) {
        throw new DuplicateAccountError(id)
      }
      return await accountRepository.save({
        id: id,
        name: new AccountName(name),
        email: email
      })
    }
  }
}
