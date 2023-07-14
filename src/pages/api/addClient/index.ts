import type { NextApiRequest, NextApiResponse } from "next";

interface DataClient {
  nome: string;
  contato: string;
  server: string;
  service: boolean;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  return res.status(200)



}
