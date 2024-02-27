import { NextRequest, NextResponse } from 'next/server'

const hander = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  return NextResponse.json({
    id: '1',
    name: 'John Doe'
  })
}

export { hander as GET }
