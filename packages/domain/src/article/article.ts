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
}

export interface ArticleRepository {
  save(article: Article): Promise<ArticleId>
}
