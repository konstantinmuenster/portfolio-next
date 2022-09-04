import { styled } from '@config/stitches.config';
import { ReactElement, ReactNode } from 'react';

const StyledTable = styled('div', {
  overflowX: 'scroll',
  '@lg': { overflowX: 'unset' },

  table: {
    my: '2rem',
    borderRadius: '$default',
    background: '$surface50',
    width: '100%',
    textAlign: 'left',

    '@lg': {
      width: '120%',
      marginLeft: '-10%',
    },
  },

  th: {
    background: '$surface100',
    fontWeight: 500,
    py: '1rem',
    marginBottom: '0.25rem',

    '&:first-of-type': {
      borderTopLeftRadius: '$default',
    },

    '&:last-of-type': {
      borderTopRightRadius: '$default',
    },
  },

  'td, th': {
    padding: '1rem',
  },

  'tr:last-of-type': {
    td: {
      borderBottomColor: 'transparent',
      '&:first-of-type': {
        borderBottomLeftRadius: '$default',
      },
      '&:last-of-type': {
        borderBottomRightRadius: '$default',
      },
    },
  },
});

type TableProps = {
  children?: ReactNode;
};

export const Table = (props: TableProps): ReactElement => {
  return (
    <StyledTable>
      <table>{props.children}</table>
    </StyledTable>
  );
};
