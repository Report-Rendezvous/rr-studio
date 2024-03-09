'use server'

import { AccountDriver } from '@/lib/api/accountDriver'
import { getCurrentUser } from '@/lib/utils/session'
import { AccountGateway } from 'packages/gateway'
import { AccountEmail, AccountName } from 'report-rendezvous-domain'
import {
  AccountUpdateUsecase,
  AccountQueryUsecase,
  Result
} from 'report-rendezvous-usecase'

export type State = {
  message?: string | null
  errorMessage?: string | null
  data?: string | null
}

export async function submitNameAction(
  _: State,
  formData: FormData
): Promise<State> {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('authorization user required')
  }

  const name = formData.get('name')

  if (!name || name.toString().length == 0) {
    return { errorMessage: 'Required', data: null, message: null }
  }

  const dep = {
    accountRepository: AccountGateway({ driver: AccountDriver() })
  }

  const accountResult = await AccountQueryUsecase(dep).findBy(
    AccountEmail.of(user.email ?? '')
  )
  if (accountResult.error && !accountResult.data) {
    return {
      message: null,
      errorMessage: accountResult.error.message,
      data: null
    }
  }

  const result: Result<AccountName> = await AccountUpdateUsecase(
    dep
  ).updateName(accountResult.data?.id ?? '', AccountName.of(name.toString()))

  if (!result.data && result.error) {
    return { message: null, errorMessage: result.error.message, data: null }
  }

  return {
    message: 'account name updated',
    errorMessage: null,
    data: result.data?.value
  }
}
