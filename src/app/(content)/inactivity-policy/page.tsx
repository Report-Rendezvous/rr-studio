import { markdownConvertProcessor } from '@/lib/components/markdownConvert'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

async function getInactivityPolicyContent() {
  const response = await fetch(
    'https://raw.githubusercontent.com/Report-Rendezvous/rr-docs/main/legal/inactivity-policy.md'
  )
  return response.text()
}

export default async function InactivityPolicyPage() {
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={markdownConvertProcessor}
      >
        {await getInactivityPolicyContent()}
      </ReactMarkdown>
    </article>
  )
}
