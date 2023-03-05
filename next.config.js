/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require('@plaiceholder/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['avatars.githubusercontent.com'],
    minimumCacheTTL: 3600,
  },
};

module.exports = withPlaiceholder(nextConfig);
