import { useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  return matches ? <DesktopNavbar /> : <MobileNavbar />;
};
