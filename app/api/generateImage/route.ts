import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  console.log("🔵 Generating image for prompt:", prompt);

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size: "1024x1024",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("🔴 DALL·E API Error:", error);
    return NextResponse.json({ error: 'Image generation failed' }, { status: 500 });
  }

  const data = await response.json();
  const imageUrl = data.data[0].url;

  console.log("✅ Image generated:", imageUrl);

  return NextResponse.json({ image: imageUrl });
}