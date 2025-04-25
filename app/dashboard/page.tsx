'use client'

import { useEffect, useState } from 'react'

type Conversation = {
  id: number
  sessionId: string
  userMessage: string
  aiResponse: string
  createdAt: string
}

export default function DashboardPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    fetch('/api/dev/conversations')
      .then(res => res.json())
      .then(data => setConversations(data))
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">🧠 Mindfluence: Dev Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Session ID</th>
              <th>User Message</th>
              <th>AI Response</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {conversations.map(conv => (
              <tr key={conv.id} className="border-t">
                <td>{conv.id}</td>
                <td>{conv.sessionId.slice(0, 8)}...</td>
                <td>{conv.userMessage}</td>
                <td>{conv.aiResponse}</td>
                <td>{new Date(conv.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}