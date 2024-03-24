import { markdownConvertProcessor } from '@/lib/components/markdownConvert'
import { markdownFileUrls } from '@/lib/config/mdfiles'
import { fetchFileContent } from '@/lib/utils/fetchFileContent'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function InactivityPolicyPage() {
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownConvertProcessor}
      >
        {await fetchFileContent(markdownFileUrls.inactivityPolicy)}
      </ReactMarkdown>
    </article>
  )
}
