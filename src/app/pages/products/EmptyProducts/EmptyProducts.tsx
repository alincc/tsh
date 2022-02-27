import { Box, Typography } from '@mui/material';
import { ReactComponent as BagSVG } from 'images/svg/Bag.svg';
import { FC } from 'react';

const EmptyProducts: FC = () => {
  return (
    <>
      <Box sx={{ marginBottom: '24px' }}>
        <BagSVG />
      </Box>
      <Typography variant="h3" gutterBottom>
        Ooops… It’s empty here
      </Typography>
      <Typography variant="body1">There are no products on the list</Typography>
    </>
  );
};

export default EmptyProducts;
