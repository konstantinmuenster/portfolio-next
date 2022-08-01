type GetBaseUrlOptions = {
  omitProtocol?: boolean;
};

export const getBaseUrl = (options?: GetBaseUrlOptions) => {
  if (typeof window !== 'undefined') {
    return options?.omitProtocol
      ? window.location.host
      : `${window.location.protocol}//${window.location.host}`;
  }

  if (process.env.NODE_ENV === 'development') {
    return options?.omitProtocol ? 'localhost:3000' : 'http://localhost:3000';
  }

  return options?.omitProtocol
    ? 'konstantin.digital'
    : 'https://konstantin.digital';
};
