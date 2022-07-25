/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require('@plaiceholder/next');
const { withNextBanner } = require('next-banner');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = withPlaiceholder(
  withNextBanner({
    nextBanner: {
      domain: 'https://konstantin.digital',
      layoutDir: 'og-image',
      outputDir: 'images/og-image',
    },
    ...nextConfig,
  })
);
