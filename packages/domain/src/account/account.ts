export type AccountId = string

export type Account = {
  id: AccountId
  name: AccountName
  email: string
}

export class AccountName {
  constructor(private readonly value: string) {}

  static of(name: string): AccountName {
    if (name.length === 0) {
      throw new Error('Required name')
    }
    return new AccountName(name)
  }
}

export interface AccountRepository {
  save: (account: Account) => Promise<AccountId | null>
  findById: (accountId: AccountId) => Promise<Account | null>
  findByEmail: (email: string) => Promise<Account | null>
  findByName: (name: AccountName) => Promise<Account | null>
}
