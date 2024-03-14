'use client'

import { buttonVariants } from '@/lib/components/ui/button'
import { Icons } from '@/lib/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

async function saveContent() {
  console.log('saveContent')
}

export default function Editor() {
  const [title, setTitle] = useState('無題')

  useEffect(() => {
    console.log('effect')
  }, [])

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello Rich Editor! 🌎️</p>',
    autofocus: true
  })

  return (
    <>
      <form action={saveContent}>
        <header className="sticky top-0 z-40 bg-background border-b">
          <div className="flex h-16 items-center pl-4">
            <Link
              href="/dashboard/articles"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'left-4 top-4 md:left-8 md:top-8'
              )}
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
            </Link>
            <input
              type="text"
              placeholder="Title"
              value={title}
              spellCheck="false"
              autoComplete="Change to title"
              data-tooltip="Title"
              className="flex h-9 rounded-md bg-transparent px-3 py-1 text-xl transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              aria-label="Change to title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </header>
        <div className="container">
          <h1>Editor</h1>
          <div className="w-min-full">
            <Suspense fallback={<div>Loading...</div>}>
              <EditorContent editor={editor} className="focus:outline-none" />
            </Suspense>
          </div>
        </div>
      </form>
    </>
  )
}
