import {
  Account,
  AccountEmail,
  AccountId,
  AccountName,
  AccountRepository
} from 'report-rendezvous-domain'
import { IAccountDriver } from 'report-rendezvous-driver'

type GatewayOptions = {
  driver: IAccountDriver
}

export function AccountGateway({ driver }: GatewayOptions): AccountRepository {
  return {
    save: async (account: Account): Promise<AccountId | null> => {
      throw new Error('not implemented')
    },
    updateName: async (
      accountId: AccountId,
      name: AccountName
    ): Promise<AccountName> => {
      try {
        const result = await driver.updateName(accountId, name.value)
        return AccountName.of(result)
      } catch (error) {
        throw new Error('update name error')
      }
    },
    findById: async (accountId: AccountId): Promise<Account | null> => {
      throw new Error('not implemented')
    },
    findByEmail: async (email: AccountEmail): Promise<Account | null> => {
      const account = await driver.findByEmail(email.value)
      if (!account) {
        return null
      }
      return {
        id: account.id,
        email: AccountEmail.of(account.email),
        name: AccountName.of(account.name)
      }
    },
    findByName: async (name: AccountName): Promise<Account | null> => {
      throw new Error('not implemented')
    }
  }
}
