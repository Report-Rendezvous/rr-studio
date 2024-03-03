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
  const result = await ReportQueryUsecase({
    reportPort: ReportGateway({ driver: ReportDriver() })
  }).findReportById(id)

  if (result.data) {
    const reportArticle = result.data
    return {
      id: reportArticle.id,
      title: reportArticle.meta.title,
      thumbnail: reportArticle.meta.thumbnail
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
