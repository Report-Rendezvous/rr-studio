import { NextRequest, NextResponse } from 'next/server'

const handler = async (req: NextRequest) => {
  const response = [
    {
      id: '1',
      title: 'Report 1'
    },
    {
      id: '2',
      title: 'Report 3'
    },
    {
      id: '3',
      title: 'Report 3'
    },
    {
      id: '4',
      title: 'Report 4'
    }
  ]

  return NextResponse.json(response)
}

export { handler as GET }
