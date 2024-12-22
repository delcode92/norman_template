// export const config = {
//     api: {
//       responseLimit: false,
//     }
//   };
  
//   export default async function handler(req, res) {
//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
//     res.setHeader('Connection', 'keep-alive');
    
//     // Important: Disable response buffering
//     res.writeHead(200, {
//       'Transfer-Encoding': 'chunked'
//     });
//   }
  
export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
    externalResolver: true, // Tell Next.js this route uses external resolution
  },
};

export default async function handler(req, res) {
  // Enable connection timeout of 0 (infinite)
  req.setTimeout(0);
  res.setTimeout(0);

  const controller = new AbortController();
  const { signal } = controller;

  try {
    const response = await fetch('http://localhost:8082/get_active_logs', {
      signal,
      headers: {
        'Accept': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // Set headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    // Create a transform stream to handle the data
    const transformStream = new TransformStream({
      transform(chunk, controller) {
        controller.enqueue(chunk);
      },
    });

    // Pipe the response through the transform stream
    await response.body
      .pipeThrough(transformStream)
      .pipeTo(new WritableStream({
        write(chunk) {
          res.write(chunk);
        },
        close() {
          res.end();
        },
      }));

  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      console.error('API route error:', error);
    }
    res.setTimeout(0);
    res.end();
  }

  // Handle client disconnect
  req.on('close', () => {
    controller.abort();
  });
}