import { NextRequest, NextResponse } from 'next/server'

const getReportHandler = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (params.id === '1') {
    return NextResponse.json({
      id: params.id,
      meta: {
        title: `TITLE ${params.id}`,
        thumbnail: 'さむね'
      }
    })
  }

  return NextResponse.json({ error: 'Report Not Found' }, { status: 404 })
}

export { getReportHandler as GET }
