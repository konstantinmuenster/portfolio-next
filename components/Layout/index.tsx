import { useRouter } from 'next/router';

import { styled } from '@config/stitches.config';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const ContentWrapper = styled('div', {
  width: '100%',
  maxWidth: '52rem',
  margin: '0 auto',
  px: '$pagePadding',
});

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const isFrontpage = router.pathname === '/';
  return (
    <>
      <Header variant={isFrontpage ? 'withoutLogo' : 'withLogo'} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
