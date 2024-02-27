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
  const res = await fetch(`http://localhost:3000/api/reports/${params.id}`, {
    next: {
      revalidate: 3600
    }
  })

  if (res.status === 404) {
    return NextResponse.json({ error: 'Not Found' }, { status: 404 })
  }

  const response: ReportJson = {
    id: '1',
    meta: {
      title: 'Report 1',
      thumbnail: 'thumbnail'
    }
  }

  return NextResponse.json(response)
}

export { handler as GET }
