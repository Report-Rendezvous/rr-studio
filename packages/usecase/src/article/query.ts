import {
  AccountEmail,
  AccountRepository,
  ArticleRepository,
  Articles
} from 'report-rendezvous-domain'
import { UserNotFoundError } from '../types'

type QueryDeps = {
  accountRepository: AccountRepository
  articleRepository: ArticleRepository
}

type EditingArticle = {
  id: string
  title: string
  content: string
  status: 'draft' | 'published'
}

export function editingArticle(): EditingArticle {
  return {} as EditingArticle
}

export function usersArticle({
  accountRepository,
  articleRepository
}: QueryDeps) {
  return {
    execute: async (email: AccountEmail): Promise<Articles> => {
      const author = await accountRepository.findByEmail(email)

      if (!author) {
        throw new UserNotFoundError(email.value)
      }

      return await articleRepository.findByAuthor(author.id)
    }
  }
}
