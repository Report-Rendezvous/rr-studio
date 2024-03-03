import { ReportCard } from '@/lib/components/reportCard'
import { ReportGateway } from 'report-rendezvous-gateway'
import { Report as ReportDomain } from 'report-rendezvous-domain'
import { ReportQueryUsecase } from 'report-rendezvous-usecase'
import { ReportDriver } from '@/lib/api/reportDriver'

type Report = {
  id: string
  title: string
  thumbnail: string
}

const getReports = async (): Promise<Report[]> => {
  const result = await ReportQueryUsecase({
    reportPort: ReportGateway({ driver: ReportDriver() })
  }).findReports()

  if (!result.data) {
    return []
  }

  return result.data.map((report: ReportDomain) => {
    return {
      id: report.id,
      title: report.meta.title,
      thumbnail: report.meta.thumbnail
    } as Report
  })
}

export default async function ReportsPage() {
  const reports = await getReports()
  return (
    <div className="container mx-auto">
      <header className="py-4">
        <h1 className="text-3xl font-bold">Recent Reports</h1>
      </header>
      <div className="grid grid-cols-4 gap-3">
        {reports.map((report: Report) => (
          <ReportCard report={report} key={report.id} />
        ))}
      </div>
    </div>
  )
}
