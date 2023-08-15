import "server-only"

import { Octokit } from "@octokit/rest"
import { queryBuilder } from "lib/planetscale"
import { cache } from "react"
import { getAccessToken } from "./spotify"
import { Spotify } from "./types/spotify"
import { Github } from "./types/github"

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

export const getBlogViews = cache(async () => {
  const data = await queryBuilder
    .selectFrom("views")
    .select(["count"])
    .execute()

  return data.reduce((acc, curr) => acc + Number(curr.count), 0)
})

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 0
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/jason_southin?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  )

  const { data } = await response.json()
  return Number(data.public_metrics.tweet_count)
}

export const getTopTracks = cache(async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  const { items } = await response.json()

  const tracks: Spotify[] = items.slice(0, 1).map((track) => ({
    songUrl: track.external_urls.spotify,
    title: track.name,
  }))

  return tracks
})

// export async function getNowPlaying() {
//   const { access_token } = await getAccessToken()

//   return fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   })
// }

export const getStarCount = cache(async () => {
  if (!process.env.GITHUB_TOKEN) {
    return 0
  }

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const req = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "jasonsouthin",
    repo: "jasonsouthin.io",
  })

  return req.data.stargazers_count
})

export const getGithubContributions = cache(async (): Promise<string> => {
  const response = await fetch(
    `https://github-contributions-api.deno.dev/JasonSouthin.json`
  )

  const { totalContributions } = await response.json()

  return totalContributions
})
