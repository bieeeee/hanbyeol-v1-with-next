/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.com',
        port: '',
        pathname: '/bieeeee/**',
      },
      {
        protocol: 'https',
        hostname: '*cloudinary.com',
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/**`,
      },
    ],
  },
  output: "standalone"
}

module.exports = nextConfig
