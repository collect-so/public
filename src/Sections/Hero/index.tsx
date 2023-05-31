import { Section } from "~/components/section";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import cx from "classnames";
import { TransparentButton } from "~/components/button";

import { useObservedSize } from "~/components/hooks/useResizeObserver";

import { Background } from "~/components/background";
import { ColoredChip } from "~/components/colored-chip";
import { BlinkingRecords } from "~/Sections/Hero/blinking-records";
import { FlatAndNestedData } from "~/Sections/Hero/flat-and-nested-data";
import { FlexibleDataTypes } from "~/Sections/Hero/flexible-data-types";

export function HeroSection() {
  const { ref, size } = useObservedSize<HTMLElement>();

  return (
    <>
      <Section ref={ref} className={cx("overflow-hidden")} data-theme="dark">
        {size ? <Background target={ref} targetHeight={size.height} /> : null}
        {/*<Rigid size={size} />*/}
        <div
          className={cx(
            "container pt-[100px] min-h-[100vh] z-10",
            "grid items-center grid-rows-[5fr_1fr]",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem]">
              Build <span className="text-accent-brand">API</span>s like never
              before
              <ColoredChip
                color="purple"
                style={{ rotate: 20 }}
                whileHover={{ rotate: 14 }}
                className={cx(
                  "absolute",
                  "top-[-70px] right-[85px]",
                  "md:top-[170px] md:right-[calc(50%_-_85px)]",
                )}
              >
                instantly
              </ColoredChip>
            </h2>

            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base tracking-tight">
              Get rid of backend routine and focus on your features.
            </p>
          </div>
          <div className="flex justify-center gap-16 z-10">
            <TransparentButton>Read the Docs</TransparentButton>
            <JoinWaitlistButton />
          </div>
        </div>
        <div
          className={cx(
            "container  min-h-[100vh] z-10",
            "grid items-center ",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <p className="text-2xl sm:text-base font-medium text-content-secondary-dark sm:text-base tracking-tight">
              All-in-one API toolkit, offering{" "}
              <span className="font-bold text-accent-acid-yellow">
                no-code database experience
              </span>
              <br className="md:hidden" />
              with limitless{" "}
              <span className="font-bold text-accent-orange">data nesting</span>
              , enhanced with flexible{" "}
              <span className="font-bold text-accent-purple">file storage</span>{" "}
              and{" "}
              <span className="font-bold text-accent-pink">
                dynamic endpoints
              </span>
              .
            </p>
          </div>
        </div>
        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center gap-16",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem] mb-8">
              Iterate on your ideas faster <br className="md:hidden" />
              with flexible{" "}
              <span className="font-bold text-accent-acid-yellow">
                data types
              </span>
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base tracking-tight">
              Suitable even for ambitious and demanding projects.
              <br className="md:hidden" />
              <span className="font-bold text-accent-acid-yellow">
                No migrations needed.
              </span>
            </p>
          </div>
          <FlexibleDataTypes />
        </div>

        {/**/}

        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center  gap-16",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem] mb-8">
              Give more sense to your data
              <br className="md:hidden" /> with natively{" "}
              <span className="text-accent-orange">nested storage</span>
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base sm:text-sm tracking-tight">
              Simply store any data the way you think about it.{" "}
              <br className="md:hidden" />{" "}
              <span className="font-bold text-accent-orange">
                No configurations needed.
              </span>
            </p>
          </div>
          <FlatAndNestedData />
        </div>

        {/**/}

        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center  gap-16",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem]  mb-8">
              Retrieve data the way you need it
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base sm:text-sm tracking-tight">
              Build complex scenarios in a matter of double-digit minutes.{" "}
              <br className="md:hidden" />
              <span className="font-bold text-accent-purple">
                No query language needed.
              </span>
            </p>
          </div>
          <BlinkingRecords />
        </div>
      </Section>
    </>
  );
}
