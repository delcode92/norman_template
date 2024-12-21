// app/api/logs/route.js
import { headers } from 'next/headers';

export async function GET() {
  const encoder = new TextEncoder();
  
  // Create a new ReadableStream
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const response = await fetch('http://localhost:8082/get_active_logs');
        
        if (!response.ok) {
          controller.error('Failed to fetch logs');
          return;
        }
        const reader = response.body.getReader();
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          controller.enqueue(value);
        }
        
        controller.close();
      } catch (error) {
        console.error('Stream error:', error);
        controller.error(error);
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}