import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  SvgIcon,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactComponent as CloseSVG } from 'images/svg/Close.svg';
import { FC, forwardRef, ReactElement, Ref } from 'react';
import { promo } from '../ProductItem/ProductItem.style';
import { ProductDialogProps } from './ProductDialog.model';
import { dialogCloseButton, dialogImg } from './ProductDialog.style';

type TransitionProp = TransitionProps & { children: ReactElement<any, any> };

const Transition = forwardRef(function Transition(props: TransitionProp, ref: Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDialog: FC<ProductDialogProps> = ({ product, open, onClose }) => {
  const theme = useTheme();
  return (
    <Dialog id="productDialog" open={open} TransitionComponent={Transition} keepMounted onClose={onClose}>
      <CardMedia component="img" alt={product?.name} sx={dialogImg(theme)} image={product.image} />
      {product.promo && <Box sx={promo}>Promo</Box>}
      <DialogTitle>
        <IconButton aria-label="close" onClick={onClose} sx={dialogCloseButton}>
          <SvgIcon>
            <CloseSVG />
          </SvgIcon>
        </IconButton>
        {product.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="product-details">{product.description}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
