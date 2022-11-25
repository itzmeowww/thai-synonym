// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import synonym from "../data/synonym.json";
const all = (req: NextApiRequest, res: NextApiResponse) => {
  let cou = 0;
  const keys: string[] = [];
  synonym.forEach((x) => {
    cou = cou + x.length;
    keys.push(x[0]);
  });
  res.status(200).json({ count: cou, keys: keys });
};

export default all;
