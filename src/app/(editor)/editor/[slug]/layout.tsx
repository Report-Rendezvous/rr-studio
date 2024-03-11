interface EditorLayoutProps {
  children: React.ReactNode
}

export default async function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="min-h-screen overflow-auto">
      <main className="flex-1 h-full">{children}</main>
    </div>
  )
}
