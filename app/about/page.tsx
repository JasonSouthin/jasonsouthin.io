import type { Metadata } from "next"
import Image from "next/image"

import {
  GitHubIcon,
  SpotifyIcon,
  ArrowIcon,
  LinkedInIcon,
} from "components/icons"

import Link from "next/link"
import Modal from "components/modal"

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export const metadata: Metadata = {
  title: "About",
  description: "Full Stack Engineer at Newsteam",
}

export default function AboutPage({ searchParams }: Props) {
  const showModal = searchParams?.modal

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Jason.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a <b>Full stack engineer at Newsteam</b>, where I build
          and maintain international news publications. I focus on{" "}
          <b>developing and growing</b> the newsteam websites and capabilities.
        </p>
        <hr />
        <p>
          I'm passionate about many creative pursuits, including gaming,
          business, and obviously, coding. This combination of interests is what
          ultimately led me to my current role in building websites.
        </p>
        <p>
          I <b>love</b> building for the web from something as simple as a
          single HTML file – to large e-commerce applications. The web is
          incredible. Anyone can become a developer, writer, or creator – and no
          one has to ask for permission. You can just build.
        </p>
        <p className="mb-8">
          Outside of work, I <b>build and develop</b> personal e-commerce
          projects. I also do UI/UX design, company development, and AD ops.
        </p>
        <hr />
        <h1 className="font-bold text-3xl font-serif">Skills</h1>
        <ul>
          <li>
            Languages: JavaScript (vanilla, jQuery), TypeScript, HTML, CSS,
            Python, SQL, React
          </li>
          <li>Front-end Frameworks: NextJS / Angular</li>
          <li>Templating: Jinja2 / EJS / Marko</li>
          <li>Databases: PlanetScale, MySql, PostgreSQL, MongoDB</li>
          <li>Cloud Providers: GCP / Strapi / Heroku / Redis / Upstash </li>
          <li>CMS: Strapi / Sanity / Contentful</li>
          <li>Knowledge in Advertisments / Advertisment Management ( GAM ) </li>
          <li>
            Knowledge in user tracking / analytics / reports ( GTM / Kibana /
            Looker studio ){" "}
          </li>
          <li>Knowledge in Search ( Elastic / Fuzzy ) </li>
        </ul>
        <hr />
        <h1 className="font-bold text-3xl font-serif">Qaulifications</h1>
        <p>
          I have completed a triple major at the Rhodes University in South
          Africa.
        </p>
        <p>Majors: Information Systems, Economics, Management</p>
        <Link
          href="/about?modal=true"
          scroll={false}
          className="flex w-full lg:max-w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between m-0"
        >
          <div className="flex items-center justify-center overflow-hidden h-full min-h-[3rem]">
            <Image
              src="/images/rhodes.jpeg"
              className="transform rounded-xl transition-transform duration-500 object-contain p-1"
              width={40}
              height={40}
              alt="Rhodes university transcript"
            />
            <div className="ml-2">Transcript </div>
          </div>
          <ArrowIcon />
        </Link>
        {showModal && (
          <Modal title="Transcript">
            <object
              className="w-full h-[45rem]"
              type="application/pdf"
              data="/pdf/transcript.pdf"
            >
              <p>
                It appears your browser doesn't support embedded PDFs. You can{" "}
                <Link href="/pdf/transcript.pdf">download the PDF</Link>{" "}
                instead.
              </p>
            </object>
          </Modal>
        )}
        <hr />
        <h1 className="font-bold text-3xl font-serif">Qualities</h1>
        <ul>
          <li>
            <b>I enjoy working in a startup:</b> I have experience working in a
            fast-paced, entrepreneurial environment. I am comfortable with
            ambiguity and thrive on challenges. I am also a quick learner and
            can adapt to change quickly.
          </li>
          <li>
            <b>I am a team player:</b> I am able to communicate my ideas clearly
            and concisely to both technical and non-technical audiences and
            collaborate effectively with others to achieve common goals.
          </li>
          <li>
            <b>I take responsibility for my actions:</b> I am accountable for my
            work and I always strive to do my best. I'm also willing to admit
            when I make mistakes and i'm always looking for ways to improve.
          </li>
          <li>
            <b>I have knowledge in the Ecommerce world: </b> I strive to stay
            up-to-date on the latest e-commerce trends. I am also familiar with
            a variety of e-commerce platforms and can use them to create
            effective e-commerce websites.
            <br />I have built custom E-commerce solutions from payment to
            logistics.
            <br />
            Platforms: Contentful / Sanity / Shopify / Bigcommerce.
            <br />I am currently building in{" "}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://medusajs.com/"
              >
                Medusa.js
              </a>
            </b>
          </li>
          <li>
            <b>I use the latest tools for development:</b> I enjoy learning new
            tools for my craft and am always searching for the next best tool.
          </li>
        </ul>
        <hr />
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jason-southin-75307797/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jasonsouthin"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/31k6w6lbu5qljgbz4o2huuxfhvta"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <SpotifyIcon />
              <div className="ml-3">Spotify</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
