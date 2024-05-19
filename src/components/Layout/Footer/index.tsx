import { Github, Linkedin } from "lucide-react"
import { Section } from "~/components/Section"
import Link from "next/link"
import { socials } from "~/config/urls"
import { IconX } from "~/components/Layout/IconX"
import { IconDiscord } from "~/components/Layout/IconDiscord"
import { Logo } from "~/components/Logo"

export function Footer() {
  return (
    <Section
      className="min-h-[30vh] grid relative z-10"
      data-theme="dark"
      as="footer"
    >
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 items-start sm:text-center">
          <div className="justify-self-start sm:justify-self-center sm:order-2 sm:mt-5">
            <div className="flex gap-10">
              <Logo
                className="sm:m-auto text-content sm:w-[60px] sm:h-[60px]"
                width={140}
                height={140}
              />
              <div className="flex flex-col gap-4 m-auto">
                <h2 className="text-[80px] leading-[0.7] font-special md:text-xl md:leading-6 text-left font-bold text-content tracking-tight justify-self-end">
                  collect
                </h2>
                <p className="text-sm sm:text-sm font-medium text-content2 leading-snug tracking-tight justify-self-start">
                  © {new Date().getFullYear()}, Collect Software Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-end text-center items-end grid sm:justify-self-center gap-8">
            <a
              href={socials.emailUrl}
              className="text-xl leading-none font-medium text-content"
            >
              {socials.email}
            </a>
            {/*<a*/}
            {/*  href="tel:+1(302)4809110"*/}
            {/*  className="text-xl leading-none font-medium text-content"*/}
            {/*>*/}
            {/*  +1 (302) 480 9110*/}
            {/*</a>*/}
            <div className="flex justify-between">
              <Link
                href={socials.x}
                target="__blank"
                rel="noopener noreferrer"
                aria-label="X (Formerly Twitter)"
              >
                <IconX strokeWidth={1} className="text-content w-12 h-12" />
              </Link>
              <Link
                href={socials.github}
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Github strokeWidth={1} className="text-content w-12 h-12" />
              </Link>
              <Link
                href={socials.linkedIn}
                target="__blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin strokeWidth={1} className="text-content w-12 h-12" />
              </Link>
              <Link
                href={socials.discord}
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <IconDiscord className="text-content w-12 h-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
