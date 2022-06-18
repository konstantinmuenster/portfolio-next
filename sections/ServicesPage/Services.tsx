import { Tab } from '@headlessui/react';

import { styled } from '@config/stitches.config';
import { serviceDefinitions, technologies } from '@config/services.config';
import { ContentWrapper } from '@components/Layout';
import { Emoji } from '@components/Emoji';
import { Toast } from '@components/Toast';
import { Overhead } from '@components/Overhead';

const StyledServicesSection = styled('section', {
  '> div': {
    py: '3rem',

    '@md': { py: '4rem' },

    '.services-description': {
      maxWidth: '37.5rem',

      '.title': { marginTop: '1rem', marginBottom: '1.5rem' },

      p: { marginBottom: '1rem', color: '$subtext' },
    },

    '.services-tab-list': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.5rem',
      marginTop: '2rem',
      marginBottom: '1rem',

      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '0.5rem',
        py: '0.5rem',
        paddingLeft: '0.75rem',
        paddingRight: '1rem',
        color: '$primary900',
        fontSize: '$small',
        fontWeight: 500,
        lineHeight: '$small',
        borderRadius: '$default',
        transition: '$default',

        '[data-emoji]': {
          display: 'none',

          '@sm': { display: 'block' },
        },

        '&[aria-selected="true"], &:hover': {
          background: '$secondary50',
        },
      },
    },

    '.services-tab-panels': {
      '> div[role="tabpanel"]': {
        position: 'relative',
        maxWidth: '42rem',
        px: '1rem',
        py: '2rem',
        borderRadius: '$default',
        background: '$secondary50',

        '.services-tab-title': {
          fontWeight: 500,
          fontSize: '$big',

          span: { color: '$primary900' },
        },

        '.services-tab-description-list': {
          marginTop: '1.5rem',
          marginBottom: '2rem',
          listStyleType: 'disc',

          li: {
            my: '1rem',
            paddingLeft: '0.5rem',

            '&::marker': { color: '$secondary500' },
          },
        },

        '.services-tab-examples': {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',

          'li > span': {
            transition: '$default',

            '&:hover': { background: '$primary50', cursor: 'default' },
          },
        },
      },
    },

    '.services-technologies': {
      my: '2rem',

      '> span': { color: '$subtext' },

      ul: {
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '2rem',
        rowGap: '0.5rem',
        my: '1rem',
      },

      li: {
        fontSize: '$small',
        lineHeight: '$small',
        color: '$subtext',

        svg: { marginRight: '0.125rem', maxWidth: 14 },

        '&:hover': { color: '$primary900', cursor: 'default' },
      },
    },
  },
});

export const ServicesSection: React.FC = () => {
  return (
    <StyledServicesSection id="services-section">
      <ContentWrapper>
        <div className="services-description">
          <h3 className="title">How I Can Help You</h3>
          <p>
            When collaborating with me, I either integrate in existing
            development teams, or I execute projects solo with businesses. Check
            out both and pick what suits you best!
          </p>
        </div>
        <Tab.Group>
          <Tab.List className="services-tab-list">
            {serviceDefinitions.map((service, key) => {
              return (
                <Tab key={key}>
                  <Emoji
                    type={service.emoji}
                    background="surface50"
                    size="small"
                  />
                  {service.name}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="services-tab-panels">
            {serviceDefinitions.map((service, key) => {
              return (
                <Tab.Panel key={key}>
                  <p className="services-tab-title">
                    {service.content.title.prefix}
                    <span>{service.content.title.highlight}</span>
                    {service.content.title.suffix}
                  </p>
                  <ul className="services-tab-description-list">
                    {service.content.description.map((text, key) => {
                      return <li key={key}>{text}</li>;
                    })}
                  </ul>
                  <ul className="reset services-tab-examples">
                    {service.content.examples.map((example, key) => {
                      return (
                        <li key={key}>
                          <Toast color="secondary">{example}</Toast>
                        </li>
                      );
                    })}
                  </ul>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
        <div className="services-technologies">
          <Overhead>Technologies, I am familiar with:</Overhead>
          <ul className="reset">
            {technologies.map((technology, key) => {
              return (
                <li key={key}>
                  <technology.icon size={16} /> {technology.name}
                </li>
              );
            })}
          </ul>
        </div>
      </ContentWrapper>
    </StyledServicesSection>
  );
};
