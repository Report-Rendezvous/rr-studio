import { Reports, ReportId } from '@/lib/domain/report'
import { ReportJson, ReportJsons } from '@/lib/driver/json'
import { SelfApiDriver } from '@/lib/driver/selfApiDriver'
import { ReportPort } from '@/lib/port/reportPort'

const findReports: ReportPort['findReports'] = async (opt: {
  limit: number
}): Promise<Reports> => {
  const reports: ReportJsons = await SelfApiDriver.findReports(opt)
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

const findReportById: ReportPort['findReportById'] = async (
  id: ReportId
): Promise<any> => {
  const response = await fetch(`http://localhost:3000/api/reports/${id}`)

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    return null
  }

  return response.json()
}

export function ReportGateway(): ReportPort {
  return {
    findReportById,
    findReports
  }
}
