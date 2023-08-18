"use client"

import Image from "next/image"
import { ArrowIcon } from "./icons"

export default function Publications() {
  return (
    <ul className="grid grid-rows-2 grid-cols-3 list-none ">
      <Publication
        src="/images/businesslive.png"
        title="BusinessLIVE"
        link="businesslive.co.za"
      />
      <Publication
        src="/images/dispatchlive.png"
        title="DispatchLIVE"
        link="dispatchlive.co.za"
      />
      <Publication
        src="/images/heraldlive.png"
        title="HeraldLIVE"
        link="heraldlive.co.za"
      />
      <Publication
        src="/images/timeslive.png"
        title="TimesLIVE"
        link="timeslive.co.za"
      />
      <Publication
        src="/images/sowetanlive.png"
        title="SowetanLIVE"
        link="sowetanlive.co.za"
      />
      <Publication
        src="/images/wantedlogo.png"
        title="Wanted Online"
        link="wantedonline.co.za"
      />
    </ul>
  )
}

function Publication({ src, title, link }: Publications) {
  return (
    <li>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://${link}`}
        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between m-0"
      >
        <div className="flex items-center justify-center overflow-hidden h-full">
          <Image
            src={src}
            className="transform rounded-sm transition-transform duration-500 object-contain p-1"
            width={30}
            height={30}
            alt={title}
          />
          <div className="ml-2">{title} </div>
        </div>
        <ArrowIcon />
      </a>
    </li>
  )
}
