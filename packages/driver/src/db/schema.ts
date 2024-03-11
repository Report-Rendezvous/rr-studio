import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core'

export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey()
})

export const account_profiles = pgTable('account_profiles', {
  account_id: uuid('account_id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique()
})

// article resource
export const articles = pgTable('articles', {
  id: text('id').primaryKey()
})

// article overview resources
export const article_overviews = pgTable('article_overviews', {
  article_id: text('article_id').primaryKey(),
  title: text('title').notNull()
})

// writings event
export const writings = pgTable('writings', {
  article_id: text('article_id').primaryKey(),
  author_id: uuid('author_id').primaryKey(),
  created_at: timestamp('created_at', { mode: 'string' }).notNull()
})
