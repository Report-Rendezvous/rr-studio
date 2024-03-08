type ArticleModel = {
  id: string
  authorId: string
}

export function ArticleDriver() {
  return {
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
        return response.json()
      }

      return articleModel.id
    }
  }
}
