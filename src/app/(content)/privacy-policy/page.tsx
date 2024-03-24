import React from 'react'
import ReactMarkdown from 'react-markdown'
import { markdownConvertProcessor } from '@/lib/components/markdownConvert'
import { markdownFileUrls } from '@/lib/config/mdfiles'
import { fetchFileContent } from '@/lib/utils/fetchFileContent'

export default async function PrivacyPage() {
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown components={markdownConvertProcessor}>
        {await fetchFileContent(markdownFileUrls.privacyPolicy)}
      </ReactMarkdown>
    </article>
  )
}
