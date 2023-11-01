import { env } from "@/env.mjs"
import { Route } from "next"
import Link from "next/link"
import { siteConfig } from "~/config/site"

export const metadata = {
  title: "About",
  description: "About codepracs",
  alternates: {
    canonical: `${env.NEXT_PUBLIC_APP_URL}/about`,
  },
}

const About = () => {
  return (
    <article>
      <h1>
        <strong>So, what&apos;s the website about? How did this site come to be?</strong>
      </h1>
      <br />
      <p>
        Well, it&apos;s a story that dates back hundreds of years ago ... I&apos;m just kidding! One
        of my closest friends had recently graduated university and although he graduated with a
        Masters & a Bachelors, he didn&apos;t know anything about tools, terminals, configurations,
        etc.
      </p>
      <br />
      <p>
        These are important side knowledge that developers don&apos;t get to know unless through
        experience, which takes time. What if there was a place where a junior developer or someone
        who didn&apos;t know best practices could instantaneously now know them?
      </p>
      <br />
      <p>
        <strong>So, when would I use this website?</strong>
      </p>
      <br />
      <p>
        You&apos;d come to use this website when you&apos;re looking for industry best practices and
        want to get started right away (ideally)
      </p>
      <br />
      <p>
        <strong>
          What if the best practice isn&apos;t on here? or if I want to add to the website?
        </strong>
      </p>
      <br />
      <p>
        Well, you can contribute! Checkout the{" "}
        <u>
          <Link
            target="_blank"
            rel="noreferrer"
            href={`${siteConfig.links.github}/blob/next/CONTRIBUTING.md` as Route}
          >
            contributing
          </Link>
        </u>{" "}
        link and start your potentially first GitHub contribution!
      </p>
    </article>
  )
}

export default About
