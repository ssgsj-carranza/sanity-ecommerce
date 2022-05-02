import { Typography } from '@mui/material'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import client from '../utils/client';

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });

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
      List Products
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
