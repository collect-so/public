import { Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "~/components/section";
import Link from "next/link";
import { Logo } from "~/components/logo";
import { DiscordIcon } from "~/components/Layout/Footer/discord-icon";

export function Footer() {
  return (
    <Section className="min-h-[30vh] grid" data-theme="dark">
      <div className="container py-16">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 items-start sm:text-center">
          <div className="justify-self-start sm:justify-self-center sm:order-2 sm:mt-5">
            <div className="flex gap-10">
              <Logo
                className="sm:m-auto text-content-primary-dark sm:w-[60px] sm:h-[60px]"
                width={140}
                height={140}
                // bgFill="black"
                // strokeColor="currentColor"
              />
              <div className="flex flex-col gap-4 m-auto">
                <h2 className="text-[80px] leading-[0.7] font-special md:text-xl md:leading-6 text-left font-bold text-content-primary-dark tracking-tight justify-self-end">
                  collect
                </h2>
                <p className="text-sm sm:text-sm font-medium text-content-secondary-dark leading-snug tracking-tight justify-self-start">
                  © 2023, Collect Software Inc.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-self-end text-center items-end grid sm:justify-self-center gap-8">
            <a
              href="mailto:hello@collect.so"
              className="text-xl leading-none font-medium text-content-primary-dark"
            >
              hello@collect.so
            </a>
            {/*<a*/}
            {/*  href="tel:+1(302)4809110"*/}
            {/*  className="text-xl leading-none font-medium text-content-primary-dark"*/}
            {/*>*/}
            {/*  +1 (302) 480 9110*/}
            {/*</a>*/}
            <div className="flex justify-between">
              <Link
                href="https://twitter.com/CollectAPI"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter
                  strokeWidth={1}
                  className="text-content-primary-dark w-12 h-12"
                />
              </Link>
              <Link
                href="https://github.com/collect-so"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Github
                  strokeWidth={1}
                  className="text-content-primary-dark w-12 h-12"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/collect-so/"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin
                  strokeWidth={1}
                  className="text-content-primary-dark w-12 h-12"
                />
              </Link>
              <Link
                href="https://discord.gg/zy7k6CJ7by"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <DiscordIcon className="text-content-primary-dark w-12 h-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
