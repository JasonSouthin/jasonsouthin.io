import type { Metadata } from "next"
import ProjectComponent from "components/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Website project experience",
}

export default function Projects() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif ">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        A list of projects i created, ordered by years of experience:
      </p>
      <ProjectComponent />
      <br />
    </section>
  )
}
