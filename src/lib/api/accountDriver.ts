import { AccountModel } from '@/lib/api/types'
import { account_profiles, accounts, db } from 'report-rendezvous-driver'
import { eq } from 'drizzle-orm'
import {
  AccountNotFoundError,
  AccountUpdateFailedError
} from 'report-rendezvous-usecase'

export function AccountDriver() {
  return {
    updateName: async (id: string, name: string): Promise<string> => {
      const result: { updatedName: string }[] = await db
        .update(account_profiles)
        .set({ name })
        .where(eq(account_profiles.account_id, id))
        .returning({ updatedName: account_profiles.name })

      if (result.length === 0) {
        throw new AccountUpdateFailedError('user profile not found')
      }

      return result[0].updatedName
    },
    findByEmail: async (email: string): Promise<AccountModel | null> => {
      const accountRecords = await db
        .select({
          id: accounts.id,
          name: account_profiles.name,
          email: account_profiles.email
        })
        .from(accounts)
        .innerJoin(
          account_profiles,
          eq(accounts.id, account_profiles.account_id)
        )
        .where(eq(account_profiles.email, email))

      if (accountRecords.length === 0) {
        throw new AccountNotFoundError('user profile not found')
      }

      return accountRecords[0]
    },
    save: async (id: string, email: string): Promise<string> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/account`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id, email }),
          cache: 'no-cache'
        }
      )

      if (!response.ok) {
        return response.json()
      }

      return response.json()
    }
  }
}
