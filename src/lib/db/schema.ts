import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey()
})

export const account_profiles = pgTable('account_profiles', {
  account_id: uuid('account_id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique()
})
