import Head from 'next/head';
import { GetStaticProps } from 'next';

import { Container } from 'reactstrap';
import { ProductType, fetchProducts } from '@/services/products';
import ProductsList from '@/components/ProductsList';

export const getStaticProps: GetStaticProps = async () => {
  const products = (await fetchProducts()) ?? [];

  return {
    props: {
      products,
    },
  };
};

const Products = (props: { products: ProductType[] }) => (
  <>
    <Head>
      <title>Nossos Produtos</title>
      <meta name="description" content="Conheça todos os nossos produtos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Container className="mb-5">
        <h1 className="my-5">Nossos Produtos</h1>
        <ProductsList products={props.products} />
      </Container>
    </main>
  </>
);

export default Products;
