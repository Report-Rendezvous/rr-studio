export type AccountId = string

export type Account = {
  id: AccountId
  name: AccountName
  email: AccountEmail
}

export class AccountName {
  constructor(readonly value: string) {}

  static of(name: string): AccountName {
    if (name.length === 0) {
      throw new Error('Required name')
    }
    return new AccountName(name)
  }
}

export class AccountEmail {
  constructor(readonly value: string) {}

  static of(email: string): AccountEmail {
    if (email.length === 0) {
      throw new Error('Required email')
    }
    return new AccountEmail(email)
  }
}

export interface AccountRepository {
  save: (account: Account) => Promise<AccountId | null>
  updateName: (accountId: AccountId, name: AccountName) => Promise<AccountName>
  findById: (accountId: AccountId) => Promise<Account | null>
  findByEmail: (email: AccountEmail) => Promise<Account | null>
  findByName: (name: AccountName) => Promise<Account | null>
}
