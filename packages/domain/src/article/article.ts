import { ulid } from 'ulid'

export class ArticleId {
  constructor(readonly value: string) {}
  static gen(): ArticleId {
    return new ArticleId(ulid())
  }
}

export type AuthorId = string
export type Articles = Article[]

export type Article = {
  id: ArticleId
  authorId: AuthorId
  title: string
  createdAt: string
}

export type ArticleContent = {
  content: string
}

export interface ArticleRepository {
  save(args: { articleId: ArticleId; authorId: AuthorId }): Promise<ArticleId>
  findByAuthor(authorId: AuthorId): Promise<Articles>
}
