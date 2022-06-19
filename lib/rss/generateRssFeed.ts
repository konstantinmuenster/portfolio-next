import { Feed } from 'feed';
import { writeFileSync } from 'fs';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { socialProfiles } from '@config/profiles.config';
import { getEmailAddress } from '@utils/getEmailAddress';

export const generateRssFeed = () => {
  const date = new Date();
  const author = {
    name: 'Konstantin Münster',
    email: getEmailAddress(socialProfiles),
    link: process.env.SITE_URL,
  };

  const feed = new Feed({
    title: "Konstantin Münster's Blog",
    description: 'Tutorials, guides, and advice for web developers.',
    id: process.env.SITE_URL ?? 'km-id',
    link: process.env.SITE_URL,
    image: `${process.env.SITE_URL}/favicon.ico`,
    favicon: `${process.env.SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Konstantin Münster`,
    updated: date,
    feedLinks: {
      rss2: `${process.env.SITE_URL}/rss.xml`,
      json: `${process.env.SITE_URL}/rss.json`,
    },
    author,
  });

  getAllBlogPosts().forEach(post => {
    feed.addItem({
      title: post.title,
      id: `${process.env.SITE_URL}/${post.path}`,
      link: `${process.env.SITE_URL}/${post.path}`,
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
