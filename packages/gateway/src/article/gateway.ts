import { Article, ArticleId, ArticleRepository } from 'report-rendezvous-domain'

type ArticleModel = {
  id: string
  authorId: string
}

type ArticleDriver = {
  save: (articleModel: ArticleModel) => Promise<string>
}
type Option = {
  driver: ArticleDriver
}

export const ArticleGateway = ({ driver }: Option): ArticleRepository => {
  return {
    save: async (article: Article): Promise<ArticleId> => {
      const result = await driver.save({
        id: article.id.value,
        authorId: article.authorId
      })
      return new ArticleId(result)
    }
  }
}
