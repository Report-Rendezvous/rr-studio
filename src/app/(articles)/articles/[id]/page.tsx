import { ReportGateway } from 'report-rendezvous-gateway'
import { ReportQueryUsecase } from 'report-rendezvous-usecase'
import { notFound } from 'next/navigation'
import { ReportDriver } from '@/lib/api/reportDriver'

type Report = {
  id: string
  title: string
  thumbnail: string
}

const getReportArticle = async (id: string): Promise<Report | null> => {
  const { data, error } = await ReportQueryUsecase({
    reportRepository: ReportGateway({ driver: ReportDriver() })
  }).findReportById(id)

  if (data) {
    return {
      id: data.id,
      title: data.meta.title,
      thumbnail: data.meta.thumbnail
    }
  }

  return null
}

const ReportArticlePage = async ({ params }: { params: { id: string } }) => {
  const report = await getReportArticle(params.id)

  if (!report) {
    notFound()
  }

  return (
    <>
      <div className="text-[50px]">{params.id}&apos;s Report Page</div>
      <article>
        {report.id}
        {report.title}
      </article>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default ReportArticlePage
