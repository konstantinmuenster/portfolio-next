import type { NextRouter } from 'next/router';

import { OGImageType } from '@components/OGImage';
import { GenerateOGImageQuery } from '@lib/api/og-image/generate';

export const isValidGenerateOGImageQuery = (
  query: NextRouter['query']
): query is GenerateOGImageQuery =>
  !!query.for &&
  !Array.isArray(query.for) &&
  (Object.values(OGImageType) as string[]).includes(query.for);
