"use client"

import { saveGuestBookEntry } from "app/db/actions"
import { clsx } from "clsx"
import React from "react"
// @ts-ignore
import { useFormStatus } from "react-dom"
const cx = (...classes) => classes.filter(Boolean).join(" ")

export default function Form() {
  const formRef = React.useRef<HTMLFormElement>(null)

  return (
    <form
      className="relative max-w-[500px] text-sm"
      ref={formRef}
      action={async (formData: FormData) => {
        await saveGuestBookEntry(formData)
        formRef.current?.reset()
      }}
    >
      <input
        aria-label="Your message"
        placeholder="Your message..."
        name="entry"
        type="text"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const status = useFormStatus()

  return (
    <button
      className={clsx(
        "flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16 ",
        {
          "animate-pulse": status.pending,
        },
      )}
      disabled={status.pending}
      type="submit"
    >
      Sign
    </button>
  )
}
