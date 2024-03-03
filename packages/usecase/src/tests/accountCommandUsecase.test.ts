import { DuplicateAccountError } from '~/types'
import { AccountUsecase } from '../account'
import { AccountRepository } from 'report-rendezvous-domain'

describe('AccountCommandUsecase', () => {
  const accountRepositoryMock: AccountRepository = {
    save: vi.fn(),
    findById: vi.fn(),
    findByEmail: vi.fn(),
    findByName: vi.fn()
  }

  test('アカウントが既に存在しないなら作成できる', async () => {
    const mocked = vi.fn().mockResolvedValue('id')
    const findMocked = vi.fn().mockResolvedValue(null)

    accountRepositoryMock.save = mocked
    accountRepositoryMock.findById = findMocked

    const target = AccountUsecase({ accountRepository: accountRepositoryMock })
    const result = await target.createAccount('id', 'name', 'email')
    expect(result).toEqual({
      data: 'id',
      error: null
    })
    expect(mocked).toBeCalled()
    expect(findMocked).toBeCalled()
  })
  test('既にアカウントが存在する場合アカウントは作成できない', async () => {
    const mocked = vi.fn()
    const foundMocked = vi.fn().mockResolvedValue('id')

    accountRepositoryMock.save = mocked
    accountRepositoryMock.findById = foundMocked

    const result = await AccountUsecase({
      accountRepository: accountRepositoryMock
    }).createAccount('id', 'name', 'email')

    expect(result).toEqual({
      data: null,
      error: new DuplicateAccountError('id')
    })
  })
})
