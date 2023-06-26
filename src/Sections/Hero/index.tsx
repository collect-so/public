import { Section } from "~/components/section";
import cx from "classnames";

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
        <div className={cx("feature-container")}>
          <div className={cx("z-10 relative")}>
            <ColoredChip
              color="purple"
              style={{ rotate: 20 }}
              whileHover={{ rotate: 14 }}
              className={cx(
                "absolute",
                "top-[-70px] right-[85px]",
                "md:top-[-30px] md:right-[20px]",
                " md:hidden",
              )}
            >
              instantly
            </ColoredChip>
            <ColoredChip
              style={{ rotate: 5 }}
              color="purple"
              className={cx("mb-8 md:inline-flex hidden")}
            >
              instantly
            </ColoredChip>

            <h2 className={cx("typography-4xl")}>
              Build powerful <span className="text-accent-brand">API</span>s
              <br />
              like never before
            </h2>

            <p className={cx("typography-base")}>
              <span className="font-bold text-content-primary-dark">
                Zero-code database
              </span>{" "}
              to build apps ridiculously fast. It comes with integrated{" "}
              <span className="font-bold text-content-primary-dark">
                file storage
              </span>
              , limitless{" "}
              <span className="font-bold text-content-primary-dark">
                data nesting
              </span>{" "}
              and enhanced with{" "}
              <span className="font-bold text-content-primary-dark">
                dynamic endpoints
              </span>
              .
            </p>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <h2
              className={cx(
                "typography-4xl pb-60 underline decoration-accent-brand decoration-wavy decoration-[8px] underline-offset-[24px]",
              )}
            >
              Features
            </h2>

            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Zero-code database</h2>
            <p className="typography-base">
              Skip migrations, skip model configuration, skip JOINs. Focus on
              what is really important, not on the tools that help you get
              there.
            </p>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Dynamic APIs</h2>
            <p className="typography-base">
              Simply label what you push to Collect and retrieve it all using
              the automatically assigned "labeled" endpoint.
            </p>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")} id="features">
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Data types auto-detection</h2>
            {/*<h2 className={cx("typography-3xl")}>*/}
            {/*  Iterate on your ideas faster <br className="md:hidden" />*/}
            {/*  with flexible{" "}*/}
            {/*  <span className="font-bold text-accent-acid-yellow">*/}
            {/*    data types*/}
            {/*  </span>*/}
            {/*</h2>*/}
            <p className="typography-base">
              {/*Iterate on your ideas faster with flexible data types. Suitable*/}
              {/*even for ambitious and demanding projects.*/}
              Ensure that anything you push to Collect is appropriately arranged
              and securely stored.
              {/*<br className="md:hidden" />*/}
              {/*<span className="font-bold text-content-primary-dark">*/}
              {/*  No migrations needed.*/}
              {/*</span>*/}
            </p>
          </div>
          <FlexibleDataTypes />
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>

            <h2 className={cx("typography-3xl")}>
              Data nesting
              {/*<br className="md:hidden" /> with natively{" "}*/}
              {/*<span className="text-accent-orange">nested storage</span>*/}
            </h2>
            <p className="typography-base">
              Simply store any data the way you think about it. Give more sense
              to your data with natively nested storage.
              {/*<br className="md:hidden" />{" "}*/}
              {/*<span className="font-bold text-content-primary-dark">*/}
              {/*  No configurations needed.*/}
              {/*</span>*/}
            </p>
          </div>
          <FlatAndNestedData />
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>
              Data linking and retrieval
              {/*Retrieve data the way you need it*/}
            </h2>
            <p className="typography-base">
              Build complex scenarios in a matter of double-digit minutes.
              Retrieve data the way you need it.
              {/*<br className="md:hidden" />*/}
              {/*<span className="font-bold text-content-primary-dark">*/}
              {/*  No query language needed.*/}
              {/*</span>*/}
            </p>
          </div>
          <BlinkingRecords />
        </div>
      </Section>
    </>
  );
}
