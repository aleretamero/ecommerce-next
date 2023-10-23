import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import { ProductType } from '../services/products';
import SuccessToast from './SuccessToast';
import { useCart } from '@/hooks/useCart';

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { description, id, imageUrl, inStock, name, price } = product;
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <Row>
      <Col lg={6}>
        <Image
          src={imageUrl}
          alt={name}
          height={500}
          width={600}
          style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
        />
      </Col>

      <Col lg={6}>
        <h1>{name}</h1>

        <h2 className="text-muted">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {description}
        </p>

        <p className="text-muted">Em estoque: {inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product);
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          Compre agora
        </Button>

        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </Col>
    </Row>
  );
};

export default ProductDetails;
