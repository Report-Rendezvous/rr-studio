import {
  Report,
  Reports,
  ReportRepository,
  ReportId
} from 'report-rendezvous-domain'

export type ReportJsons = ReportJson[]
export type ReportJson = {
  id: string
  title: string
}

interface ReportDriver {
  findReportById(id: string): Promise<ReportJson | null>
  findReports: () => Promise<ReportJsons>
}

type GatewayOptions = {
  driver: ReportDriver
}

export function ReportGateway({ driver }: GatewayOptions): ReportRepository {
  return {
    findReportById: async (id: ReportId): Promise<Report | null> => {
      const report = await driver.findReportById(id)
      if (!report) {
        return null
      }
      return {
        id: report.id,
        meta: {
          title: report.title,
          thumbnail: 'thumbnail'
        }
      }
    },
    findReports: async (): Promise<Reports> => {
      const reports: ReportJsons = await driver.findReports()
      return reports.map((r: ReportJson) => {
        return {
          id: r.id,
          meta: {
            title: r.title,
            thumbnail: 'thumbnail'
          }
        }
      })
    }
  }
}
