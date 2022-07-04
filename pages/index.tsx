import type { GetStaticProps, NextPage } from 'next';
import { SocialProfileJsonLd, SocialProfileJsonLdProps } from 'next-seo';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { getAllProjects } from '@lib/mdx/projects';
import { HeroSection } from '@sections/HomePage/Hero';
import { IntroductionSection } from '@sections/HomePage/Introduction';
import { LatestPostsSection } from '@sections/HomePage/LatestPosts';
import { LatestProjectsSection } from '@sections/HomePage/LatestProjects';
import { ContactCard } from '@components/Card';
import { byNewestDate } from '@utils/sort';
import { getBaseUrl } from '@utils/getBaseUrl';
import { socialProfiles } from '@config/profiles.config';

import type { EnrichedBlogPostMatter } from './blog/[slug]';
import type { EnrichedProjectMatter } from './projects/[slug]';

const baseUrl = getBaseUrl();

const jsonLdProps: SocialProfileJsonLdProps = {
  name: 'Konstantin Münster',
  type: 'Person',
  url: baseUrl,
  sameAs: socialProfiles
    .filter(({ to }) => !to.includes(baseUrl) && !to.includes('mailto:'))
    .map(({ to }) => to),
};

type HomePageProps = {
  posts: EnrichedBlogPostMatter[];
  projects: EnrichedProjectMatter[];
};

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <>
      <SocialProfileJsonLd {...jsonLdProps} />
      <HeroSection />
      <IntroductionSection />
      <LatestPostsSection posts={props.posts} />
      <LatestProjectsSection projects={props.projects} />
      <ContactCard />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: (await getAllBlogPosts()).sort(byNewestDate),
      projects: await getAllProjects(),
    },
  };
};
