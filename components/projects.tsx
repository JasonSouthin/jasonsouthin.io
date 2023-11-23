"use client"

import Image from "next/image"
import { ArrowIcon } from "./icons"
import clsx from "clsx"

export default function ProjectComponent() {
  return (
    <ul className="grid grid-rows-2 lg:grid-cols-3 grid-cols-2 list-none gap-y-8 gap-x-5">
      {/* <Project
        src="/og.jpg"
        title="Jason Southin"
        link="jasonsouthin.io"
        year="2023"
      /> */}
      <Project
        src="/images/hayibo.png"
        title="Hayibo"
        link="hayibo.io"
        year="2022"
      />
      <Project
        src="/images/divine.png"
        title="Divine Coordination"
        link="divine-agency.vercel.app"
        year="2021"
        bg="bg-white"
      />
      <Project
        src="/images/thaiholics.png"
        title="Thaiholics"
        link="thaiholics.com"
        year="2019"
      />
      <Project
        src="/images/bridge.svg"
        title="Bridge With Tim"
        link="bridgewithtim.co.za"
        year="2019"
      />
      <Project
        src="/images/togo.png"
        title="Togo"
        link="togo.tallorder.mobi"
        bg="bg-white"
        year="2018"
      />
    </ul>
  )
}

function Project({ src, title, link, bg, year, closed }: Project) {
  return (
    <li>
      <p className="text-neutral-400 text-xs">
        {year} {closed ? "(Shut down)" : undefined}
      </p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://${link}`}
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between m-0"
      >
        <div className="flex items-center justify-center overflow-hidden h-full min-h-[3rem]">
          <Image
            src={src}
            className={clsx(
              "transform rounded-sm transition-transform duration-500 object-contain p-1",
              {
                [`${bg}`]: bg,
              }
            )}
            width={40}
            height={40}
            alt={title}
          />
          <div className="ml-2">{title} </div>
        </div>
        <ArrowIcon />
      </a>
    </li>
  )
}
