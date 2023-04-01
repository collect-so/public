import { Linkedin } from "lucide-react";
import { Section } from "~/components/section";
import Link from "next/link";
import { Logo } from "@common/logo";

export function Footer() {
  return (
    <Section className="min-h-[30vh] grid " data-theme="dark">
      <div className="container py-16">
        {/*<div className="basis-1/1 text-center items-center flex flex-col place-content-center text-center items-center ">*/}
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 items-center sm:text-center">
          <div className="justify-self-start sm:justify-self-center  ">
            <Logo className="sm:m-auto" />
            <h2 className="text-2xl sm:text-base font-bold text-content-primary-dark tracking-tight">
              collect
            </h2>

            <p className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight">
              ©2023, Collect Software Inc.
            </p>
          </div>
          <div className="justify-self-end text-center items-center grid justify-items-end sm:justify-items-center sm:justify-self-center">
            <a
              href="mailto:hello@collect.so"
              className="text-xl sm:text-base font-bold  text-content-primary-dark mb-8 sm:mb-4"
            >
              hello@collect.so
            </a>
            <Link
              href="https://www.linkedin.com/company/collect-so/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-content-primary-dark" />
            </Link>
          </div>
        </div>
        {/*</div>*/}
      </div>
    </Section>
  );
}
