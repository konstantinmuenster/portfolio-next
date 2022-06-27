import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';
import { Icon } from '@components/Icon';

const StyledSubscribeRSS = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.5rem',
  fontSize: '$mini',
  lineHeight: '$mini',
});

export const SubscribeRSS: React.FC = () => {
  return (
    <StyledSubscribeRSS to="/rss.xml" target="_blank" rel="noopener noreferrer">
      <Icon type="RSS" size={18} /> <span>Subscribe RSS</span>
    </StyledSubscribeRSS>
  );
};
