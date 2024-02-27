import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { markdownConvertProcessor } from '@/lib/components/markdownConvert'

async function getPrivacyPolicy() {
  const response = await fetch(
    'https://raw.githubusercontent.com/Report-Rendezvous/rr-docs/main/legal/privacy-policy.md'
  )
  return response.text()
}

export default async function PrivacyPage() {
  const markdownText = await getPrivacyPolicy()
  return (
    <article className="max-w-screen-md">
      <ReactMarkdown components={markdownConvertProcessor}>
        {markdownText}
      </ReactMarkdown>
    </article>
  )
}
