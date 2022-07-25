import type { NextPage } from 'next';
import { ScreenshotCanvas, useBannerData } from 'next-banner';
import { useTheme } from 'next-themes';

import { styled } from '@config/stitches.config';
import { Avatar } from '@components/Avatar';

const StyledScreenshotCanvas = styled(ScreenshotCanvas, {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient($violet 60%, $pinky 60%) !important',
  padding: '2rem',

  '.content': {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: '$secondary50',
    borderRadius: '$default',
    padding: '2rem',

    h1: {
      color: '$primary900',
      fontSize: '3rem',
      lineHeight: '3.875rem',
      maxWidth: '800px',
      marginTop: '2rem',
      marginBottom: '4rem',
    },

    '.category-type': {
      display: 'flex',
      columnGap: '0.5rem',

      '> span': {
        display: 'block',
        padding: '0.5rem 1rem',
        borderRadius: '$default',
        background: '$text',
        color: '$primary50',
        fontWeight: 500,
      },
    },

    '.author': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '1rem',
      fontSize: '1.5rem',
      paddingBottom: '5rem',

      '.written-by': {
        display: 'block',
        fontSize: '$big',
        opacity: 0.8,
      },
    },

    '.site-url': {
      position: 'absolute',
      bottom: '2rem',
      left: '2rem',
      fontSize: '$default',
      opacity: 0.8,
    },
  },
});

const OGImagePostTemplatePage: NextPage = () => {
  // always use dark theme to ensure color consistency
  useTheme().setTheme('dark');

  const {
    meta: { title = 'Placeholder title' },
    custom: { category = 'Web Development' },
  } = useBannerData();

  return (
    <StyledScreenshotCanvas>
      <div className="content">
        <div className="category-type">
          {category ? <span>{category}</span> : undefined}
        </div>
        {title ? <h1>{title}</h1> : undefined}
        <div className="author">
          <Avatar size={62} />
          <div className="name">
            <span className="written-by">Written by</span>
            Konstantin Münster
          </div>
        </div>
        <div className="site-url">konstantin.digital/blog</div>
      </div>
    </StyledScreenshotCanvas>
  );
};

OGImagePostTemplatePage.defaultProps = { renderWithoutLayout: true };

export default OGImagePostTemplatePage;
