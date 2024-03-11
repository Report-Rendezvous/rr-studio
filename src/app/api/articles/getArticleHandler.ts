import { NextRequest, NextResponse } from 'next/server'
import {
  db,
  article_overviews,
  articles,
  writings
} from 'report-rendezvous-driver'
import { desc, eq } from 'drizzle-orm'

export const getArticleHandler = async (req: NextRequest) => {
  const authorId = req.nextUrl.searchParams.get('authorId')

  if (!authorId) {
    return NextResponse.json(
      { message: 'authorId is required' },
      { status: 400 }
    )
  }

  const results = await db
    .select({
      id: articles.id,
      title: article_overviews.title,
      createdAt: writings.created_at,
      authorId: writings.author_id
    })
    .from(articles)
    .innerJoin(article_overviews, eq(article_overviews.article_id, articles.id))
    .innerJoin(writings, eq(writings.article_id, articles.id))
    .where(eq(writings.author_id, authorId))
    .orderBy(desc(writings.created_at))

  return NextResponse.json(results)
}
