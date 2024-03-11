import { NextRequest, NextResponse } from 'next/server'
import { db, accounts, account_profiles, eq } from 'report-rendezvous-driver'

export const getAccountHandler = async (
  req: NextRequest,
  { params }: { params: { name: string } }
) => {
  const { name } = params

  const accountRecords = await db
    .select({
      name: account_profiles.name,
      email: account_profiles.email
    })
    .from(accounts)
    .innerJoin(account_profiles, eq(accounts.id, account_profiles.account_id))
    .where(eq(account_profiles.name, name))

  if (accountRecords.length === 0) {
    return NextResponse.json(
      { error: 'user profile not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(accountRecords[0])
}
