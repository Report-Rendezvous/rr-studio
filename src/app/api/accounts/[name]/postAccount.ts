import { NextRequest, NextResponse } from 'next/server'

export const postUserHandler = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  console.log(req.body)

  return NextResponse.json({}, { status: 500 })
}
