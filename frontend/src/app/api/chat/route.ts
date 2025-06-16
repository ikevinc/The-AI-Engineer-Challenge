import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_message: body.message,
        developer_message: "You are a helpful AI assistant.",
        model: "gpt-4.1-mini",
        api_key: process.env.OPENAI_API_KEY
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Backend error:', errorData);
      throw new Error(errorData?.detail || `Backend error: ${response.status} ${response.statusText}`);
    }

    // Read the streaming response
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No reader available');
    }

    let fullResponse = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const text = new TextDecoder().decode(value);
      fullResponse += text;
    }

    return NextResponse.json({ message: fullResponse });
  } catch (error) {
    console.error('Error in chat API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to get response from backend';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 