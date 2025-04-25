import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const conversations = await prisma.conversation.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(conversations)
}