import { ReportCard } from '@/lib/components/reportCard'
import { ReportGateway } from '@/lib/gateway/reportGateway'
import { ReportUsecase } from '@/lib/usecase/reportUsecase'

type Report = {
  id: string
  title: string
  thumbnail: string
}

const getReports = async (): Promise<Report[]> => {
  const reports = await ReportUsecase({
    reportPort: ReportGateway()
  }).fetchRecentReports()

  return reports.map((report) => {
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
        {reports.map((report) => (
          <ReportCard report={report} key={report.id} />
        ))}
      </div>
    </div>
  )
}
