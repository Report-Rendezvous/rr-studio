export class DuplicateAccountError extends Error {
  constructor(readonly duplicatedAccountId: string) {
    super(
      `Duplicate Account error: AccountID '${duplicatedAccountId}' already exists.`
    )
  }
}
