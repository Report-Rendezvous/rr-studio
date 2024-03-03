import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { userProfile } from '@/lib/db/schema'

export const getUserHandler = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'developer',
    password: 'password',
    database: 'report_rendezvous'
  })
  const db = drizzle(connection)

  const userProfiles = await db
    .select()
    .from(userProfile)
    .where(eq(userProfile.id, id))

  if (userProfiles.length === 0) {
    return NextResponse.json(
      { error: 'user profile not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(userProfiles[0])
}
