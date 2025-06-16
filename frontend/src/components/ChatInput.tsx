import { useState, FormEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-transparent border border-[#00f3ff]/30 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff]/50 transition-all duration-300"
            disabled={isLoading}
          />
          <div className="absolute inset-0 rounded-lg pointer-events-none tron-glow" />
        </div>
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className="modern-button flex items-center justify-center min-w-[40px] h-[40px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="loading-spinner" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
} 