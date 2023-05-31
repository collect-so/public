import { Section } from "~/components/section";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import cx from "classnames";
import { OutlineButton, TransparentButton } from "~/components/button";

import { useObservedSize } from "~/components/hooks/useResizeObserver";

import { CustomCursor } from "~/components/custom-cursor";
import Dawn from "../../images/svg/Dawn.svg";
import Direction from "../../images/svg/Direction.svg";
import Explosion from "../../images/svg/Explosion.svg";
import Lightning from "../../images/svg/Lightning 2.svg";
import SoftStar from "../../images/svg/Soft Star.svg";
import Star from "../../images/svg/Star.svg";
import { Background } from "~/components/background";
import { AutoRotationWrapper } from "~/components/autoroatation-wrapper";
import { ColoredChip } from "~/components/colored-chip";
import { BlinkingRecords } from "~/Sections/Hero/blinking-records";
import { FlatAndNestedData } from "~/Sections/Hero/flat-and-nested-data";

const TextGradient = {
  background: "linear-gradient(281deg, #FF0099, #EC7E19)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const Code = `// Job you do
const record = await CollectSDK
  .save("booking", {  // New record
    startDate: "2023-04-15T12:00:00Z",
    endDate: "2023-04-20T12:00:00Z"
  })
  .link("property", { // Existing record
    _id: "ec5bbf01d821498391683bbf01"
  })
  
// What you get
// 1. Endpoints to work with: 
const bookingEndpoint = "/api/v1/records/booking"
const propertyEndpoint = "/api/v1/records/property"

// 2. Recognition of record types "booking" and "property":
const booking = await CollectSDK.get("booking", {...})
const property = await CollectSDK.update("property", {...})`;

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
              Get rid of backend routine and focus on your features
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
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base tracking-tight">
              All-in-one API toolkit, offering{" "}
              <span className="font-bold text-accent-acid-yellow">
                no-code database experience
              </span>
              <br className="md:hidden" />
              with limitless{" "}
              <span className="font-bold text-accent-orange">data nesting</span>
              , enhanced with flexible{" "}
              <span className="font-bold text-accent-purple">file storage</span>
            </p>
          </div>
        </div>
        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center  gap-8",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem]">
              Rapidly build custom APIs <br className="md:hidden" />
              with flexible{" "}
              <span className="font-bold text-accent-red">data types</span>
            </h2>
          </div>
          <div className=" flex relative flex-wrap justify-center items-center z-10 min-h-[50vh] content-center w-full gap-8">
            <AutoRotationWrapper baseVelocity={-10}>
              <Dawn className="w-[133px] h-[133px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>
            <ColoredChip
              color="yellow"
              className={cx("")}
              whileHover={{ rotate: -10 }}
              style={{ rotate: -5 }}
            >
              boolean
            </ColoredChip>
            <AutoRotationWrapper baseVelocity={-25}>
              <SoftStar className="w-[95px] h-[95px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>
            <ColoredChip
              color="blue"
              className={cx(" ")}
              whileHover={{ rotate: 12 }}
              style={{ rotate: 6 }}
            >
              number
            </ColoredChip>
            <AutoRotationWrapper baseVelocity={15}>
              <Direction className="w-[134px] h-[67px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>
            <ColoredChip
              color="red"
              className={cx(" ")}
              whileHover={{ rotate: -8 }}
              style={{ rotate: -4 }}
            >
              datetime
            </ColoredChip>
            <AutoRotationWrapper baseVelocity={25}>
              <Star className="w-[85px] h-[85px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>{" "}
            <ColoredChip
              color="green"
              className={cx("")}
              whileHover={{ rotate: 10 }}
              style={{ rotate: 5 }}
            >
              point
            </ColoredChip>
            <AutoRotationWrapper baseVelocity={-15}>
              <Lightning className="w-[62px] h-[109px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>
            <ColoredChip
              color="pink"
              className={cx("")}
              whileHover={{ rotate: -14 }}
              style={{ rotate: -7 }}
            >
              string
            </ColoredChip>
            <AutoRotationWrapper baseVelocity={-10}>
              <Explosion className="w-[95px] h-[95px] md:w-[60px] md:h-[60px]" />
            </AutoRotationWrapper>
            <ColoredChip
              color="purple"
              className={cx(" ")}
              whileHover={{ rotate: 8 }}
              style={{ rotate: 4 }}
            >
              file
            </ColoredChip>
          </div>
          <div className={cx("z-10")}>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base tracking-tight">
              Suitable even for ambitious and demanding projects
            </p>
          </div>
          <div className="flex relative justify-center  z-10 ">
            <OutlineButton>See how it works</OutlineButton>
          </div>
        </div>

        {/**/}

        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center  gap-8",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem]">
              {/* */}
              {/*Utilize nested and horizontal structures with no limits and*/}
              {/*migrations*/}
              Give more sense to your data
              <br className="md:hidden" /> with natively nested storage
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base sm:text-sm tracking-tight">
              Simply store any data the way you think about it
            </p>
          </div>
          {/*<div className=" flex relative flex-wrap justify-center items-center z-10 min-h-[50vh] content-center w-full gap-8">*/}
          {/*<AutoRotationWrapper baseVelocity={-10}>*/}
          {/*  <Dawn className="w-[133px] h-[133px] md:w-[60px] md:h-[60px]" />*/}
          {/*</AutoRotationWrapper>*/}
          {/*<ColoredChip*/}
          {/*  color="yellow"*/}
          {/*  className={cx("")}*/}
          {/*  whileHover={{ rotate: -10 }}*/}
          {/*  style={{ rotate: -5 }}*/}
          {/*>*/}
          {/*  nesting*/}
          {/*</ColoredChip>*/}
          {/*<AutoRotationWrapper baseVelocity={-25}>*/}
          {/*  <SoftStar className="w-[95px] h-[95px] md:w-[60px] md:h-[60px]" />*/}
          {/*</AutoRotationWrapper>*/}
          {/*<ColoredChip*/}
          {/*  color="blue"*/}
          {/*  className={cx(" ")}*/}
          {/*  whileHover={{ rotate: 12 }}*/}
          {/*  style={{ rotate: 6 }}*/}
          {/*>*/}
          {/*  linking*/}
          {/*</ColoredChip>*/}
          {/*<AutoRotationWrapper baseVelocity={15}>*/}
          {/*  <Direction className="w-[134px] h-[67px] md:w-[60px] md:h-[60px]" />*/}
          {/*</AutoRotationWrapper>*/}
          {/*<ColoredChip*/}
          {/*  color="red"*/}
          {/*  className={cx(" ")}*/}
          {/*  whileHover={{ rotate: -8 }}*/}
          {/*  style={{ rotate: -4 }}*/}
          {/*>*/}
          {/*  instant endpoints*/}
          {/*</ColoredChip>*/}
          {/*<AutoRotationWrapper baseVelocity={25}>*/}
          {/*  <Star className="w-[85px] h-[85px] md:w-[60px] md:h-[60px]" />*/}
          {/*</AutoRotationWrapper>*/}
          {/*</div>*/}
          <FlatAndNestedData />
        </div>

        {/**/}

        <div
          className={cx(
            "container min-h-[100vh] z-10 mb-40",
            "grid items-center content-center  gap-8",
            "text-center ",
          )}
        >
          <div className={cx("z-10")}>
            <h2 className="relative text-4xl font-bold text-content-primary-dark sm:text-xl tracking-tight  sm:leading-[2.5rem]">
              Retrieve data matching your requirements
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-dark sm:text-base sm:text-sm tracking-tight">
              Build complex scenarios in a matter of double-digit minutes. Just
              link data between each other and collect it back.{" "}
              <span className="font-bold text-accent-acid-yellow">
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
