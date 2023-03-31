import { Section } from "@common/section";
import rocket from "~/images/rocket.png";
import lightning from "~/images/lightning.png";
import Image from "next/image";
import classNames from "classnames";

export function HeroSection() {
  return (
    <Section
      className="min-h-screen mt-[70px] md:mt-[60px] grid place-content-center"
      data-theme="light"
    >
      <Image
        src={lightning}
        alt={"lightning"}
        className={classNames(
          "absolute left-0 top-[200px] z-0",
          "md:top-[100px] left-0",
          "sm:top-[80vh] sm:left-[20vw]",
        )}
      />
      <Image
        src={rocket}
        alt={"rocket"}
        className={classNames(
          "absolute right-0 bottom-0 z-0",
          "md:right-[0px] md:bottom-[-100px]",
          "sm:right-[30vw] sm:top-[20px]",
        )}
      />
      <div className="container">
        <div className="basis-1/1 text-center">
          <h2 className="text-3xl font-bold mb-8 text-content-primary-light sm:text-xl ">
            Skip complex backend work
            <br className="sm:hidden" /> and focus on growing your business
          </h2>
          <h4 className="text-xl font-medium text-content-secondary-light sm:text-base ">
            Easy-to-use, query language-free <b>storage engine</b>,
            <br className="sm:hidden" />
            featuring data nesting, file storage, lightning-fast search and{" "}
            <br className="sm:hidden" />
            filtering capabilities to <b>get things done</b> without any hassle
          </h4>
        </div>
      </div>
    </Section>
  );
}
