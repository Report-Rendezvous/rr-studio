import {
  AccountId,
  Article,
  ArticleId,
  ArticleRepository,
  Articles,
  AuthorId
} from 'report-rendezvous-domain'
import { ArticleReadModel, IArticleDriver } from 'report-rendezvous-driver'

type Deps = {
  articleDriver: IArticleDriver
}

export const ArticleGateway = ({ articleDriver }: Deps): ArticleRepository => {
  return {
    save: async ({
      articleId,
      authorId
    }: {
      articleId: ArticleId
      authorId: AuthorId
    }): Promise<ArticleId> => {
      const result = await articleDriver.save({
        id: articleId.value,
        authorId: authorId
      })
      return new ArticleId(result)
    },
    findByAuthor: async (authorId: AccountId): Promise<Articles> => {
      const results = await articleDriver.findByAuthor(authorId)

      const articles: Article[] = results.map(
        (result: ArticleReadModel): Article => {
          return {
            id: new ArticleId(result.id),
            authorId: result.authorId,
            title: result.title,
            createdAt: result.createdAt
          }
        }
      )

      return articles
    }
  }
}
