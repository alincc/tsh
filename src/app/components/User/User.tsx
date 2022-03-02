import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/redux-hooks';
import { getCurrentUser, onLogout } from 'services/auth/authSlice';
import { dropdown } from './User.style';

export const User: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { user } = useAppSelector(getCurrentUser);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(onLogout());
  };

  return (
    <>
      <Tooltip title="User">
        <IconButton onClick={handleClick} sx={{ ml: 2 }}>
          <Avatar alt={user?.username} src={user?.avatar} sx={{ width: 48, height: 48 }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={dropdown}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={logout} sx={{ color: (theme) => theme.palette.grey[900] }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default User;
