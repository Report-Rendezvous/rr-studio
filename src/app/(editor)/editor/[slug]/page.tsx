import { RichEditor } from '@/lib/components/richEditor'
import { getCurrentUser } from '@/lib/utils/session'
import { redirect } from 'next/navigation'

export default async function EditorPage() {
  const user = getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container">
      <h1>Editor</h1>
      <div className="w-min-full">
        <RichEditor />
      </div>
    </div>
  )
}
