"use server"

import { GET, auth } from "app/auth"
import { sql } from "./postgres"
import { revalidatePath } from "next/cache"

export async function increment(slug: string) {
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
    `
}

async function getSession() {
  const session = await auth()
  if (!session || !session.user) {
    throw new Error("Unauthorized")
  }

  return session
}

export async function saveGuestBookEntry(formData: FormData) {
  const entry = formData.get("entry")?.toString() || ""
  const session = await getSession()

  const email = session.user?.email as string
  let created_by = session.user?.name as string

  if (!session?.user) {
    throw new Error("Unauthorized, sorrrrry")
  }

  const body = entry.slice(0, 500)

  await sql`
    INSERT INTO guestbook (id, email, body, created_by, created_at)
    values (RANDOM()+5000, ${email}, ${body}, ${created_by}, NOW())`

  revalidatePath("/guestbook")
}
