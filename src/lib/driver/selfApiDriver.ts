import { ReportJson } from '@/lib/driver/json'

const apiHost = process.env.SELF_API_URL

const findReportById = async (id: string): Promise<ReportJson | null> => {
  const response = await fetch(`${apiHost}/api/reports/${id}`, {
    // Non Cache
    // cache: 'no-store',
    next: { revalidate: false }
  })
  if (!response.ok) {
    return null
  }
  return response.json()
}

const findReports = async (opt: { limit: number }): Promise<ReportJson[]> => {
  const response = await fetch(`${apiHost}/api/reports?limit=${opt.limit}`, {
    // Non Cache
    // cache: 'no-store',
    next: { revalidate: 5 }
  })
  if (!response.ok) {
    return [] as ReportJson[]
  }
  return response.json()
}

export const SelfApiDriver = {
  findReports,
  findReportById
}
