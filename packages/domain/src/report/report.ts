export type ReportId = string
export type Reports = Report[]

export type Report = {
  id: ReportId
  meta: ReportMeta
}

export type ReportMeta = {
  title: string
  thumbnail: string
}

export interface ReportRepository {
  findReportById(id: ReportId): Promise<Report | null>
  findReports(): Promise<Reports>
}
