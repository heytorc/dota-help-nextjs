// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { handleHeroes } from '../../commons/providers/hero.provider';

type ResponseData = {
  message?: string;
  heroes?: Object;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const heroes = await handleHeroes();
    res.status(200).json(heroes)
  } catch (error) {
    res.status(500).json({ message: 'Error to handle heroes' });
  }
}
