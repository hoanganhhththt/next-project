/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com'],
  },
  babel: {
    presets: ['@babel/preset-react'],
  },
};

module.exports = nextConfig;