import Link from 'next/link'

type ArticleCardProps = {
  article: Article
}

type Article = {
  id: string
  title: string
  revisionDate: string
  draft: boolean
}

type DraftArticle = Article & {
  draft: true
}

type PublishedArticle = Article & {
  draft: false
}

export const ArticleCard = async ({ article }: ArticleCardProps) => {
  return (
    <article className="flex py-10flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted">
      <div className="min-w-full">
        <div className="flex">
          <div className="flex-1">
            <Link
              href={`/editor/${article.id}`}
              rel="noopener noreferrer"
              target="_blank"
              className="block min-w-full"
            >
              {article.title}
            </Link>
          </div>
          <div>ボタン類</div>
        </div>
      </div>
      <footer>
        <div>
          下書き
          <time>{article.revisionDate} 2024-03-09</time>
        </div>
      </footer>
    </article>
  )
}
