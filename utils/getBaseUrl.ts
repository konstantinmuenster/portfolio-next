export const getBaseUrl = () =>
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.SITE_URL;
