import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core'

export const account = mysqlTable('account', {
  id: text('id').primaryKey(),
  name: varchar('name', { length: 32 }).notNull(),
  email: text('email').notNull().unique()
})

export const user = mysqlTable('user', {
  id: text('id').primaryKey()
})

export const userProfile = mysqlTable('user_profile', {
  id: text('id').primaryKey(),
  name: varchar('name', { length: 32 }).notNull(),
  email: varchar('name', { length: 32 }).notNull()
})

export const active_user = mysqlTable('active_user', {
  id: text('id').primaryKey()
})

export const deactive_user = mysqlTable('deactive_user', {
  id: text('id').primaryKey()
})
