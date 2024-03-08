'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export function RichEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello Rich Editor! 🌎️</p>'
  })

  return <EditorContent editor={editor} />
}
