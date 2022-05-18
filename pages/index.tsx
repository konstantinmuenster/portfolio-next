import type { GetStaticProps, NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { getAllProjects, getProject } from '@lib/mdx/projects';
import { HeroSection } from '@sections/Hero';
import { IntroductionSection } from '@sections/Introduction';
import { LatestPostsSection } from '@sections/LatestPosts';
import { LatestProjectsSection } from '@sections/LatestProjects';
import { ContactAppendix } from '@components/ContactAppendix';

import type { BlogPostMatter } from './blog/[slug]';
import type { ProjectMatter, ProjectProps } from './projects/[slug]';

type HomePageProps = {
  posts: BlogPostMatter[];
  projects: ProjectProps[];
};

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <LatestPostsSection posts={props.posts} />
      <LatestProjectsSection projects={props.projects} />
      <ContactAppendix />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllBlogPosts(),
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
