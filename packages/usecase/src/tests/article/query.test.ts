import {
  AccountEmail,
  AccountRepository,
  Articles
} from 'report-rendezvous-domain'
import { usersArticle } from '~/article/query'
import { UserNotFoundError } from '~/types'

describe('Article Query Usecase', () => {
  const deps = {
    accountRepository: {
      save: vi.fn(),
      updateName: vi.fn(),
      findByEmail: vi.fn(),
      findById: vi.fn(),
      findByName: vi.fn()
    } as AccountRepository,
    articleRepository: {
      save: vi.fn(),
      findByAuthor: vi.fn()
    }
  }
  const target = usersArticle(deps)

  test('ユーザIDを指定し記事の一覧を取得する', async () => {
    const email = new AccountEmail('email')

    deps.accountRepository.findByEmail = vi.fn().mockResolvedValue({
      id: 'accountId',
      name: 'name',
      email: 'email'
    })

    deps.articleRepository.findByAuthor = vi.fn().mockResolvedValue([
      {
        title: 'title1',
        id: '1',
        draft: true,
        revisionDate: '2024-03-09'
      },
      {
        title: 'title2',
        id: '2',
        draft: true,
        revisionDate: '2024-03-09'
      }
    ])

    const actual = await target.execute(email)

    const expected = [
      {
        title: 'title1',
        id: '1',
        draft: true,
        revisionDate: '2024-03-09'
      },
      {
        title: 'title2',
        id: '2',
        draft: true,
        revisionDate: '2024-03-09'
      }
    ]

    expect(actual).toEqual(expected)
    expect(deps.accountRepository.findByEmail).toBeCalledTimes(1)
    expect(deps.articleRepository.findByAuthor).toBeCalledTimes(1)
  })

  test('ユーザIDを指定し記事の一覧を取得し取得記事が1件もない', async () => {
    const email = new AccountEmail('email')

    deps.accountRepository.findByEmail = vi.fn().mockResolvedValue({
      id: 'accountId',
      name: 'name',
      email: 'email'
    })

    deps.articleRepository.findByAuthor = vi.fn().mockResolvedValue([])

    const actual = await target.execute(email)

    const expected = [] as Articles

    expect(actual).toEqual(expected)
    expect(deps.accountRepository.findByEmail).toBeCalledTimes(1)
    expect(deps.articleRepository.findByAuthor).toBeCalledTimes(1)
  })

  test('ユーザIDを指定してユーザ情報が取れない場合はエラーが発生する', async () => {
    const email = new AccountEmail('email')

    deps.accountRepository.findByEmail = vi.fn().mockResolvedValue(null)
    deps.articleRepository.findByAuthor = vi.fn()

    const actual = target.execute(email)

    expect(actual).rejects.toThrowError(new UserNotFoundError('email'))
    expect(deps.accountRepository.findByEmail).toBeCalledTimes(1)
    expect(deps.articleRepository.findByAuthor).toBeCalledTimes(0)
  })
})
