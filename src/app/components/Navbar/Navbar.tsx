import { useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from 'redux/redux-hooks';
import { onLogout } from 'services/auth/authSlice';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(onLogout());
  };

  return matches ? <DesktopNavbar onLogout={logout} /> : <MobileNavbar onLogout={logout} />;
};
