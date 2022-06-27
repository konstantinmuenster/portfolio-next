export const getBaseUrl = () =>
  typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.host}`
    : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://konstantin.digital';
