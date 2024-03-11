export type ArticleCommandModel = {
  id: string
  authorId: string
}

export type ArticleReadModel = {
  id: string
  title: string
  createdAt: string
  authorId: string
}

export type AccountReadModel = {
  id: string
  name: string
  email: string
}

export type UserProfileJson = {
  name: string
  email: string
}
