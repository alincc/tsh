import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { FC, forwardRef } from 'react';
import { BasicSnackbarProps } from './BasicSnackbar.model';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const BasicSnackbar: FC<BasicSnackbarProps> = ({ children }) => {
  return (
    <Snackbar open autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert severity="error" sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default BasicSnackbar;
