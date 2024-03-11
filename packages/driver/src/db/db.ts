import { type PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

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
  database: options.database,
  max: 30
})

declare global {
  var db: PostgresJsDatabase<typeof schema> | undefined
}

let db: PostgresJsDatabase<typeof schema>

if (process.env.NODE_ENV === 'production') {
  db = drizzle(connection)
} else {
  if (!global.db) {
    console.log('create connection drizzle on development mode')
    global.db = drizzle(connection)
  }
  db = global.db
}

export { db }
