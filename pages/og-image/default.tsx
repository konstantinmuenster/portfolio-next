import type { NextPage } from 'next';
import { ScreenshotCanvas } from 'next-banner';
import { useTheme } from 'next-themes';

import { styled } from '@config/stitches.config';
import { Avatar } from '@components/Avatar';
import { getBaseUrl } from '@utils/getBaseUrl';

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
    padding: '4rem',

    '.details': {
      display: 'flex',
      alignItems: 'center',
      columnGap: '3rem',
      marginBottom: '2rem',

      '.name': {
        h1: {
          display: 'block',
          color: '$primary900',
          fontSize: '4rem',
          lineHeight: '4.5rem',
          maxWidth: '800px',
        },
        span: {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          opacity: 0.8,
        },
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

const OGImageDefaultTemplatePage: NextPage = () => {
  // always use dark theme to ensure color consistency
  useTheme().setTheme('dark');

  return (
    <StyledScreenshotCanvas>
      <div className="content">
        <div className="details">
          <Avatar size={200} />
          <div className="name">
            <h1>Konstantin Münster</h1>
            <span>Web & Product Developer</span>
          </div>
        </div>
        <div className="site-url">{getBaseUrl().substring(8)}</div>
      </div>
    </StyledScreenshotCanvas>
  );
};

OGImageDefaultTemplatePage.defaultProps = { renderWithoutLayout: true };

export default OGImageDefaultTemplatePage;
