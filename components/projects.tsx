"use client"

import Image from "next/image"
import { ArrowIcon } from "./icons"
import clsx from "clsx"

export default function ProjectComponent() {
  return (
    <ul className="grid grid-rows-2 auto-cols-auto grid-flow-row-dense list-none gap-y-4 gap-x-5 ">
      {/* <Project
        src="/og.jpg"
        title="Jason Southin"
        link="jasonsouthin.com"
        year="2023"
      /> */}
      <Project
        src="/images/hayibo.png"
        title="Hayibo"
        link="hayibo.net"
        year="2022 ( 5 years experience )"
      />
      <Project
        src="/images/divine.png"
        title="Divine Coordination"
        link="divine-agency.vercel.app"
        year="2021 ( 4 years experience )"
        bg="bg-white"
      />
      <Project
        src="/images/thaiholics.png"
        title="Thaiholics"
        link="thaiholics.com"
        year="2019 ( 2 years experience )"
      />
      <Project
        src="/images/bridge.svg"
        title="Bridge With Tim"
        link="bridgewithtim.co.za"
        year="2019 ( 2 years experience )"
      />
      <Project
        src="/images/togo.png"
        title="Togo"
        link="togo.tallorder.mobi"
        bg="bg-white"
        year="2018 ( 1 year experience )"
      />
    </ul>
  )
}

function Project({ src, title, link, bg, year, closed }: Project) {
  return (
    <li className="">
      <p className="text-neutral-400 text-xs mb-1">
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
              },
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
