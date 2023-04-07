import { Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "~/components/section";
import Link from "next/link";
import { Logo } from "~/components/logo";

export function Footer() {
  return (
    <Section className="min-h-[30vh] grid " data-theme="dark">
      <div className="container py-16">
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 items-center sm:text-center">
          <div className="justify-self-start sm:justify-self-center  ">
            <Logo className="sm:m-auto" />
            <h2 className="text-2xl sm:text-base font-bold text-content-primary-dark tracking-tight">
              collect
            </h2>

            <p className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight mb-1">
              © 2023, Collect Software Inc.
            </p>
            <p className="text-sm font-medium text-content-tertiary-dark tracking-tight">
              8 The Green. Ste A. Dover, DE 19901
            </p>
          </div>
          <div className="justify-self-end text-center items-center grid justify-items-end sm:justify-items-center sm:justify-self-center">
            <a
              href="mailto:hello@collect.so"
              className="text-base font-medium text-content-primary-dark mb-4"
            >
              hello@collect.so
            </a>
            <a
              href="tel:+1(302)4809110"
              className="text-base font-medium text-content-primary-dark mb-4"
            >
              +1 (302) 480 9110
            </a>
            <div className="grid gap-4 grid-cols-3">
              <Link
                href="https://twitter.com/CollectAPI"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="text-content-primary-dark" />
              </Link>
              <Link
                href="https://github.com/collect-so"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Github className="text-content-primary-dark" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/collect-so/"
                target="__blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-content-primary-dark" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
