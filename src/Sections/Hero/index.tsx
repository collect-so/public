import { Section } from "~/components/section";
import rocket from "~/images/rocket.png";
import lightning from "~/images/lightning.png";
import Image from "next/image";
import classNames from "classnames";
import { OutlineButton } from "~/components/button";
import { ChevronsDown } from "react-feather";
import Link from "next/link";
import { Badge } from "@common/badge";

export function HeroSection() {
  return (
    <Section
      className="min-h-screen mt-[100px] md:mt-[60px] grid place-content-center"
      data-theme="light"
    >
      <Image
        src={lightning}
        alt={"lightning"}
        className={classNames(
          "sm:hidden absolute left-0 top-[200px] z-0",
          "md:top-[100px] left-[-80px] ",
          // "sm:top-[80vh] sm:left-[20vw]",
        )}
      />
      <Image
        src={rocket}
        alt={"rocket"}
        className={classNames(
          "sm:hidden absolute right-0 bottom-0 z-0",
          "md:right-[0px] md:bottom-[-100px] md:w-[300px]",
          // "sm:left-[0vw] sm:top-[100px] sm:w-[200px]",
        )}
      />
      <div className="container">
        <div className="basis-1/1 text-center flex flex-col gap-8 items-center">
          <h2 className="text-3xl font-bold  text-content-primary-light sm:text-xl tracking-tight">
            Skip complex backend work
            <br className="sm:hidden" /> and focus on growing your business
          </h2>
          <h4 className="text-xl font-medium text-content-secondary-light sm:text-base tracking-tight">
            Easy-to-use, query language-free <b>storage engine</b>,
            <br className="sm:hidden" />
            featuring data nesting, file storage, lightning-fast search and{" "}
            <br className="sm:hidden" />
            filtering capabilities to <b>get things done</b> without any hassle
          </h4>
          <Link href="/#features">
            <OutlineButton>
              Features
              <ChevronsDown />
            </OutlineButton>
          </Link>
        </div>
      </div>
    </Section>
  );
}
