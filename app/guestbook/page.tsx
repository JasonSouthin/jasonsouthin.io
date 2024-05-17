import type { Metadata } from "next"
import { SignIn, SignOut } from "./actions"
import Form from "./form"
import { getGuestbookEntries } from "app/db/queries"
import { auth } from "app/auth"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your comment.",
}

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
      <Suspense
        fallback={
          <p className="text-bold animate-pulse">Asking github overlord...</p>
        }
      >
        <GuestBookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  )
}

async function GuestBookForm() {
  let session = await auth()

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  )
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries()

  if (entries.length === 0) {
    return null
  }

  return entries?.map(
    (entry: { id: string; created_by: string; body: string }) => (
      <div key={entry.id} className="flex flex-col space-y-1 mb-4">
        <div className="w-full text-sm break-words">
          <span className="text-neutral-600 dark:text-neutral-400 mr-1">
            {entry.created_by}:
          </span>
          {entry.body}
        </div>
      </div>
    ),
  )
}
