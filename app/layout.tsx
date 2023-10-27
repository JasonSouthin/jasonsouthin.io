import "./global.css"
import clsx from "clsx"
import type { Metadata } from "next"
import localFont from "next/font/local"
import Sidebar from "../components/sidebar"
import { Analytics } from "@vercel/analytics/react"
import NextTopLoader from "nextjs-toploader"
import Script from "next/script"
import { headers } from "next/headers"

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
})

const loadingFont = localFont({
  src: "../public/fonts/redactedScript-regular.ttf",
  weight: "700",
  variable: "--font-loading",
})

export const metadata: Metadata = {
  title: {
    default: "Jason Southin",
    template: "%s | Jason Southin",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Jason Southin",
    description: "Developer, writer, and creator.",
    url: "https://jasonsouthin.io",
    siteName: "Jason Southin",
    images: [
      {
        url: "https://jasonsouthin.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Jason Southin",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get("x-nonce")

  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        kaisei.variable,
        loadingFont.variable
      )}
    >
      <Script
        src="https://cdn.splitbee.io/sb.js"
        strategy="lazyOnload"
        nonce={nonce!}
      ></Script>
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-2 w-full lg:mt-32 lg:mx-auto relative overflow-scroll">
        <NextTopLoader color="#808080" />
        <Sidebar />
        <main className="flex-auto min-w-0 lg:mt-32 md:mt-32 mt-10 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
