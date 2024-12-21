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
      // Disable body parsing
      bodyParser: false,
      // Disable response size limit
      responseLimit: false,
    },
  };
  
  export default async function handler(req, res) {
    const response = await fetch('http://localhost:8082/get_active_logs', {
      headers: {
        'Accept': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  
    // Pipe the response directly
    response.body.pipe(res);
  
    // Handle client disconnect
    req.on('close', () => {
      response.body.destroy();
    });
  }