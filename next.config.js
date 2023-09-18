/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
      styledComponents: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
          port: '',
          pathname: '/**',
        },
      ],
    }
  }

module.exports = nextConfig
