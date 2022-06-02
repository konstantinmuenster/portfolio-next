import type { NextRouter } from 'next/router';
import qs from 'query-string';

type QueryParam = {
  key: string;
  value: string[] | undefined;
};

export const setQueryParam = (router: NextRouter, param: QueryParam) => {
  const newQuery = { ...router.query, [param.key]: param.value };
  const queryString = qs.stringify(newQuery, { arrayFormat: 'comma' });
  router.push(`${router.pathname}?${queryString}`);
};
