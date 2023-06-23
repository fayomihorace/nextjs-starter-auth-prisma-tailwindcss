// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

type Data = {
  message?: string,
  data?: any
}


export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  allowedMethods: string[]
) {
  // TODO: Move this block into a mixin middleware
  let errorResponse = null
  let session: any = null
  const { method }: any = req
  if (!allowedMethods.includes(method)) {
    errorResponse = res.status(405).end(`Method ${method} Not Allowed`);
  }

  session = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    errorResponse = res.status(404).json({
      message: 'Not Found'
    });
  }

  return {"session": session, "errorResponse": errorResponse}
}
