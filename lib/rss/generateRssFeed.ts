import { Feed } from 'feed';
import { writeFileSync } from 'fs';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { socialProfiles } from '@config/profiles.config';
import { getEmailAddress } from '@utils/getEmailAddress';
import { getBaseUrl } from '@utils/getBaseUrl';
import { byNewestDate } from '@utils/sort';

export const generateRssFeed = async () => {
  const baseUrl = getBaseUrl();

  const date = new Date();
  const author = {
    name: 'Konstantin Münster',
    email: getEmailAddress(socialProfiles),
    link: baseUrl,
  };

  const feed = new Feed({
    title: "Konstantin Münster's Blog",
    description: 'Tutorials, guides, and advice for web developers.',
    id: baseUrl ?? 'km-id',
    link: baseUrl,
    image: `${baseUrl}/favicon.ico`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Konstantin Münster`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json: `${baseUrl}/rss.json`,
    },
    author,
  });

  (await getAllBlogPosts()).sort(byNewestDate).forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/${post.path}`,
      link: `${baseUrl}/${post.path}`,
      description: post.summary,
      content: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
    });
  });

  console.log('\n Writing rss.xml in public directory...');
  writeFileSync('./public/rss.xml', feed.rss2());

  console.log('\n Writing rss.json in public directory...');
  writeFileSync('./public/rss.json', feed.json1());
};
