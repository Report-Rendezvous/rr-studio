import { Result } from '../types'
import { Report, ReportRepository, Reports } from 'report-rendezvous-domain'

type ReportQueryUsecaseOption = {
  reportRepository: ReportRepository
}

export function ReportQueryUsecase({
  reportRepository
}: ReportQueryUsecaseOption) {
  return {
    findReportById: async (id: string): Promise<Result<Report>> => {
      const report = await reportRepository.findReportById(id)

      if (!report) {
        return {
          data: null,
          error: new Error('Report not found')
        }
      }

      return {
        data: report,
        error: null
      }
    },
    findReports: async (): Promise<Result<Reports>> => {
      const reports = await reportRepository.findReports()

      return {
        data: reports,
        error: null
      }
    }
  }
}
