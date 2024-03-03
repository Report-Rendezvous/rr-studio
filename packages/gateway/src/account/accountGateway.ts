import {
  Account,
  AccountId,
  AccountName,
  AccountRepository,
  UserId
} from 'report-rendezvous-domain'

interface AccountDriver {
  save: (id: string) => Promise<string>
}

type GatewayOptions = {
  driver: AccountDriver
}

export function AccountGateway({ driver }: GatewayOptions): AccountRepository {
  return {
    save: async (account: Account): Promise<AccountId | null> => {
      throw new Error('not implemented')
    },
    findById: async (accountId: AccountId): Promise<Account | null> => {
      throw new Error('not implemented')
    },
    findByEmail: async (email: string): Promise<Account | null> => {
      throw new Error('not implemented')
    },
    findByName: async (name: AccountName): Promise<Account | null> => {
      throw new Error('not implemented')
    }
  }
}
