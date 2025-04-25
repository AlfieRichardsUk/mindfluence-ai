import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const sessionId = req.headers.get('x-session-id') || 'anonymous';

  const recentMessages = await prisma.conversation.findMany({
    where: { sessionId },
    orderBy: { createdAt: 'asc' },
    take: 5,
  });

  const history = recentMessages.flatMap((msg) => [
    { role: 'user', content: msg.userMessage },
    { role: 'assistant', content: msg.aiResponse },
  ]);

  const messages = [
    {
      role: 'system',
      content: `
        You are Joe, a compassionate and reflective AI therapist.
        - Speak slowly, calmly, and warmly.
        - Ask thoughtful, open-ended questions.
        - Reflect the user's emotions using their language.
        - Don’t say you're an AI. Be present.
        - Explore emotions and thoughts gently.
        - Keep continuity and refer to prior comments.
      `,
    },
    ...history,
    {
      role: 'user',
      content: message,
    },
  ];

  const chat = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages,
    }),
  });

  const data = await chat.json();
  const reply = data.choices?.[0]?.message?.content || '';

  try {
    await prisma.conversation.create({
      data: {
        sessionId,
        userMessage: message,
        aiResponse: reply,
      },
    });
  } catch (err) {
    console.error('❌ Failed to store conversation:', err);
  }

  return NextResponse.json({ reply });
}