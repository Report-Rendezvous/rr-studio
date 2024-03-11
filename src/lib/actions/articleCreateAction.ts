'use server'

import { AccountDriver } from '@/lib/api/accountDriver'
import { ArticleDriver } from '@/lib/api/articleDriver'
import { getCurrentUser } from '@/lib/utils/session'
import { AccountEmail, ArticleRepository } from 'report-rendezvous-domain'
import { AccountGateway, ArticleGateway } from 'report-rendezvous-gateway'
import { AccountQueryUsecase, ArticleCommand } from 'report-rendezvous-usecase'

export async function articleCreateAction() {
  console.log('--------- in server action ---------')
  const user = await getCurrentUser()

  const gateway: ArticleRepository = ArticleGateway({
    articleDriver: ArticleDriver()
  })
  const usecase = ArticleCommand({ articleRepository: gateway })

  const accountUsecase = AccountQueryUsecase({
    accountRepository: AccountGateway({ driver: AccountDriver() })
  })

  const email = AccountEmail.of(user?.email ?? '')

  const { data, error } = await accountUsecase.findBy(email)
  if (!data) {
    throw new Error('user not found')
  }

  const temporaryId = await usecase.createTemporaryArticle(data.id)

  return {
    temporaryArticleId: temporaryId.value
  }
}
