import { Report, Reports } from 'report-rendezvous-domain'
import { ReportQueryUsecase } from '../report'
import { Result } from '../types'

function factoryReportHelper(length: number): Reports {
  return Array.from({ length }, (_, i) => i + 1).map((i) => {
    return {
      id: `id${i}`,
      meta: {
        title: `title${i}`,
        thumbnail: `thumbnail${i}`
      }
    }
  })
}

describe('ReportQueryUsecase', () => {
  test('IDを指定してレポートのメタ情報を取得することができる', async () => {
    const mockedPort = vi.fn().mockResolvedValue({
      id: 'id',
      meta: {
        title: 'title',
        thumbnail: 'thumbnail'
      }
    })
    const options = {
      reportPort: {
        findReportById: mockedPort,
        findReports: vi.fn()
      }
    }
    const actual: Result<Report> =
      await ReportQueryUsecase(options).findReportById('id')
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
    const options = {
      reportPort: {
        findReportById: mockedPort,
        findReports: vi.fn()
      }
    }
    const actual: Result<Report> =
      await ReportQueryUsecase(options).findReportById('id')

    expect(actual.data).equal(null)
    expect(mockedPort).toHaveBeenCalled()
  })
  it.concurrent(
    '最近投稿されたレポートのメタ情報を取得することができる',
    async () => {
      const mockedPort = vi.fn().mockResolvedValue(factoryReportHelper(30))
      const options = {
        reportPort: {
          findReportById: vi.fn(),
          findReports: mockedPort
        }
      }
      const actual: Result<Report[]> =
        await ReportQueryUsecase(options).findReports()

      const expected = factoryReportHelper(30)

      expect(actual.data).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  test('最近投稿されたレポートのメタ情報が存在しない場合空配列を返す', async () => {
    const mockedPort = vi.fn().mockResolvedValue([])
    const options = {
      reportPort: {
        findReportById: vi.fn(),
        findReports: mockedPort
      }
    }
    const actual: Result<Reports> =
      await ReportQueryUsecase(options).findReports()
    expect(actual.data).toEqual([])
    expect(mockedPort).toHaveBeenCalled()
  })
})
