import { markdownConvertProcessor } from '@/lib/components/markdownConvert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

async function getTermsContent() {
  const response = await fetch(
    'https://raw.githubusercontent.com/Report-Rendezvous/rr-docs/main/legal/terms.md'
  )
  return response.text()
}

export default async function TermsPage() {
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownConvertProcessor}
      >
        {await getTermsContent()}
      </ReactMarkdown>
    </article>
  )
}
