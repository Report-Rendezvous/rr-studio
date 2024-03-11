import {
  AccountId,
  ArticleId,
  ArticleRepository
} from 'report-rendezvous-domain'

export type ArticleCmdUsecaseOption = {
  articleRepository: ArticleRepository
}

export function ArticleCommand({ articleRepository }: ArticleCmdUsecaseOption) {
  return {
    async createTemporaryArticle(accountId: AccountId): Promise<ArticleId> {
      const articleId = await articleRepository.save({
        articleId: ArticleId.gen(),
        authorId: accountId
      })
      return articleId
    }
  }
}
