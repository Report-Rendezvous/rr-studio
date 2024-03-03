import { UserName, UserProfile, UserRepository } from 'report-rendezvous-domain'
import { UserProfileUsecase } from '../user'
import { UserNotFoundError } from '../types'

describe('UserQueryUsecase', () => {
  const repositoryMock: UserRepository = {
    fetchProfileById: vi.fn(),
    fetchProfileByName: vi.fn()
  }

  test('ユーザ名からユーザの基本情報を取得することができる', async () => {
    const byNameMock = vi.fn().mockResolvedValue({
      name: new UserName('name'),
      email: 'email@example.com'
    } as UserProfile)

    repositoryMock.fetchProfileByName = byNameMock

    const actual = await UserProfileUsecase({
      userRepository: repositoryMock
    }).fetchUserProfileByName(new UserName('name'))

    expect(actual).toEqual({
      data: {
        name: new UserName('name'),
        email: 'email@example.com'
      } as UserProfile,
      error: null
    })

    expect(byNameMock).toBeCalled()
    byNameMock.mockClear()
  })

  test('ユーザプロファイルを取得できない場合はResultのエラーを返す', async () => {
    const byNameMock = vi.fn().mockResolvedValue(null)

    repositoryMock.fetchProfileByName = byNameMock

    const actual = await UserProfileUsecase({
      userRepository: repositoryMock
    }).fetchUserProfileByName(new UserName('name'))

    expect(actual).toEqual({
      data: null,
      error: new UserNotFoundError('name')
    })
    expect(byNameMock).toBeCalled()
    byNameMock.mockClear()
  })
})
