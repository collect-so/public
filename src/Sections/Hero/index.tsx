import { Section } from "~/components/section";
import rocket from "~/images/rocket.png";
import lightning from "~/images/lightning.png";
import Image from "next/image";
import classNames from "classnames";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import { Badge } from "~/components/badge";
import { ScrollIcon } from "lucide-react";
import cx from "classnames";

export function HeroSection1() {
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
        )}
      />
      <Image
        src={rocket}
        alt={"rocket"}
        className={classNames(
          "sm:hidden absolute right-0 bottom-0 z-0",
          "md:right-[0px] md:bottom-[-100px] md:w-[300px]",
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

          <JoinWaitlistButton />
        </div>
      </div>
    </Section>
  );
}

export function HeroSection() {
  return (
    <Section
      className="min-h-screen mt-[100px] md:mt-[60px] grid place-content-center"
      data-theme="light"
    >
      <div className="container">
        <div
          className={cx(
            "text-left grid grid-cols-[3fr_2fr] gap-8 items-center max-w-6xl",
            "md:text-center md:grid-rows-[1fr_2fr] md:grid md:grid-cols-1",
          )}
        >
          <div className="grid gap-12 justify-items-start md:justify-items-center center md:row-span-2 md:gap-8 md:order-2">
            <h2 className="text-3xl font-bold  text-content-primary-light sm:text-2xl tracking-tight leading-[3.5rem] sm:leading-[2.5rem]">
              Skip <span className="sm:hidden">complex</span> backend work
              <br className="sm:inline-block md:hidden" /> and focus on growing
              <br className="sm:hidden md:hidden" /> your business
            </h2>
            <h4 className="text-xl font-medium text-content-secondary-light sm:text-base tracking-tight">
              Easy-to-use, query language-free <b>storage engine</b>,
              <br className="sm:hidden" />
              featuring data nesting, file storage, lightning-fast search and
              filtering capabilities to <b>get things done</b> without any
              hassle
            </h4>
            <JoinWaitlistButton />
          </div>
          <Image
            src={rocket}
            alt={"rocket"}
            className={classNames(
              " h-[250px] sm:h-[150px] w-[250px] sm:w-[150px] md:m-auto justify-self-center",
              "md:row-span-1 md:order-1",
            )}
            width={250}
            height={250}
            quality={100}
          />
        </div>
      </div>
    </Section>
  );
}
