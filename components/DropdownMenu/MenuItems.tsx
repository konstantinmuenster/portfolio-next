import { Menu } from '@headlessui/react';

import type { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';
import { Avatar } from '@components/Avatar';

import { BUTTON_SIZE } from './HamburgerButton';
import { socialProfiles } from '@config/profiles.config';
import { getEmailAddress } from '@utils/getEmailAddress';

const StyledMenuItems = styled(Menu.Items, {
  position: 'absolute',
  right: 0,
  top: BUTTON_SIZE + 15,
  transformOrigin: 'top right',
  width: '14rem',
  marginTop: '1rem',
  backgroundColor: '$surface50',
  border: '2px solid $surface250',
  padding: '0.5rem',
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  borderRadius: '$default',

  a: {
    display: 'block',
    width: '100%',
    py: '1.5rem',
    my: '0.25rem',
    px: '1rem',
    borderRadius: '$default',

    '&[data-profile-link]': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.5rem',
      py: '1rem',

      'span > img': {
        borderRadius: '$round',
      },

      div: {
        fontSize: '$small',
        fontWeight: 500,
        color: '$primary900',

        span: {
          display: 'block',
          fontSize: '$mini',
          fontWeight: 400,
          color: '$text',
        },
      },
    },

    '&[data-focused="true"]': {
      backgroundColor: '$surface100',
    },
  },

  hr: {
    width: 'calc(100% - 10px)',
    margin: '0 auto',
    border: '1px solid $surface100',
  },
});

export const MenuItems: React.FC<{ items: NavigationItem[] }> = props => {
  const email = socialProfiles.find(e => e.to.includes('mailto'));
  return (
    <StyledMenuItems>
      {props.items.map((item, i) => {
        return (
          <Menu.Item key={i}>
            {({ active }) => (
              <Link to={item.to} data-focused={active}>
                {item.label}
              </Link>
            )}
          </Menu.Item>
        );
      })}
      {email ? (
        <>
          <hr />
          <Menu.Item>
            {({ active }) => (
              <Link
                to={email.to}
                data-focused={active}
                data-profile-link
                hideExternalHint
              >
                <Avatar size={32} />
                <div>
                  Konstantin Münster
                  <span>
                    {getEmailAddress(socialProfiles) ?? 'Write me an email'}
                  </span>
                </div>
              </Link>
            )}
          </Menu.Item>
        </>
      ) : (
        <></>
      )}
    </StyledMenuItems>
  );
};
