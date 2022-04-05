import { styled } from '@config/stitches.config';

const StyledCaption = styled('span', {
  fontSize: '0.875rem',
  lineHeight: '1.125rem',
  color: '$subtext',
});

export const Caption: React.FC = ({ children }) => {
  return <StyledCaption>{children}</StyledCaption>;
};
