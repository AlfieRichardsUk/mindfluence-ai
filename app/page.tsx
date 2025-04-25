'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [conversationActive, setConversationActive] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  // Generate or retrieve sessionId from localStorage
  useEffect(() => {
    const existingId = localStorage.getItem('sessionId');
    if (!existingId) {
      const newId = crypto.randomUUID();
      localStorage.setItem('sessionId', newId);
    }
  }, []);

  const playAudioFromBlob = async (response: Response) => {
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    // Stop any current playback (interrupt)
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    currentAudioRef.current = audio;

    return new Promise<void>((resolve) => {
      audio.onended = () => {
        resolve();
      };
      audio.play();
    });
  };

  const startRecording = async () => {
    // Stop Joe if he's talking
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    setIsRecording(true);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const formData = new FormData();
      formData.append('file', audioBlob);

      const whisperRes = await fetch('/api/whisper', {
        method: 'POST',
        body: formData,
      });

      const { text } = await whisperRes.json();
      console.log('Transcribed text:', text);

      const sessionId = localStorage.getItem('sessionId');

      const gptRes = await fetch('/api/whisper/chat', {
        method: 'POST',
        body: JSON.stringify({ message: text }),
        headers: {
          'Content-Type': 'application/json',
          'x-session-id': sessionId || 'anonymous',
        },
      });

      const { reply } = await gptRes.json();

      const elevenRes = await fetch('/api/voice', {
        method: 'POST',
        body: JSON.stringify({ text: reply }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await playAudioFromBlob(elevenRes);
      setIsRecording(false);

      // Auto-loop into next recording
      startRecording();
    };

    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
    }, 5000);
  };

  const playIntroMessage = async () => {
    const introRes = await fetch('/api/voice', {
      method: 'POST',
      body: JSON.stringify({
        text: "Hey... Thanks for taking this moment for yourself. I'm Joe. What's your name?",
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await playAudioFromBlob(introRes);
    startRecording(); // start auto loop after intro
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#fefcf6]">
      <button
        onClick={async () => {
          if (!conversationActive) {
            setConversationActive(true);
            await playIntroMessage();
          } else {
            startRecording();
          }
        }}
        className={`rounded-full w-[250px] h-[250px] transition-all duration-300 ${
          isRecording ? 'pulse-ring' : ''
        }`}
        style={{
          backgroundColor: '#f9dd5f',
          boxShadow: '0 0 0 10px rgba(249, 221, 95, 0.3)',
          border: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
        }}
      />
      <p
        style={{
          position: 'fixed',
          bottom: '5px',
          width: '100%',
          textAlign: 'center',
          fontSize: '10px',
          color: '#000',
          zIndex: 50,
        }}
      >
        Joe can make mistakes. Check important info.
      </p>
    </main>
  );
}