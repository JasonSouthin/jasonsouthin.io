import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { queryBuilder } from "lib/planetscale"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session || !session.user) {
    return res.status(403).send("Unauthorized")
  }

  const email = session.user.email as string
  const name = session.user.name as string

  if (req.method === "POST") {
    await queryBuilder
      .insertInto("guestbook")
      .values({
        email,
        body: (req.body.body || "").slice(0, 500),
        created_by: name,
        updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      })
      .execute()

    return res.status(200).json({ error: null })
  }

  if (req.method === "DELETE") {
    await queryBuilder
      .deleteFrom("guestbook")
      .where("id", "=", req.body.id)
      .where("email", "=", email)
      .execute()

    return res.status(204).json({})
  }

  return res.send("Method not allowed.")
}
