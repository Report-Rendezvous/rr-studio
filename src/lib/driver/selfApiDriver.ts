import { ReportJson } from '@/lib/driver/json'

const apiHost = process.env.SELF_API_URL

const findReports = async (opt: { limit: number }): Promise<ReportJson[]> => {
  const response = await fetch(`${apiHost}/api/reports?limit=${opt.limit}`)
  if (!response.ok) {
    return [] as ReportJson[]
  }
  return response.json()
}

export const SelfApiDriver = {
  findReports
}
