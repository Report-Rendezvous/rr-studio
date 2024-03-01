import { AccountUsecase, DuplicateAccountError } from '../account'

describe('AccountCommandUsecase', () => {
  test('アカウントを作成できる', async () => {
    const mocked = vi.fn().mockResolvedValue('id')
    const findMocked = vi.fn().mockResolvedValue(null)
    const accountRepository = {
      save: mocked,
      findById: findMocked
    }
    const target = AccountUsecase({ accountRepository })
    const result = await target.createAccount('id', 'name', 'email')
    expect(result).toEqual('id')
    expect(mocked).toBeCalled()
    expect(findMocked).toBeCalled()
  })
  test('既にアカウントが存在する場合アカウントは作成できない', async () => {
    const mocked = vi.fn()
    const foundMocked = vi.fn().mockResolvedValue('id')
    const accountRepository = {
      save: mocked,
      findById: foundMocked
    }

    AccountUsecase({ accountRepository })
      .createAccount('id', 'name', 'email')
      .catch((e) => {
        expect(e).toBeInstanceOf(DuplicateAccountError)
      })
  })
})
