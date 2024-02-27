import { UserUCOptions, UserProfileUsecase } from '@/lib/usecase/userUsecase'

describe('UserUsecase', () => {
  it.concurrent(
    'アカウントIDを指定しユーザの基本情報を取得することができる',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue({
        id: 'id',
        name: 'USER_NAME'
      })
      const options: UserUCOptions = {
        userPort: {
          fetchUserProfileById: mockedPort
        }
      }
      const actual =
        await UserProfileUsecase(options).fetchUserProfileById('id')
      const expected = {
        id: 'id',
        name: 'USER_NAME'
      }

      expect(actual).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  it.concurrent(
    'ユーザプロファイルを取得できない場合はNullを返す',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue(null)
      const options: UserUCOptions = {
        userPort: {
          fetchUserProfileById: mockedPort
        }
      }
      const actual =
        await UserProfileUsecase(options).fetchUserProfileById('id')

      expect(actual).toBeNull()
      expect(mockedPort).toHaveBeenCalled()
    }
  )
})
