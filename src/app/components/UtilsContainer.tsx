import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Axis, center } from 'styles/mixins/Center';

interface Props {
  children: ReactNode;
  bgColor: string;
}

const UtilsContainer = ({ children, bgColor }: Props) => {
  return (
    <Box
      sx={{
        width: '600px',
        height: '344px',
        margin: 'auto',
        backgroundColor: bgColor,
        borderRadius: '8px',
        ...center(Axis.XY),
      }}
    >
      {children}
    </Box>
  );
};

export default UtilsContainer;
