import { NextApiRequest, NextApiResponse } from 'next';
import products from '@/database.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
