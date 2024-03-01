import { ReportGateway } from '@/lib/gateway/reportGateway'
import { ReportQueryUsecase } from 'report-rendezvous-usecase'
import { notFound } from 'next/navigation'

type Report = {
  id: string
  title: string
  thumbnail: string
}

const getReportArticle = async (id: string): Promise<Report | null> => {
  const result = await ReportQueryUsecase({
    reportPort: ReportGateway()
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
  const reportArticle = await getReportArticle(params.id)

  if (!reportArticle) {
    notFound()
  }

  return (
    <>
      <div className="text-[50px]">{params.id}&apos;s Report Page</div>
      <article>
        {reportArticle.id}
        {reportArticle.title}
      </article>
    </>
  )
}

export default ReportArticlePage
