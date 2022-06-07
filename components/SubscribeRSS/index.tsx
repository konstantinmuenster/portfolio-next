import { Rss } from '@styled-icons/foundation';

import { styled } from '@config/stitches.config';

const StyledSubscribeRSS = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.5rem',
  fontSize: '$mini',
  lineHeight: '$mini',
  svg: { size: 18 },
});

export const SubscribeRSS: React.FC = () => {
  return (
    <StyledSubscribeRSS
      href="/rss.xml"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Rss /> <span>Subscribe RSS</span>
    </StyledSubscribeRSS>
  );
};
