import { ArticleReadModel, IArticleDriver } from 'report-rendezvous-driver'

type ArticleModel = {
  id: string
  authorId: string
}

export function ArticleDriver(): IArticleDriver {
  return {
    findByAuthor: async (authorId: string): Promise<ArticleReadModel[]> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/articles?authorId=${authorId}`,
        { cache: 'no-cache' }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch articles')
      }

      return await response.json()
    },
    save: async (articleModel: ArticleModel): Promise<string> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/articles`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(articleModel),
          cache: 'no-cache'
        }
      )

      if (!response.ok) {
        throw new Error('Failed to save article')
      }

      return articleModel.id
    }
  }
}
