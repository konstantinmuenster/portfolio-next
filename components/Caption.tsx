import { Box } from './Box';

export const Caption: React.FC = ({ children }) => {
  return (
    <Box as="span" className="caption">
      {children}
    </Box>
  );
};
