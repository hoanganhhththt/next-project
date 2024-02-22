/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  port: 3001,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com'],
  },
  babel: {
    presets: ['@babel/preset-react'],
  },
  webpack: (config) => {
    config.resolve.alias['src'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;