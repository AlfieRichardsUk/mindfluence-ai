import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { userId, userMessage, aiResponse } = await req.json()

  try {
    const saved = await prisma.conversation.create({
      data: {
        userId,
        userMessage,
        aiResponse,
      },
    })

    return NextResponse.json({ success: true, saved })
  } catch (error) {
    console.error('❌ Failed to save conversation:', error)
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 })
  }
}