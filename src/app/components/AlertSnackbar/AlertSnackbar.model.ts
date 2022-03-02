import { Dispatch, ReactNode, SetStateAction } from 'react';

export type AlertSnackbarProps = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  severity?: 'error' | 'info' | 'success' | 'warning';
};
