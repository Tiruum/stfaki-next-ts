/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `http://backend/:path*`, // http://backend/:path* or http://localhost:5000/:path*
          basePath: false,
        },
      ]
  }
}

module.exports = nextConfig
