import { Report, Reports, ReportId } from '@/lib/domain/report'

export interface ReportPort {
  findReportById(id: ReportId): Promise<Report>
  findReports(opt: { limit: number }): Promise<Reports>
}
