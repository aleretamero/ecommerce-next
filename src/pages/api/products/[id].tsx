import { NextApiRequest, NextApiResponse } from 'next';

import products from '../../../../database.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query?.id);

  const { id } = req.query;

  const product = products.find(item => item.id === Number(id));
  res.status(200).json(product);
}
