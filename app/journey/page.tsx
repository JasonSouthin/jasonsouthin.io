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
  ArrowUpIcon,
} from "components/icons"
import Publications from "components/publications"

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
        Year 1 (2018):
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
        <div>
          Tech stack:
          <ul>
            <li>Langauges: Vanilla JS, HTML, CSS</li>
            <li>Database: Firebase Realtime Database</li>
            <li>Hosting: Firebase Hosting</li>
          </ul>
        </div>
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
          Regardless of my degree ( a bachalors in business ) i decided to start
          applying for dev positions and stumbled my way into my first job.
        </p>
        <div className="flex justify-center">
          <ArrowUpIcon />
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
        <div>
          Tech stack:
          <ul>
            <li>Langauges: Angular JS, Nodejs, Sass / Html</li>
            <li>Backend: AWS Lamda</li>
            <li>Database/Hosting: Amazon S3</li>
            <li>CDN: Amazon Cloudfront</li>
            <li>Testing Tools: Cypress</li>
          </ul>
        </div>
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
        <div>
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
        </div>
        <div>
          Skills learnt this year:
          <ul>
            <li>NodeJs / AngularJs / Javascript / Webpack</li>
            <li>Google Integrations: Maps / Analytics</li>
            <li>Frontend testing tool: Cypress</li>
          </ul>
        </div>
        <hr />
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 2 (2019):
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
          My role in the company was to develop and grow the existing
          international news publications within the company.
        </p>
        <p>Job title: Full stack engineer</p>
        {/* <div>
          Tech Stack:
          <ul>
            <li>Langauges: Python / Javascript / SQL / React / CSS / HTML </li>
            <li>Hosting: GCP, App Engine </li>
            <li>Tools: Grunt / Docker</li>
            <li>Templeting Langauges: Jinja2 </li>
            <li>
              Web services: GA / GTM / GAM / DFP / Google Looker Studio /
              Elastic Search
            </li>
            <li>
              Integrations: Google News Room / Viafoura / Taboola / Chartbeat /
              Disqus{" "}
            </li>
            <li>Streaming Langauges: Benthos</li>
          </ul>
        </div> */}
        <h3 className="font-bold text-base font-serif underline-offset-8">
          Side Projects:{" "}
        </h3>
        <ul className="list-decimal">
          <li>
            <p>
              A promotional website for a local Muay Thai gym in Cape Town. The
              site primary use is to promote upcoming events / view pricing and
              schedules of the gym.
            </p>
            <p>
              Fun Fact: During covid, home training session articles where added
              for memebers.
            </p>
            <div>
              Tech Stack:
              <ul>
                <li>Langauges: Python / JS / Jinja2 / HTML / SCSS </li>
                <li>CMS: CosMos</li>
                <li>Hosting: GCP</li>
              </ul>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.thaiholics.com/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center justify-center overflow-hidden h-full">
                <Image
                  src="/images/thaiholics.png"
                  className="transform rounded-sm transition-transform duration-500 object-contain p-1"
                  width={30}
                  height={30}
                  alt="Thaiholics"
                />
                <div className="ml-3">Thaiholics</div>
              </div>
              <ArrowIcon />
            </a>
          </li>
          <li>
            <p>
              A lesson booking website for an International grandmaster of
              bridge - Tim Cope.{" "}
            </p>
            <div>
              Tech Stack:
              <ul>
                <li>Langauges: JS / HTML / CSS / jQuery </li>
                <li>Hosting: FTP (FileZilla)</li>
              </ul>
            </div>
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
          </li>
        </ul>
        <div>
          Skills learnt this year:
          <ul>
            <li>Python / Jinja2 / SCSS</li>
            <li>Google Tag Manager / Google Analytics </li>
            <li>Google news room</li>
            <li>FileZilla (Free File Transfer Protocol solution)</li>
          </ul>
        </div>
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 3 (2020):
        </h2>
        <p>it's time to put my business degree to use.</p>
        <p>
          A friend contacts me and asks if i want to start an advertising
          company with him, i thought what a great way to put my business and
          coding skills to the test.
        </p>
        <h3 className="font-bold text-base font-serif underline-offset-8">
          First Business:{" "}
        </h3>
        <ul className="list-decimal">
          <li>
            <p>
              50% Off was born, the company was committed to providing easy
              access to in-store discounts, replace all printed promotions, and
              eradicate environmental waste all at our fingertips reach.
            </p>
            <p>
              The website functioned as a place to view the best deals/discounts
              from a wide range of products uploaded by all the stores in south
              africa. Its hope was to replace in-store catalogs for product
              promotion and bigger reach for smaller companies
            </p>

            <div className="flex justify-between my-10">
              <div className="border-r pr-10">
                Tech Stack (2020):
                <ul>
                  <li>Langauges: JS / CSS </li>
                  <li>Routing: Express</li>
                  <li>Bundler: Webpack</li>
                  <li>Database: MongoDB Compass</li>
                  <li>CMS: Strapi</li>
                  <li>Templating: EJS</li>
                  <li>Search: Elastic Search</li>
                  <li>Hosting: Heroku Free Tier</li>
                </ul>
              </div>
              <div>
                Rebuild: Tech Stack (2021):
                <ul>
                  <li>Langauges: Typescript / React / SCSS </li>
                  <li>Framework: NextJs</li>
                  <li>Database: SQL</li>
                  <li>CMS: Strapi</li>
                  <li>Search: Elastic Search</li>
                  <li>Hosting: GCP App Engine</li>
                  <li>Tracking: GTM </li>
                  <li>Auth: NextAuth </li>
                </ul>
              </div>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next50.vercel.app/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center justify-center overflow-hidden h-full">
                <Image
                  src="/images/50off.png"
                  className="transform rounded-sm transition-transform duration-500 object-contain p-1"
                  width={50}
                  height={50}
                  alt="50%Off"
                />
                <div className="ml-3">50% Off</div>
              </div>
              <ArrowIcon />
            </a>
          </li>
        </ul>
        <h3 className="font-bold text-base font-serif underline-offset-8">
          Work:{" "}
        </h3>
        <p>Converting a publication to a PWA</p>
        <div>
          Tech Stack:
          <ul>
            <li>Langauges: React / Typescript / Tailwindcss </li>
            <li>Hosting: Vercel </li>
            <li>Tools: Docker</li>
            <li>Integrations: Disqus</li>
          </ul>
        </div>
        <div>
          Skills learnt this year:
          <ul>
            <li>Webpack / Babel / Docker </li>
            <li>Tailwindcss / Typescript / React </li>
            <li>Send Grid / Mail Chimp</li>
            <li>Mongo DB / Heroku Hosting / SQL</li>
            <li>Google Search Console</li>
            <li>Service Workers</li>
            <li>EJS</li>
          </ul>
        </div>
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 4 (2021):
        </h2>
        <p>At this point my responsibilities grew at newsteam:</p>
        <div>
          <ul>
            <li>Third-party integrations (Viafoura, disqus , Ad services)</li>
            <li>
              Advertisment creation / management using GAM/DFP on websites (
              Google ads manager )
            </li>
            <li>
              User Tracking: A/B Testing / Tracking Reports with GA / Kibana /
              Looker
            </li>
            <li>Training junior developers</li>
          </ul>
        </div>
        <h3 className="font-bold text-base font-serif underline-offset-8">
          Side Projects:{" "}
        </h3>
        <ul className="list-decimal">
          <li>
            <p>
              A website for a wedding company located in South Africa, Cape Town
            </p>
            <div>
              Tech Stack:
              <ul>
                <li>Langauges: React / Typescript / Tailwindcss </li>
                <li>Markdown: MDX</li>
                <li>Hosting: Vercel</li>
                <li>Mail: Sendgrid</li>
              </ul>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://divine-agency.vercel.app/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center justify-center overflow-hidden h-full">
                <Image
                  src="/images/divine.png"
                  className="transform bg-white rounded-sm transition-transform duration-500 object-contain p-1"
                  width={30}
                  height={30}
                  alt="50% Off"
                />
                <div className="ml-3">Divine Coordination</div>
              </div>
              <ArrowIcon />
            </a>
          </li>
          <li>
            I rebuilt 50% Off - for easier future maintenance (Tech stack
            referenced above).
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next50.vercel.app/"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center justify-center overflow-hidden h-full">
                <Image
                  src="/images/50off.png"
                  className="transform rounded-sm transition-transform duration-500 object-contain p-1"
                  width={50}
                  height={50}
                  alt="50%Off"
                />
                <div className="ml-3">50% Off</div>
              </div>
              <ArrowIcon />
            </a>
          </li>
        </ul>
        <h2 className="font-bold text-xl font-serif underline underline-offset-8">
          Year 5 (2022):
        </h2>
        This year i spent learning skills such as building streaming pipelines,
        https://hayibo.io
        <br />
        https://jasonsouthin.io
      </div>
      <br />
    </section>
  )
}
