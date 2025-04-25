import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as Blob;

  if (!file) {
    return NextResponse.json({ error: 'No audio file received' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const openaiRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
    },
    body: (() => {
      const form = new FormData();
      form.append('file', new File([buffer], 'audio.webm'));
      form.append('model', 'whisper-1');
      form.append('language', 'en'); // Force English transcription
      return form;
    })(),
  });

  const data = await openaiRes.json();

  if (!data.text) {
    return NextResponse.json({ error: 'Whisper failed to transcribe audio' }, { status: 500 });
  }

  return NextResponse.json({ text: data.text });
}