/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/bieeeee/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/**`,
      },
    ],
  },
  env: {
    SKILL_URL: process.env.SKILL_URL,
    PROJECT_URL: process.env.PROJECT_URL,
    PROJECT_KEY: process.env.PROJECT_KEY,
    NEXT_PUBLIC_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUD_NAME,
  }
}

module.exports = nextConfig
