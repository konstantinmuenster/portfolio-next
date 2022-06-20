import type { Endpoints } from '@octokit/types';
import { request } from '@octokit/request';

import { REPOSITORY_NAME } from '@config/content.config';

type CommitData =
  Endpoints['GET /repos/{owner}/{repo}/commits']['response']['data'];

type Collaborator = { user: string; avatar: string };

export type GetCollaboratorsByFilePathResponse = {
  lastEdited?: string | undefined;
  collaborators?: Collaborator[] | undefined;
};

export const getCollaboratorsByFilePath = async (
  filePath: string
): Promise<GetCollaboratorsByFilePathResponse> => {
  const result = await request<CommitData>({
    method: 'GET',
    url: '/repos/{owner}/{repo}/commits?path={path}',
    owner: 'konstantinmuenster',
    repo: REPOSITORY_NAME,
    path: filePath,
    type: 'private',
    headers: {
      authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  return {
    lastEdited: result.headers['last-modified'],
    collaborators: getUniqueListOfCollaborators(result.data),
  };
};

const getUniqueListOfCollaborators = (data: CommitData): Collaborator[] => {
  if (!data.length) return [];

  return data.reduce((prev, { author }) => {
    if (!author) return prev;
    if (prev.some(({ user }) => author.login === user)) return prev;

    const newCollaborator = { user: author.login, avatar: author.avatar_url };
    return [...prev, newCollaborator];
  }, [] as Collaborator[]);
};
