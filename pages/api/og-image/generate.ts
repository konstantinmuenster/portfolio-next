import type { NextApiHandler } from 'next';

import { generateOGImage } from '@lib/api/og-image/generate';
import { respondError, respondSuccess } from '@lib/api/common/response';
import { isValidGenerateOGImageQuery } from '@utils/router/isValidQuery';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET')
    return respondError(res, { status: 405, message: 'Method not supported.' });

  if (!req.query.for)
    return respondError(res, { status: 422, message: 'No type given.' });

  if (!isValidGenerateOGImageQuery(req.query))
    return respondError(res, { status: 422, message: 'Unknown type given.' });

  try {
    const image = await generateOGImage(req.query);
    return respondSuccess(res, { data: { image } });
  } catch (error) {
    return respondError(res, { status: 500, message: "Can't generate image." });
  }
};

export default handler;
