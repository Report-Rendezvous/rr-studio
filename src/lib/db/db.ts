import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const options = {
  host: process.env.DATABASE_URL,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'report_rendezvous_db'
}

const connection = postgres({
  host: options.host,
  port: options.port,
  username: options.user,
  password: options.password,
  database: options.database
})

export const db = drizzle(connection)
