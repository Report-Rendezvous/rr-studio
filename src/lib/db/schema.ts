import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey()
})

export const account_profiles = pgTable('account_profiles', {
  account_id: uuid('account_id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique()
})

export const articles = pgTable('articles', {
  id: text('id').primaryKey()
})

export const user_articles = pgTable('user_articles', {
  article_id: text('article_id').primaryKey(),
  user_id: uuid('user_id').primaryKey()
})
