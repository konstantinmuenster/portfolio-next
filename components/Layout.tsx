import { styled } from '@config/stitches.config';
import { Box } from './Box';
import { Footer } from './Footer';
import { Header } from './Header';

export const ContentWrapper = styled(Box, {
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',
});

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">
        <ContentWrapper>{children}</ContentWrapper>
      </Box>
      <Footer />
    </>
  );
};
