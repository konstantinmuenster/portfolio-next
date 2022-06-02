import type { ParsedUrlQuery } from 'querystring';

export const getQueryParam = (query: ParsedUrlQuery, param: string) => {
  let queryParam = query[param];
  if (!queryParam) return [];

  if (!Array.isArray(queryParam)) queryParam = [queryParam];

  return queryParam
    .reduce((prev, curr) => [...prev, ...curr.split(',')], [] as string[])
    .filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    });
};
