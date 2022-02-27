import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Product } from 'models/product.model';
import { FC, useState } from 'react';
import { useProductDetailsQuery } from 'services/products/productsApi';
import ProductDialog from '../ProductDialog/ProductDialog';
import ProductPromo from '../ProductPromo/ProductPromo';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }: Props) => {
  const [id, setId] = useState<number | void>();
  const { data: details, isLoading, isError } = useProductDetailsQuery(id, { skip: !id });
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Grid item lg={3} sm={6} xs={12}>
      <Card sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="img" alt={product.name} height="170" image={product.image} />
        {product.promo && <ProductPromo />}
        <CardContent sx={{ flex: 2 }}>
          <Typography gutterBottom variant="h3" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </CardContent>
        <CardActions>
          <Rating name="read-only" value={product.rating} readOnly />
          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() => handleClickOpen(product.id)}
            disabled={!product.active || isLoading}
          >
            {isLoading ? 'Loading' : product.active ? 'Show details' : 'Unavailable'}
          </Button>
          {details && <ProductDialog product={details} open={open} onClose={handleClose} />}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;