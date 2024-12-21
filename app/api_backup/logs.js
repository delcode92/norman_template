export default async function handler(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
  
    try {
      const response = await fetch('http://localhost:8082/get_active_logs');
      response.body.pipe(res);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch logs' });
    }
  }
  