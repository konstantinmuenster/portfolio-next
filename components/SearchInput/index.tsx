import { ChangeEventHandler, useRef } from 'react';

import { styled, theme } from '@config/stitches.config';

const StyledSearchInput = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '25rem',

  '&:hover input': {
    outline: 0,
    borderBottom: '2px solid $primary250',
    marginBottom: '-1px',
  },

  input: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid $secondary250',
    fontSize: '1.25rem',
    fontFamily: '$serif',
    lineHeight: '1.25rem',
    transition: '$default',
    px: '0.5rem',
    py: '0.5rem',

    '&:focus::placeholder': { color: 'transparent' },
    '&::placeholder': { color: '$subtext', opacity: 0.75 },

    '&:active, &:focus-visible': {
      outline: 0,
      borderBottom: '2px solid $primary250',
      marginBottom: '-1px',
    },
  },

  button: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 4,
    background: '$surface50',
    borderRadius: '$less',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type SearchInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchInput: React.FC<SearchInputProps> = props => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <StyledSearchInput>
      <input
        type="text"
        placeholder="Search Articles..."
        ref={ref}
        {...props}
      />
      <button
        aria-label="Search articles"
        onClick={() => {
          if (ref.current) ref.current.focus();
        }}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
            fill={theme.colors.subtext.value}
          />
        </svg>
      </button>
    </StyledSearchInput>
  );
};
