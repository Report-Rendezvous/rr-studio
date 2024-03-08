import { NextRequest, NextResponse } from 'next/server'

type ArticleModel = {
  id: string
  authorId: string
}

export const postArticleHandler = async (
  req: NextRequest,
  res: NextResponse<ArticleModel>
) => {
  const params: ArticleModel = await req.json()

  console.log('params', params)

  return NextResponse.json(
    { message: `POST /users body=${JSON.stringify(params)}` },
    { status: 201 }
  )
}
