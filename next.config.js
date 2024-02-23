/** @type {import('next').NextConfig} */
const path = require('path');
// const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
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

const plugins = [
  // withCSS,
  withImages
  // Thêm các plugin khác nếu cần
];

module.exports = withPlugins(plugins, nextConfig);