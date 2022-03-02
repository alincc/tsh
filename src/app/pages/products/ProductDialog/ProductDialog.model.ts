import { Product } from 'models/product/product.model';

export interface ProductDialogProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}
