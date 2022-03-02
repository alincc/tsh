import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { FC, forwardRef, SyntheticEvent } from 'react';
import { AlertSnackbarProps } from './AlertSnackbar.model';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AlertSnackbar: FC<AlertSnackbarProps> = ({ children, open, setOpen, severity }) => {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Snackbar
      id="alert-snackbar"
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity ? severity : 'error'} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
