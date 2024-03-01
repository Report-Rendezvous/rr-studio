import { ReportJson, ReportJsons } from '@/lib/driver/json'
import { SelfApiDriver } from '@/lib/driver/selfApiDriver'
import {
  Report,
  Reports,
  ReportRepository,
  ReportId
} from 'report-rendezvous-domain'

export function ReportGateway(): ReportRepository {
  return {
    findReportById: async (id: ReportId): Promise<Report | null> => {
      const report = await SelfApiDriver.findReportById(id)
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
      const reports: ReportJsons = await SelfApiDriver.findReports({
        limit: 30
      })
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
