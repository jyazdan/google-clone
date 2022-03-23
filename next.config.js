/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['www.google.com'],
  },
  env: {
    API_KEY: process.env.GOOGLE_API_KEY,
    CONTEXT_KEY: process.env.GOOGLE_CONTEXT_KEY
  },
}