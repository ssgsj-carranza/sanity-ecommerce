import { Alert, CircularProgress, Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });
  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.slug}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              ></ProductItem>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  )
}

// npm install @mui/material
// npm install @mui/styles
// npm install @mui/icons-material
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// npm install @emotion/styled
// npm install @emotion/server @emotion/react
// npm install -g @sanity/cli
// npm install @sanity/client
