// pages/products.tsx

import ProductsList from '@/components/ProductsList';
import { ProductType, fetchProducts } from '@/services/products';
import { GetStaticProps, NextPage } from 'next';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};

const Products: NextPage = (props: {
  children?: ReactNode;
  products?: ProductType[];
}) => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Nossos Produtos</h1>

          {<ProductsList products={props.products!} />}
        </Container>
      </main>
    </>
  );
};

export default Products;
