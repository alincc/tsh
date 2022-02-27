import { render } from 'tests';
import { ProductsList } from './ProductsList';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<ProductsList />);

    expect(getByText('Products page')).toBeInTheDocument();
  });
});
