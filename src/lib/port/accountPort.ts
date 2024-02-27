import { Account } from '@/lib/domain/account'

export type Result = { ok: true } | { ok: false; reason: string }

export interface AccountPort {
  createAccount: (account: Account) => Promise<Result>
}
