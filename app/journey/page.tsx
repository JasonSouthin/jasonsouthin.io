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
import Publications from "components/projects"
import Accordion from "components/accordion"

export const metadata: Metadata = {
  title: "My Journey",
  description: "My development journey",
}

export default function Journey() {
  return (
    <section>
      <h1 className="font-bold text-3xl mx-auto">Journey</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        My development journey, ordered by years of experience:
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <div />
        <Accordion heading="2018">
          <div>
            <p>My very first introduction into coding.</p>
            <p>
              To help my friend sell his drone racing parts online, i created a
              webiste called{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tinyrc.co.za/products/productsAll.html"
              >
                Tinyrc
              </a>
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
              The website was a terrible implementation, janky and with a few
              hiccups, but it still worked and made sales.
            </p>
            <div className="flex justify-center">
              <ArrowDownIcon />
            </div>
            <p>
              I found stimulation and joy in the struggle of creating my first
              website. I wanted to build things from simple HTML files to the
              creative websites I saw online.
            </p>
            <p>
              Despite having a bachelor's degree in business, I decided to start
              applying for developer positions to improve my skills and
              eventually landed my first job.
            </p>
            <div className="flex justify-center">
              <ArrowUpIcon />
            </div>
            <h2 className="font-bold text-base  ">
              First Job:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://tallorderpos.com/"
              >
                TallOrder.com
              </a>{" "}
              - 1 yr 2 mos
            </h2>
            <p>
              My role in the company was to create an online food ordering and
              delivery platform.
            </p>
            <p>
              <b>Job title</b>: Full stack engineer
            </p>
            <p>
              I spent a year creating{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://togo.tallorder.mobi/"
              >
                Togo
              </a>{" "}
              a webiste that would integrate with many restaurants using their
              existing POS (point-of-sale) systems.
            </p>
            <div>
              Tech stack:
              <ul>
                <li>Langauges: Angular JS, Sass / Html</li>
                <li>Backend: AWS Lamda / Nodejs</li>
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
            <h3 className="font-bold text-base  underline-offset-8">
              Overview:{" "}
            </h3>
            <div>
              This was a very similar implementation to Uber Eats:
              <ul>
                <li>
                  A customer orders from your restaurant through the Togo
                  website using multiple online payment providers.
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
          </div>
        </Accordion>
        <hr className="mt-3 mb-2" />
        <Accordion heading="2019">
          <div>
            <p>
              Armed with my newly gained experience, I was eager to embark on my
              next adventure and determined to get my second job.
            </p>
            <h2 className="font-bold text-base mt-0">
              Second Job:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://newsteam.io"
              >
                Newsteam.io
              </a>{" "}
              - 4 yr 5 mos
            </h2>
            <p>
              My role in the company was to develop and grow the existing
              international news publications within the company.
            </p>
            <p>
              <b>Job title</b>: Full stack engineer
            </p>
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
            <h3 className="font-bold text-base  underline-offset-8">
              Side Projects:{" "}
            </h3>
            <ul className="list-decimal">
              <li>
                <p>
                  A promotional website for a local Muay Thai gym in Cape Town.
                  The site primary use is to promote upcoming events / view
                  pricing and schedules of the gym.
                </p>
                <p>
                  Fun Fact: During covid, home training session articles where
                  added for memebers.
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
          </div>
        </Accordion>
        <hr className="mt-3 mb-2" />
        <Accordion heading="2020">
          <div>
            <p>
              After many hours of banging my head against the wall, I was
              finally starting to get the hang of coding. I thought it was time
              to put my business degree to use.
            </p>
            <p>
              My friend called me with a proposition: start an advertising
              company together. I thought it would be the perfect way to put my
              business and coding skills to the test.
            </p>
            <h2 className="font-bold text-base  ">
              First Business:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://next50.vercel.app/"
              >
                50% Off
              </a>
            </h2>
            <p>
              The company was committed to providing easy access to in-store
              discounts, replace all printed promotions, and eradicate
              environmental waste all at our fingertips reach.
            </p>
            <p>
              The website functioned as a place to view the best deals/discounts
              from a wide range of products uploaded by all the stores in south
              africa. Its hope was to replace in-store catalogs for product
              promotion and bigger reach for smaller companies
            </p>

            <div className="lg:flex justify-between my-10 sm:block">
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
                  <li>Hosting: Vercel / GCP App Engine</li>
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
            <h3 className="font-bold text-base  underline-offset-8">
              Work project:{" "}
            </h3>
            <p>Port an existing publication to React.</p>
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
          </div>
        </Accordion>
        <hr className="mt-3 mb-2" />
        <Accordion heading="2021">
          <div>
            <p>
              As my skills and experience grew, I was given more responsibility
              at Newsteam.
            </p>
            <div>
              <ul>
                <li>
                  Third-party integrations (Viafoura, disqus , Ad services)
                </li>
                <li>
                  Advertisment creation / management using GAM/DFP on websites (
                  Google ads manager )
                </li>
                <li>
                  User Tracking: A/B Testing / Tracking Reports with GA / Kibana
                  / Looker
                </li>
                <li>Training junior developers</li>
              </ul>
            </div>
            <h3 className="font-bold text-base  underline-offset-8">
              Side Projects:{" "}
            </h3>
            <ul className="list-decimal">
              <li>
                <p>
                  A website for a wedding company based in Cape Town, South
                  Africa.
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
                I rebuilt 50% Off with a focus on future maintenance.
                <div>
                  Tech Stack:
                  <ul>
                    <li>Langauges: Typescript / React / SCSS </li>
                    <li>Framework: NextJs</li>
                    <li>Database: SQL</li>
                    <li>CMS: Strapi</li>
                    <li>Search: Elastic Search</li>
                    <li>Hosting: Vercel / GCP App Engine</li>
                    <li>Tracking: GTM </li>
                    <li>Auth: NextAuth </li>
                  </ul>
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
            <div>
              Skills learnt this year:
              <ul>
                <li>
                  Upscaling skills: Tailwindcss / Typescript / React / GCP /
                  Docker / Analytics / User Tracking / NextJs / Strapi / Backend
                  architecture
                </li>
              </ul>
            </div>
          </div>
        </Accordion>
        <hr className="mt-3 mb-2" />
        <Accordion heading="2022">
          <div>
            <h2 className="font-bold text-base  ">
              Second Business:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://hayibo.io"
              >
                Hayibo
              </a>
            </h2>
            <p>
              Hayibo is a luxury subscription box company based in Cape Town,
              South Africa. We deliver top-brand luxury items to our customers
              on a monthly basis, including whiskey, watches, jewellery, and
              more. Our goal is to make it easy for our customers to enjoy the
              finer things in life without having to worry about the hassle of
              shopping.
            </p>
            <div>
              Tech Stack:
              <ul>
                <li>Langauges: Typescript / React / CSS </li>
                <li>Framework: NextJs</li>
                <li>Database: SQL</li>
                <li>
                  Payment Provider:{" "}
                  <a
                    href="https://stitch.money/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stitch
                  </a>
                </li>
                <li>CMS: Strapi</li>
                <li>Search: Elastic Search</li>
                <li>Hosting: Vercel / GCP Cloud Run</li>
                <li>Tracking: GTM / Splitbee </li>
              </ul>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://hayibo.io"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center justify-center overflow-hidden h-full">
                <Image
                  src="/images/hayibo.png"
                  className="transform rounded-sm transition-transform duration-500 object-contain p-1"
                  width={40}
                  height={40}
                  alt="Hayibo"
                />
                <div className="ml-3">Hayibo</div>
              </div>
              <ArrowIcon />
            </a>

            <div className="mt-5">
              Skills learnt this year:
              <ul>
                <li>Building stream pipelines</li>
                <li>Webhook / API architecture</li>
                <li>
                  Integrations: South African payment providers ( Stitch / Pasy
                  Fast ){" "}
                </li>
                <li>How to run a small start-up ( Taxes, Salaries etc.)</li>
              </ul>
            </div>
          </div>
        </Accordion>
        <hr className="mt-3 mb-2" />
        <Accordion heading="2023">
          <div>
            <h2 className="font-bold text-base  ">
              Portfolio:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://jasonsouthin.io"
              >
                jasonsouthin.io
              </a>
            </h2>
            <ul className="list-decimal">
              <li>
                <p>
                  I wanted to create a simple portfolio to showcase my skills
                  and experience
                </p>
                <div>
                  Tech Stack:
                  <ul>
                    <li>Langauges: Typescript / React / Css </li>
                    <li>Framework: NextJs</li>
                    <li>Database: PlanetScale</li>
                    <li>Hosting: Vercel </li>
                    <li>Tracking: Splitbee </li>
                  </ul>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://jasonsouthin.vercel.app/"
                  className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                >
                  <div className="flex items-center justify-center overflow-hidden h-full">
                    <Image
                      src="/og.jpg"
                      className="transform rounded-sm transition-transform duration-500 object-contain p-1"
                      width={40}
                      height={40}
                      alt="Hayibo"
                    />
                    <div className="ml-3">Jason Southin</div>
                  </div>
                  <ArrowIcon />
                </a>
              </li>
            </ul>
            <div>
              Skills learnt this year:
              <ul>
                <li>PlanetScale</li>
                <li>Spotify integration</li>
                <li>Localization - i18n</li>
              </ul>
            </div>
          </div>
        </Accordion>
      </div>
      <br />
    </section>
  )
}
