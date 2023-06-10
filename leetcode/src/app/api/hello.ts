import type { NextApiResponse, NextApiRequest } from "next";

type Data = {
    name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'Meshach Arinze '})
}