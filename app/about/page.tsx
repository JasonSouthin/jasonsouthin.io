import type { Metadata } from "next"

import {
  GitHubIcon,
  SpotifyIcon,
  ArrowIcon,
  TwitterIcon,
  LinkedInIcon,
} from "components/icons"
import PdfViewer from "components/pdf"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About",
  description: "Full Stack Engineer at Newsteam",
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Jason.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a <b>Full stack engineer at Newsteam</b>, where I build
          and maintain 15 international news publications. I focus on{" "}
          <b>developing and growing</b> the Newsteam websites and capablities.
        </p>
        <hr />
        <p>
          I'm passionate about many creative pursuits, including gaming,
          business, and of course, coding. This combination of interests is what
          ultimately led me to my current role in building websites.
        </p>
        <p>
          I <b>love</b> building for the web. From something as simple as a
          single HTML file – all the way to large e-commerce applications. The
          web is incredible. Anyone can become a developer, writer, or creator –
          and no one has to ask for permission. You can just build.
        </p>
        <p className="mb-8">
          Outside of work, I <b>build and develop</b> personal ecommerce
          projects. I also do UI/UX design, company developing and AD ops.
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
          <li>Knowldge in Advertisments / Advertisment Management ( GAM ) </li>
          <li>
            Knowldge in user tracking / analytics / reports ( GTM / Kibana /
            Looker studio ){" "}
          </li>
          <li>Knowldge in Search ( Elastic / Fuzzy ) </li>
        </ul>
        <hr />
        <h1 className="font-bold text-3xl font-serif">Qaulifications</h1>
        <p>
          I have completed a triple major at the Rhodes University in South
          Africa.
        </p>
        <p>Majors: Information Systems, Economics, Management</p>

        <PdfViewer src="/pdf/transcript.pdf" title="University transcript" />
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
            work and I always strive to do my best. I am also willing to admit
            when I make mistakes and I am always looking for ways to improve.
          </li>
          <li>
            <b>I have great knowledge in the Ecommerce world:</b> I try stay
            up-to-date on the latest Ecommerce trends. I am also familiar with a
            variety of ecommerce platforms and I am able to use them to create
            effective ecommerce webistes.
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
            tools for my trade and I am always looking for the next best tool.
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
