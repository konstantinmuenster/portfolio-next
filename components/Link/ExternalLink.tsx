import { DiagonalArrowRightUp as ArrowRightUp } from '@styled-icons/evaicons-solid';

import { styled } from '@config/stitches.config';
import { LinkProps } from '.';

const StyledExternalLink = styled('a', {
  position: 'relative',
  paddingRight: '10px',

  'svg[data-external-hint]': {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    size: '14px',
  },
});

type ExternalLinkProps = Omit<LinkProps, 'withStyles'>;

export const ExternalLink: React.FC<ExternalLinkProps> = ({ to, ...props }) => {
  return (
    <StyledExternalLink
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {props.children} <ArrowRightUp data-external-hint aria-hidden="true" />
    </StyledExternalLink>
  );
};
