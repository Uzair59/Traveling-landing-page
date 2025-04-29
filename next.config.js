// next.config.js
const nextConfig = {
  output: 'export', // you're using static export
  images: {
    unoptimized: true, // disable image optimization
  },
}

module.exports = nextConfig
