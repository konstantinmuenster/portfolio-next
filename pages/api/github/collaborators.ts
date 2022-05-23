import { respondError, respondSuccess } from '@lib/api/common/response';
import { getCollaboratorsByFilePath } from '@lib/api/github/collaborators';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET')
    return respondError(res, { status: 405, message: 'Method not supported.' });

  if (!req.query.filePath)
    return respondError(res, { status: 422, message: 'No file specified.' });

  if (Array.isArray(req.query.filePath))
    return respondError(res, { status: 422, message: 'Multiple files given.' });

  try {
    const collaborators = await getCollaboratorsByFilePath(req.query.filePath);
    return respondSuccess(res, { data: collaborators });
  } catch (error) {
    return respondError(res, { status: 500, message: "Can't retrieve data." });
  }
};

export default handler;
