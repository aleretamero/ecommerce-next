export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(
    `${process.env.API_URL}/api/products`
  ).then(res => res.json());
  return products;
};

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(
    `${process.env.API_URL}/api/products/${id}`
  ).then(res => res.json());
  return product;
};
