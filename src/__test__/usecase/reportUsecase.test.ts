import { Reports } from '@/lib/domain/report'
import { ReportUCOptions, ReportUsecase } from '@/lib/usecase/reportUsecase'

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

describe('ReportUsecase', () => {
  it.concurrent(
    'IDを指定してレポートのメタ情報を取得することができる',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue({
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
      const actual = await ReportUsecase(options).fetchReportById('id')
      const expected = {
        id: 'id',
        meta: {
          title: 'title',
          thumbnail: 'thumbnail'
        }
      }

      expect(actual).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  it.concurrent(
    'ID指定でレポートのメタ情報を取得できない場合Nullを返す',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue(Promise<null>)
      const options = {
        reportPort: {
          findReportById: mockedPort,
          findReports: vi.fn()
        }
      }
      const actual = await ReportUsecase(options).fetchReportById('id')
      const expected = Promise<null>

      expect(actual).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  it.concurrent(
    '最近投稿されたレポートのメタ情報を取得することができる',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue(factoryReportHelper(30))
      const options: ReportUCOptions = {
        reportPort: {
          findReportById: vi.fn(),
          findReports: mockedPort
        }
      }
      const actual = await ReportUsecase(options).fetchRecentReports()
      const expected = factoryReportHelper(30)

      expect(actual).toEqual(expected)
      expect(mockedPort).toHaveBeenCalled()
    }
  )
  it.concurrent(
    '最近投稿されたレポートのメタ情報が存在しない場合空配列を返す',
    async () => {
      const mockedPort = vi.fn()
      mockedPort.mockResolvedValue([])
      const options: ReportUCOptions = {
        reportPort: {
          findReportById: vi.fn(),
          findReports: mockedPort
        }
      }
      const actual = await ReportUsecase(options).fetchRecentReports()
      expect(actual).toEqual([])
      expect(mockedPort).toHaveBeenCalled()
    }
  )
})
