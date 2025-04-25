import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const response = await fetch(
    'https://api.elevenlabs.io/v1/text-to-speech/AeRdCCKzvd23BpJoofzx',
    {
      method: 'POST',
      headers: {
        'xi-api-key': 'sk_1fc6795cd4d46387dd70ee9052aad0325278c79e19f1caa1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    }
  );

  console.log('🔊 ElevenLabs response status:', response.status);

  if (!response.ok) {
    const error = await response.text();
    console.error('❌ ElevenLabs Error:', error);
    return NextResponse.json({ error: 'Failed to generate audio' }, { status: 500 });
  }

  const audioBuffer = await response.arrayBuffer();

  return new NextResponse(audioBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'inline; filename="voice.mp3"',
    },
  });
}