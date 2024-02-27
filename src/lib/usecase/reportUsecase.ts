import { Report, Reports, ReportId } from '@/lib/domain/report'
import { ReportPort } from '@/lib/port/reportPort'

export interface ReportUCOptions {
  reportPort: ReportPort
}

export function ReportUsecase({ reportPort }: ReportUCOptions) {
  return {
    async fetchReportById(id: ReportId): Promise<Report> {
      return reportPort.findReportById(id)
    },
    async fetchRecentReports(): Promise<Reports> {
      return reportPort.findReports({ limit: 30 })
    }
  }
}
