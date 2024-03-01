import { Result } from '../types'
import { Report, ReportRepository, Reports } from 'report-rendezvous-domain'

type ReportPortOps = {
  reportPort: ReportRepository
}

export function ReportQueryUsecase({ reportPort }: ReportPortOps) {
  return {
    findReportById: async (id: string): Promise<Result<Report>> => {
      const report = await reportPort.findReportById(id)

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
      const reports = await reportPort.findReports()

      return {
        data: reports,
        error: null
      }
    }
  }
}
