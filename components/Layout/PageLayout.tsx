import { useRouter } from 'next/router';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export const PageLayout: React.FC = ({ children }) => {
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
