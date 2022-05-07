import type { NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';
import { HeroSection } from '@sections/Hero';
import { IntroductionSection } from '@sections/Introduction';
import { LatestPostsSection } from '@sections/LatestPosts';

import { BlogPostMatter } from './blog/[slug]';

type HomePageProps = {
  posts: BlogPostMatter[];
};

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <LatestPostsSection posts={props.posts} />
      <p>hello</p>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return { props: { posts } };
}
