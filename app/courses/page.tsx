import type { Metadata } from "next"
import Image from "next/image"

import {
  GitHubIcon,
  SpotifyIcon,
  ArrowIcon,
  LinkedInIcon,
} from "components/icons"

import Link from "next/link"
import Modal from "components/modal"

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export const metadata: Metadata = {
  title: "Courses",
  description: "Jason Southin completed courses",
}

export default function AboutPage({ searchParams }: Props) {
  return (
    <section className="w-full pr-10">
      <h1 className="font-bold text-3xl font-serif">Courses</h1>
      <p className="my-5 text-lg text-neutral-800 dark:text-neutral-200">
        Completed:
      </p>
      <div className="flex gap-2 flex-col ml-2">
        <details>
          <summary className="mb-2 ">Just Javascript - Dan Abramov</summary>
          <a
            href="https://justjavascript.com/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Just Javascript
            <ArrowIcon />
          </a>
          <Image
            src="/courses/jason_southin_justjavascript_certificate.png"
            className="w-full h-full"
            width="1000"
            height="1000"
            alt="Just Javascript"
            quality="100"
          />
        </details>
        <hr className="my-1 " />
        <details className="mt-2">
          <summary className="mb-2">Joy of react - Josh W Comeau</summary>
          <a
            href="https://courses.joshwcomeau.com/certificate/652c07266551ca9057a9a6f5"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Jason Southin - Joy of React Cerciticate
            <ArrowIcon />
          </a>
          <Image
            src="/courses/jason_southin_joyofreact.png"
            className="w-full h-full"
            width="1000"
            height="1000"
            alt="Just Javascript"
            quality="100"
          />
        </details>
        <hr className="my-1 " />
        <details className="mt-2">
          <summary className="mb-2 ">
            NextJS & Typescript & Shopify - Filip Jerga
          </summary>
          <a
            href="https://eincode.com/courses/next-js-typescript-with-shopify-integration-full-guide"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Next JS & Typescript with Shopify Integration
            <ArrowIcon />
          </a>
          <Image
            src="/courses/jason_southin_udemy_typescript_nextjs_shopify.jpg"
            className="w-full h-full"
            width="1000"
            height="1000"
            alt="Just Javascript"
            quality="100"
          />
        </details>
        <hr className="my-1 border-[#e9ebfc]" />
        <details className="mt-2">
          <summary className="mb-2">NextJS & Sanity CMS - Filip Jerga</summary>
          <a
            href="https://eincode.com/courses/next-js-with-sanity-cms-serverless-blog-app-w-vercel"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Next.JS with Sanity CMS - Serverless Blog App
            <ArrowIcon />
          </a>
          <Image
            src="/courses/jason_southin_udemy_nextjs_sanity.jpg"
            className="w-full h-full"
            width="1000"
            height="1000"
            alt="Just Javascript"
            quality="100"
          />
        </details>
        <hr className="my-1 border-[#e9ebfc]" />
        <details>
          <summary className="mb-2">
            The Last Algorithms Course You'll Need - ThePrimeagen
          </summary>
          <a
            href="https://frontendmasters.com/courses/algorithms"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            The Last Algorithms Course You'll Need
            <ArrowIcon />
          </a>
          <Image
            src="/courses/algorithms-thePrimeagen.png"
            className="w-96"
            width="400"
            height="400"
            alt="Just Javascript"
            quality="100"
          />
        </details>
      </div>
      <p className="my-5 text-lg text-neutral-800 dark:text-neutral-200">
        Current:
      </p>
      <div className="flex gap-2 flex-col ml-2">
        <details className="mt-2">
          <summary className="mb-2">Css For Js - Josh W Comeau</summary>
          <a
            href="https://css-for-js.dev/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Css for Js
            <ArrowIcon />
          </a>
          <Image
            src="/courses/css-for-js.png"
            className="w-96"
            width="400"
            height="400"
            alt="Just Javascript"
            quality="100"
          />
        </details>
        <hr className="my-1" />
        <details className="mt-2">
          <summary className="mb-2">Total Typescript - Matt Pocock</summary>
          <a
            href="https://www.totaltypescript.com/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between my-4"
          >
            Total Typscript
            <ArrowIcon />
          </a>
          <Image
            src="/courses/totaltypescript.png"
            className="w-96"
            width="400"
            height="400"
            alt="Just Javascript"
            quality="100"
          />
        </details>
      </div>
    </section>
  )
}
