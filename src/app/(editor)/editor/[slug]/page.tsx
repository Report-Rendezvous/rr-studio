import Editor from '@/lib/components/editor'

type EditorPageProps = {
  params: {
    slug: string
  }
}

export default async function EditorPage({
  params: { slug }
}: EditorPageProps) {
  // find article by url-schema
  // const article = await getArticleBySlug(slug)
  // if (!article) {
  //   notFound()
  // }

  return (
    <>
      {slug}
      <Editor />
    </>
  )
}

async function getArticleBySlug(slug: string) {
  
  return null
}