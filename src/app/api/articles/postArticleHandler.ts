import { NextRequest, NextResponse } from 'next/server'
import {
  ArticleCommandModel,
  articles,
  writings,
  db
} from 'report-rendezvous-driver'

export const postArticleHandler = async (
  req: NextRequest,
  res: NextResponse<ArticleCommandModel>
) => {
  const params: ArticleCommandModel = await req.json()

  try {
    const result = await db.transaction(async (tx) => {
      const createdId = await tx
        .insert(articles)
        .values({
          id: params.id
        })
        .returning()
        .onConflictDoNothing()

      await tx
        .insert(writings)
        .values({
          article_id: params.id,
          author_id: params.authorId,
          created_at: new Date().toISOString()
        })
        .onConflictDoNothing()

      return createdId[0]
    })

    return NextResponse.json(
      { message: `article post id: ${result}` },
      { status: 201 }
    )
  } catch (e) {
    return NextResponse.json({ message: `error: ${e}` }, { status: 500 })
  }
}
