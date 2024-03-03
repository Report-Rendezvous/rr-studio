import { ReportJson } from './types'

const apiHost = process.env.SELF_API_URL

const findReportById = async (id: string): Promise<ReportJson | null> => {
  const response = await fetch(`${apiHost}/api/reports/${id}`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    return null
  }
  return response.json()
}

const findReports = async (): Promise<ReportJson[]> => {
  const response = await fetch(`${apiHost}/api/reports`, {
    cache: 'no-store'
  })
  if (!response.ok) {
    return [] as ReportJson[]
  }
  return response.json()
}

export function ReportDriver() {
  return {
    findReports,
    findReportById
  }
}
