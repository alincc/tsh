import { Checkbox, FormControlLabel, Grid, InputAdornment, SvgIcon, TextField } from '@mui/material';
import { ReactComponent as SearchSVG } from 'images/svg/Search.svg';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch } from 'redux/redux-hooks';
import { setActive, setPromo, setSearchValue } from 'services/products/productsQuerySlice';
import { Axis, center, Direction } from 'styles/mixins/Center';

const SearchForm: FC = () => {
  const dispatch = useAppDispatch();

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const onActiveChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setActive(event.target.checked));
  };

  const onPromoChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPromo(event.target.checked));
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={8} sm={8} xs={12} width={'392px'}>
        <TextField
          name="searchValue"
          onChange={onSearchChange}
          placeholder="Search"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SvgIcon>
                  <SearchSVG />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item lg={4} sm={4} xs={12} sx={{ ...center(Axis.X, Direction.ROW) }}>
        <FormControlLabel control={<Checkbox name="active" onChange={onActiveChange} />} label="Active" sx={{ mr: 4 }} />
        <FormControlLabel control={<Checkbox name="promo" onChange={onPromoChange} />} label="Promo" sx={{ mr: 4 }} />
      </Grid>
    </Grid>
  );
};

export default SearchForm;
