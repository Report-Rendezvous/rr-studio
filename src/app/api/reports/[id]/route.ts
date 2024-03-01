import { NextRequest, NextResponse } from 'next/server'

type ReportJson = {
  id: string
  meta: {
    title: string
    thumbnail: string
  }
}

const handler = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (params.id === '1' || params.id === '2') {
    return NextResponse.json({
      id: params.id,
      meta: {
        title: `Report ${params.id}`,
        thumbnail: 'thumbnail'
      }
    })
  }

  return new NextResponse(JSON.stringify({ error: 'Not Found' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export { handler as GET }
