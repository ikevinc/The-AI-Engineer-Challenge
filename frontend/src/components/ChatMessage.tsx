import React from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`message-bubble max-w-[80%] ${
          isUser
            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20'
            : 'bg-gradient-to-r from-gray-800/20 to-gray-700/20'
        }`}
      >
        <div className="flex items-start gap-3">
          {!isUser && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
              AI
            </div>
          )}
          <div className="flex-1">
            <div className="text-sm font-semibold mb-1 text-gray-300">
              {isUser ? 'You' : 'AI Assistant'}
            </div>
            <div className="text-gray-100 whitespace-pre-wrap">{message.content}</div>
          </div>
          {isUser && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
              U
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 