import { AccountUsecase } from '@/lib/usecase/accountUsecase'
import { DuplicateAccountError } from '@/lib/usecase/type'

describe('AccountUsecase', () => {
  it.concurrent('アカウントを作成できる', async () => {
    const mocked = vi.fn().mockResolvedValue({ ok: true })
    const accountPort = {
      createAccount: mocked
    }
    const usecase = AccountUsecase({ accountPort })
    const result = await usecase.createAccount('id', 'name', 'email')
    expect(result).toEqual({ ok: true })
  })
  it.concurrent(
    '既にアカウントが存在する場合アカウントは作成できない',
    async () => {
      const mocked = vi
        .fn()
        .mockResolvedValue({
          ok: false,
          reason: new DuplicateAccountError('id')
        })
      const accountPort = {
        createAccount: mocked
      }
      const usecase = AccountUsecase({ accountPort })
      const result = await usecase.createAccount('id', 'name', 'email')
      expect(result).toEqual({
        ok: false,
        reason: new DuplicateAccountError('id')
      })
    }
  )
})
