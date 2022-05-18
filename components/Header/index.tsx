import { headerNavigation } from '@config/navigation.config';
import { darkTheme, styled } from '@config/stitches.config';

import { useVisibilityOnScroll } from '@hooks/useVisibilityOnScroll';

import { ThemeToggle } from '@components/ThemeToggle';
import { ContentWrapper } from '@components/Layout';
import { Logo } from '@components/Logo';
import { NavigationMenu } from '@components/NavigationMenu';
import { DropdownMenu } from '@components/DropdownMenu';

export const HEADER_HEIGHT = 80;

const StyledHeader = styled('header', {
  position: 'fixed',
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,

  width: '100%',
  height: `${HEADER_HEIGHT}px`,
  transition: '$default',
  backgroundColor: 'transparent',

  '> div': {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: '100%',
    alignItems: 'center',

    '> #theme-toggle': {
      mx: '1rem',
      justifySelf: 'flex-end',
      '@md': { marginLeft: '2rem', marginRight: 0 },
    },
  },

  variants: {
    withBackground: {
      true: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(5px)',
        borderBottom: '2px solid $subtext',
        [`.${darkTheme} &`]: { backgroundColor: 'rgba(20, 20, 21, 0.9)' },
      },
    },
    hidden: {
      true: {
        top: `-${HEADER_HEIGHT}px`,
      },
    },
    variant: {
      withLogo: {
        '> div': {
          '> a.logo': {
            display: 'flex',
            alignItems: 'center',
            py: '0.5rem',
          },

          '> #header-navigation': {
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
          },
        },

        '#header-navigation': { display: 'none' },
        '#mobile-navigation': { display: 'flex' },

        '@md': {
          '#header-navigation': { display: 'flex' },
          '#mobile-navigation': { display: 'none' },
        },
      },
      withoutLogo: {
        '> div': {
          '> #header-navigation': {
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',

            '> ul > li': {
              display: 'none',
              '&:nth-of-type(1)': { display: 'block' },
              '&:nth-of-type(2)': { display: 'block' },
              '@md': { display: 'block' },
            },

            '> ul > li > a': {
              marginLeft: 0,
              marginRight: '1rem',
              '@md': { marginRight: '2rem' },
            },
          },
        },

        '#header-navigation': { display: 'flex' },
        '#mobile-navigation': { display: 'flex' },

        '@md': {
          '#header-navigation': { display: 'flex' },
          '#mobile-navigation': { display: 'none' },
        },
      },
    },
  },
});

type HeaderProps = {
  variant: 'withoutLogo' | 'withLogo';
};

export const Header: React.FC<HeaderProps> = props => {
  const { show, lastScrollY } = useVisibilityOnScroll();

  return (
    <StyledHeader
      variant={props.variant}
      withBackground={lastScrollY > 50}
      hidden={!show}
    >
      <ContentWrapper>
        {props.variant === 'withLogo' ? <Logo asLink /> : <></>}
        <NavigationMenu name="Header Navigation" items={headerNavigation} />
        <ThemeToggle />
        <DropdownMenu name="Mobile Navigation" items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
