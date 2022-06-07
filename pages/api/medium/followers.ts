import { respondError, respondSuccess } from '@lib/api/common/response';
import { getMediumFollowers } from '@lib/api/medium/followers';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET')
    return respondError(res, { status: 405, message: 'Method not supported.' });

  if (!req.query.user)
    return respondError(res, { status: 422, message: 'No username given.' });

  if (Array.isArray(req.query.user))
    return respondError(res, { status: 422, message: 'Multiple users given.' });

  try {
    const followers = await getMediumFollowers(req.query.user);
    return respondSuccess(res, { data: followers });
  } catch (error) {
    return respondError(res, { status: 500, message: "Can't retrieve data." });
  }
};

export default handler;
