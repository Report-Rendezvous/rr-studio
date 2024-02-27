import React from 'react'
import Link from 'next/link'

export const markdownConvertProcessor = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold py-6">{props.children}</h1>
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold py-6">{props.children}</h2>
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-bold py-6">{props.children}</h3>
  ),
  h4: (props: any) => (
    <h3 className="text-xl font-bold py-6">{props.children}</h3>
  ),
  a: (props: any) => (
    <Link href={props.href} className="text-blue-500">
      {props.children}
    </Link>
  ),
  p: (props: any) => <p className="text-base leading-7">{props.children}</p>,
  ol: (props: any) => (
    <ol className="list-decimal p-5 mx-2">{props.children}</ol>
  ),
  ul: (props: any) => <ul className="list-disc p-5 mx-2">{props.children}</ul>
}
