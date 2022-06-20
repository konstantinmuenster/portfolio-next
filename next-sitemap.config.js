/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://konstantin.digital',
  generateRobotsTxt: true,
};

module.exports = config;
