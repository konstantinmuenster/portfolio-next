import axios from 'axios';

const JSON_PREFIX = '])}while(1);</x>';

export type GetMediumFollowersResponse = {
  username: string;
  followers: number;
};

export const getMediumFollowers = async (
  user: string
): Promise<GetMediumFollowersResponse> => {
  const { data } = await axios.get(`https://medium.com/@${user}?format=json`, {
    headers: { Accept: 'application/json' },
    transformResponse: [data => JSON.parse(data.replace(JSON_PREFIX, ''))],
  });

  const userId = data.payload.user.userId;
  if (!userId) throw Error('Could not retrieve userId for given username.');

  return {
    username: user,
    followers: data.payload.references.SocialStats[userId].usersFollowedByCount,
  };
};
