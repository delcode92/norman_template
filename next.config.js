// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/logs-stream',
        destination: 'http://localhost:8082/get_active_logs',
        has: [
          {
            type: 'header',
            key: 'Accept',
            value: 'text/event-stream',
          },
        ],
      },
    ];
  },
  experimental: {
    // Remove the unsupported option
    scrollRestoration: true,
  },
}


// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/logs-stream',
//         destination: 'http://localhost:8082/get_active_logs',
//       },
//     ];
//   },
// }
