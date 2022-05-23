import type { NextApiResponse } from 'next';

export const respondError = (
  res: NextApiResponse,
  error: { status: number; message?: string }
) => {
  res.status(error.status).json({
    success: false,
    message: error.message ?? 'Error while processing request',
  });
};

export const respondSuccess = (
  res: NextApiResponse,
  data: { data: unknown }
) => {
  res.status(200).json({
    success: true,
    ...data,
  });
};
