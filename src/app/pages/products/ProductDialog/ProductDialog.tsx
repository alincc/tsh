import { Box, CardMedia, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, SvgIcon } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactComponent as CloseSVG } from 'images/svg/Close.svg';
import { Product } from 'models/product.model';
import { forwardRef, ReactElement, Ref } from 'react';
import { promo } from '../ProductItem/ProductItemStyle';
import { dialogCloseButton, dialogImg } from './ProductDialogStyle';

interface Props {
  product: Product;
  open: boolean;
  onClose: () => void;
}

type TransitionProp = TransitionProps & { children: ReactElement<any, any> };

const Transition = forwardRef(function Transition(props: TransitionProp, ref: Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDialog = ({ product, open, onClose }: Props) => {
  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={onClose} aria-describedby="product-details">
      <CardMedia component="img" alt={product?.name} sx={dialogImg} image={product.image} />
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
