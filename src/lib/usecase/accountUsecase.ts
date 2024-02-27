import { AccountPort } from '@/lib/port/accountPort'

type Options = {
  accountPort: AccountPort
}

export function AccountUsecase({ accountPort }: Options) {
  return {
    async createAccount(id: string, name: string, email: string) {
      const account = {
        id: id,
        name: name,
        email: email
      }
      return await accountPort.createAccount(account)
    }
  }
}
