import { ReportGateway } from '@/lib/gateway/reportGateway'
import { ReportUsecase } from '@/lib/usecase/reportUsecase'
import { notFound } from 'next/navigation'

type Report = {
  id: string
  title: string
  thumbnail: string
}

const getReportArticle = async (id: string): Promise<Report> => {
  const reportArticle = await ReportUsecase({
    reportPort: ReportGateway()
  }).fetchReportById(id)

  return {
    id: reportArticle.id,
    title: reportArticle.meta.title,
    thumbnail: reportArticle.meta.thumbnail
  }
}

const ReportArticlePage = async ({ params }: { params: { id: string } }) => {
  const reportArticle: Report = await getReportArticle(params.id)

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
