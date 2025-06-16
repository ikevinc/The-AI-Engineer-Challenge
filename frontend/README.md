# NEXUS Frontend

This is the frontend for the NEXUS application. It's built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- OpenAI API key

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Real-time chat interface
- Streaming responses from the AI
- Responsive design
- Loading indicators
- Error handling

## Development

The application is built with:
- Next.js 14
- TypeScript
- Tailwind CSS
- React

The main components are:
- `page.tsx`: Main chat interface
- `ChatMessage.tsx`: Individual message component
- `ChatInput.tsx`: Message input component 