'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import Logo from '@/components/Logo';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from backend');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black relative">
      {/* Background Elements */}
      <div className="lightning">
        <div className="lightning-bolt"></div>
        <div className="lightning-bolt"></div>
        <div className="lightning-bolt"></div>
      </div>
      <div className="electric-lines">
        <div className="electric-line"></div>
        <div className="electric-line"></div>
        <div className="electric-line"></div>
      </div>
      <div className="electric-circles">
        <div className="electric-circle"></div>
        <div className="electric-circle"></div>
        <div className="electric-circle"></div>
      </div>
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <header className="text-center mb-6 glass-effect p-4 rounded-lg electric-container max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Logo />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00f3ff] via-[#00b4d8] to-[#00f5d4] text-transparent bg-clip-text">
              NEXUS
            </h1>
          </div>
          <p className="text-gray-400 text-sm tracking-wider">
            <span className="text-[#00f3ff]">AI</span> • <span className="text-[#00b4d8]">Intelligence</span> • <span className="text-[#00f5d4]">Evolution</span>
          </p>
        </header>

        <div className="glass-effect rounded-lg p-4 mb-4 max-w-4xl mx-auto">
          <div className="chat-container h-[65vh] overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
} 