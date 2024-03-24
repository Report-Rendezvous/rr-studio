import { markdownConvertProcessor } from '@/lib/components/markdownConvert'
import { markdownFileUrls } from '@/lib/config/mdfiles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchFileContent } from '@/lib/utils/fetchFileContent'

export default async function TermsPage() {
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownConvertProcessor}
      >
        {await fetchFileContent(markdownFileUrls.temrs)}
      </ReactMarkdown>
    </article>
  )
}
