import {
  ArticleId,
  ArticleRepository,
  AccountId
} from 'report-rendezvous-domain'
import { ArticleCommand } from '~/article/command'

describe('ArticleCommand', () => {
  const option = {
    articleRepository: {
      save: vi.fn()
    }
  }
  const target = ArticleCommand(option)

  test('createTemporaryArticle', async () => {
    const articleId = new ArticleId('01HRFHK53DH4YRC6BYX04YW993')
    const genMock = vi.fn(() => articleId)
    ArticleId.gen = genMock

    const saveMock = vi.fn().mockResolvedValue(articleId)
    option.articleRepository.save = saveMock

    const actual = await target.createTemporaryArticle('accountId' as AccountId)

    expect(actual).toEqual(new ArticleId('01HRFHK53DH4YRC6BYX04YW993'))
    expect(genMock).toBeCalled()
    expect(saveMock).toBeCalled()
  })
})
