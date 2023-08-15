import type { Metadata } from "next"
import Image from "next/image"
import {
  GitHubIcon,
  SpotifyIcon,
  ArrowIcon,
  TwitterIcon,
  LinkedInIcon,
  ArrowDownIcon,
  BridgeCardsIcon,
} from "components/icons"

export const metadata: Metadata = {
  title: "Projects",
  description: "Website project experience",
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif ">Journey</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        A list of projects i created, ordered by years of experience:
      </p>
      <h2 className="font-bold text-xl font-serif underline underline-offset-8">
        Year 1:
      </h2>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>My very first introduction into coding.</p>
        <p>
          A friend wanted a website to sell his drone racing parts, so I created{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://tinyrc.co.za/products/productsAll.html"
          >
            Tinyrc
          </a>{" "}
          for him.
        </p>
        <p>
          Tech stack:
          <ul>
            <li>Langauges: Vanilla JS, HTML, CSS</li>
            <li>Database: Firebase Realtime Database</li>
            <li>Hosting: Firebase Hosting</li>
          </ul>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://tinyrc.co.za/products/productsAll.html"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center justify-center overflow-hidden h-full">
            <Image
              src="/images/tinyRc.png"
              className="bg-white rounded-sm transform transition-transform duration-500 object-contain p-1"
              width={40}
              height={40}
              alt="tinyRc"
            />
            <div className="ml-3">TinyRc</div>
          </div>
          <ArrowIcon />
        </a>
        <p>
          It was a terrible implentation of a website. It was janky and had a
          phew hicups, yet it worked and made him sales.
        </p>
        <div className="flex justify-center">
          <ArrowDownIcon />
        </div>
        <p>
          This created an addication to build more , from something as simple as
          a single HTML file to creative websites i surfed upon.
        </p>
        <p>
          Regardless of my degree ( having not studied this career path ) i
          decided to start applying and stumbled my way into my first job.
        </p>
        <div className="flex justify-center">
          <ArrowDownIcon />
        </div>
        <h2 className="font-bold text-base font-serif ">
          First Job:{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://tallorderpos.com/"
          >
            TallOrder.com
          </a>
        </h2>
        <p>
          My role in the company was to create an online food ordering and
          delivery platform.
        </p>
        <p>Job title: Full stack engineer</p>
        <p>
          The website would intergrate with many resturants using the existing
          POS (Point of sale) system. I spent a year to create{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://togo.tallorder.mobi/"
          >
            Togo
          </a>
          .
        </p>
        <p>
          Tech stack:
          <ul>
            <li>Langauges: Angular JS, Nodejs, Sass / Html</li>
            <li>Backend: AWS Lamda</li>
            <li>Database/Hosting: Amazon S3</li>
            <li>CDN: Amazon Cloudfront</li>
            <li>Testing Tools: Cypress</li>
          </ul>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://togo.tallorder.mobi/"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center">
            <Image
              src="/images/togo.png"
              className="bg-white transform rounded-sm transition-transform duration-500 object-contain p-1"
              width={50}
              height={50}
              alt="tinyRc"
            />
            <div className="ml-3">Togo</div>
          </div>
          <ArrowIcon />
        </a>
        <h3 className="font-bold text-base font-serif underline-offset-8">
          Overview:{" "}
        </h3>
        <p>
          This was a very similar implementation to Uber Eats:
          <ul>
            <li>
              A customer orders from your restaurant through the Togo website
              using multiple online payment providers.
            </li>
            <li>The restaurant accepts and prepares the order.</li>
            <li>
              An delivery driver picks up the order and delivers it to the
              customer with live tracking.
            </li>
          </ul>
        </p>
        <p>
          Skills learnt this year:
          <ul>
            <li>NodeJs / AngularJs / Javascript / Webpack</li>
            <li>Google Integrations: Maps / Analytics</li>
            <li>Frontend testing tool: Cypress</li>
          </ul>
        </p>
        <hr />
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 2:
        </h2>
        <p>
          It was time for my next advernture using my newly gained experience to
          get my second job.
        </p>
        <h2 className="font-bold text-base font-serif ">
          Second Job:{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://newsteam.io"
          >
            Newsteam.io
          </a>
        </h2>
        <p>
          My role in the company was to develop and grow the existing 15
          international news publications within the company.
        </p>
        <p>Job title: Full stack engineer</p>
        <p>
          Tech Stack:
          <ul>
            <li>Langauges: Python / Javascript / SQL / React / CSS / HTML </li>
            <li>Hosting: GCP, App Engine </li>
            <li>Tools: Grunt / Docker</li>
            <li>Templeting Langauges: Jinja2 </li>
            <li>Web services: GA / GTM / GAM / DFP / Google Looker Studio</li>
            <li>
              Integrations: Google News Room / Viafoura / Taboola / Chartbeat /
              Disqus{" "}
            </li>
            <li>Streaming Langauges: Benthos</li>
          </ul>
        </p>
        <h3 className="font-bold text-base font-serif underline-offset-8">
          Side Project:{" "}
        </h3>
        <p>
          A lesson booking website for an International grandmaster of bridge -
          Tim Cope.{" "}
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://www.bridgewithtim.co.za/"
          className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
        >
          <div className="flex items-center justify-center overflow-hidden h-full">
            <BridgeCardsIcon />
            <div className="ml-3">Bridge With Tim</div>
          </div>
          <ArrowIcon />
        </a>
        <p>
          Skills learnt this year:
          <ul>
            <li>CSS / SQL / Python</li>
            <li>Elastic Search</li>
            <li>Jinaj2</li>
            <li>Google news room / GTM</li>
          </ul>
        </p>
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 3:
        </h2>
        <p>I creat</p>
      </div>
      <br />
      https://next50-pg4vo28tv-50off.vercel.app/
      <h2>Year 4:</h2>
      <p>
        My resposiblities grew in newsteam:
        <ul>
          <li>Third-party integrations (Mux, Viafoura, disqus etc.)</li>,
          <li>Advertisment creation using GAM ( Google ads manager )</li>
          <li></li>
        </ul>
      </p>
      This year i spent learning skills such as building streaming pipelines,
      third-party integrations (Mux, Viafoura, disqus etc.), advertisment
      creation using GAM ( Google ads manager ), user tracking, docker builds,
      grunt, NextJS https://hayibo.io
      <br />
      https://jasonsouthin.io
    </section>
  )
}
