import { headerNavigation } from '@config/navigation.config';
import { styled } from '@config/stitches.config';

import { ThemeToggle } from '@components/ThemeToggle';
import { ContentWrapper } from '@components/Layout';
import { Logo } from '@components/Logo';
import { NavigationMenu } from '@components/NavigationMenu';
import { DropdownMenu } from '@components/DropdownMenu';

const StyledHeader = styled('header', {
  minHeight: '100px',

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
  return (
    <StyledHeader variant={props.variant}>
      <ContentWrapper>
        {props.variant === 'withLogo' ? <Logo asLink /> : <></>}
        <NavigationMenu name="Header Navigation" items={headerNavigation} />
        <ThemeToggle />
        <DropdownMenu name="Mobile Navigation" items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
