import { GitHubIcon, SpotifyIcon, ViewsIcon } from "components/icons"
import Link from "next/link"

export function Skeleton() {
  return (
    <div className="font-loading">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/JasonSouthin"
        className="flex items-center gap-2"
      >
        <GitHubIcon />
        {"contributions in the last year"}
      </a>
      <div className="flex items-center gap-2">
        <SpotifyIcon />
        {"top track this month"}
      </div>
      <Link href="/blog" className="flex items-center">
        <ViewsIcon />
        {"blog views all time"}
      </Link>
    </div>
  )
}
