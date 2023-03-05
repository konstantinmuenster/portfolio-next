import { ReactNode } from 'react';

export const BackgroundCanvas = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#353044',
        padding: '32px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#262331',
          borderRadius: '8px',
        }}
      >
        {children}
      </div>
    </div>
  );
};
