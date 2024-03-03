import { Report, Reports } from 'report-rendezvous-domain'
import { ReportQueryUsecase } from '../report'
import { Result } from '../types'
import { Helper } from '../tests/helper'

describe('ReportQueryUsecase', () => {
  test('IDを指定してレポートのメタ情報を取得することができる', async () => {
    const mockedPort = vi.fn().mockResolvedValue({
      id: 'id',
      meta: {
        title: 'title',
        thumbnail: 'thumbnail'
      }
    })

    const actual: Result<Report> = await ReportQueryUsecase({
      reportRepository: {
        findReportById: mockedPort,
        findReports: vi.fn()
      }
    }).findReportById('id')

    const expected = {
      id: 'id',
      meta: {
        title: 'title',
        thumbnail: 'thumbnail'
      }
    }

    expect(actual.data).toEqual(expected)
    expect(mockedPort).toHaveBeenCalled()
  })
  test('ID指定でレポートのメタ情報を取得できない場合Nullを返す', async () => {
    const mockedPort = vi.fn(() => Promise.resolve(null))

    const actual: Result<Report> = await ReportQueryUsecase({
      reportRepository: {
        findReportById: mockedPort,
        findReports: vi.fn()
      }
    }).findReportById('id')

    expect(actual.data).equal(null)
    expect(mockedPort).toHaveBeenCalled()
  })
  it.concurrent(
    '最近投稿されたレポートのメタ情報を取得することができる',
    async () => {
      const mockedPort = vi.fn().mockResolvedValue(Helper.factoryReport(30))

      const actual: Result<Report[]> = await ReportQueryUsecase({
        reportRepository: {
          findReportById: vi.fn(),
          findReports: mockedPort
        }
      }).findReports()

      const expected = Helper.factoryReport(30)

      expect(actual.data).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  test('最近投稿されたレポートのメタ情報が存在しない場合空配列を返す', async () => {
    const repositoryMock = vi.fn().mockResolvedValue([])

    const actual: Result<Reports> = await ReportQueryUsecase({
      reportRepository: {
        findReportById: vi.fn(),
        findReports: repositoryMock
      }
    }).findReports()

    expect(actual.data).toEqual([])
    expect(repositoryMock).toHaveBeenCalled()
  })
})
