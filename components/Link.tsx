import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { DiagonalArrowRightUp as ArrowRightUp } from '@styled-icons/evaicons-solid';

import { styled } from '@config/stitches.config';

const isExternalLink = (link: string) =>
  /(?:^[a-z][a-z0-9+\.-]*:|\/\/)/.test(link);

const StyledExternalLink = styled('a', {
  position: 'relative',
  paddingRight: '10px',

  'svg[data-external-hint]': {
    position: 'absolute',
    top: 0,
    right: 0,
    size: '14px',
  },
});

export const Link: React.FunctionComponent<{
  to: string;
}> = props => {
  const router = useRouter();

  const labelString = props.children?.toString();
  const isExternal = isExternalLink(props.to);
  const ariaProps = {
    'aria-label': `Go to ${labelString} page`,
    'aria-current':
      router.pathname === props.to ? ('page' as const) : undefined,
  };

  return isExternal ? (
    <StyledExternalLink
      href={props.to}
      rel="noopener noreferrer"
      target="_blank"
      {...ariaProps}
      {...props}
    >
      {props.children} <ArrowRightUp data-external-hint aria-hidden="true" />
    </StyledExternalLink>
  ) : (
    <NextLink href={props.to}>
      <a {...ariaProps} {...props}>
        {props.children}
      </a>
    </NextLink>
  );
};
