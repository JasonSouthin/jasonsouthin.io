import Link from "next/link"
import Image from "next/image"
import { getBlogViews, getGithubContributions, getTopTracks } from "lib/metrics"
import { ArrowIcon, SpotifyIcon, GitHubIcon, ViewsIcon } from "components/icons"
import { name, about, bio, avatar } from "lib/info"
import { Suspense } from "react"
import { Skeleton } from "components/skeleton/skeleton"

export const revalidate = 60

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 lg:max-w-[460px] max-w-none  text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale object-cover h-24"
          src={avatar}
          placeholder="blur"
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <Suspense fallback={<Skeleton />}>
            <PeronsalInformation />
          </Suspense>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/JasonSouthin"
          >
            <ArrowIcon />
            <p className="h-7">follow me on github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://jasonsouthin.substack.com"
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

async function PeronsalInformation() {
  let tracks, views, githubCount

  try {
    ;[tracks, views, githubCount] = await Promise.all([
      getTopTracks(),
      getBlogViews(),
      getGithubContributions(),
    ])
  } catch (error) {
    console.error(error)
  }

  return githubCount && tracks && views ? (
    <>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/JasonSouthin"
        className="flex items-center gap-2"
      >
        <GitHubIcon />
        {`${githubCount?.toLocaleString()} contributions in the last year`}
      </a>
      <div className="flex items-center gap-2">
        <SpotifyIcon />
        {tracks?.map((track, index) =>
          track ? (
            <a
              key={track.songUrl}
              rel="noopener noreferrer"
              target="_blank"
              href={track.songUrl}
            >
              <span className="hover:underline">{`#${index + 1} ${
                track.title
              } `}</span>
              <span>- top track this month</span>
            </a>
          ) : undefined
        )}
      </div>
      <Link href="/blog" className="flex items-center">
        <ViewsIcon />
        {`${views?.toLocaleString()} blog views all time`}
      </Link>
    </>
  ) : (
    <Skeleton />
  )
}
