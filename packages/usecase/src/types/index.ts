export type Result<T> = { data: T; error: null } | { data: null; error: Error }

export class AccountUpdateFailedError extends Error {
  constructor(readonly value: string) {
    super(`Account update failed: ${value}`)
  }
}

export class AccountNotFoundError extends Error {
  constructor(readonly value: string) {
    super(`Account not found: ${value}`)
  }
}

export class UserNotFoundError extends Error {
  constructor(readonly userName: string) {
    super(`User not found: ${userName}`)
  }
}

export class DuplicateAccountError extends Error {
  constructor(readonly duplicatedAccountId: string) {
    super(
      `Duplicate Account error: AccountID '${duplicatedAccountId}' already exists.`
    )
  }
}
