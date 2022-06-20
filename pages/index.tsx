import type { GetStaticProps, NextPage } from 'next';
import { SocialProfileJsonLd, SocialProfileJsonLdProps } from 'next-seo';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { getAllProjects, getProject } from '@lib/mdx/projects';
import { HeroSection } from '@sections/HomePage/Hero';
import { IntroductionSection } from '@sections/HomePage/Introduction';
import { LatestPostsSection } from '@sections/HomePage/LatestPosts';
import { LatestProjectsSection } from '@sections/HomePage/LatestProjects';
import { ContactCard } from '@components/Card';
import { byNewestDate } from '@utils/sort';
import { SiteUrl } from '@config/seo.config';
import { socialProfiles } from '@config/profiles.config';

import type { BlogPostMatter } from './blog/[slug]';
import type { ProjectMatter, ProjectProps } from './projects/[slug]';

const jsonLdProps: SocialProfileJsonLdProps = {
  name: 'Konstantin Münster',
  type: 'Person',
  url: SiteUrl,
  sameAs: socialProfiles
    .filter(({ to }) => !to.includes(SiteUrl) && !to.includes('mailto:'))
    .map(({ to }) => to),
};

type HomePageProps = {
  posts: BlogPostMatter[];
  projects: ProjectProps[];
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
      posts: getAllBlogPosts().sort(byNewestDate),
      projects: await buildProjectProps(getAllProjects()),
    },
  };
};

const buildProjectProps = async (
  projects: ProjectMatter[]
): Promise<ProjectProps[]> => {
  return await Promise.all(
    projects.map(async frontmatter => {
      const mdxCode = (await getProject(frontmatter.slug))?.code;
      return { frontmatter, code: mdxCode ?? '' };
    })
  );
};
