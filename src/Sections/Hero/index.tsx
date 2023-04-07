import { Section } from "~/components/section";
import heroApp from "~/images/hero-app.png";
import lightning from "~/images/lightning.png";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";

import cx from "classnames";
import { Background } from "~/Sections/Hero/background";
import { CodeBlock } from "~/components/codeblock";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import clsx from "classnames";
import { cards } from "~/Sections/Swipes/data";
import { CornerDownLeft } from "lucide-react";
import { Path1 } from "~/Sections/Hero/path1";
import { Path2 } from "~/Sections/Hero/path2";
import { Badge } from "~/components/badge";

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
  return (
    <>
      <Section
        className="min-h-[70vh] mt-[100px] md:mt-[60px] grid place-content-center"
        data-theme="light"
      >
        <div
          className={cx(
            "container md:py-20",
            "text-left grid grid-cols-[3fr_2fr] gap-8 items-center",
            "md:text-center md:grid-rows-2 md:grid md:grid-cols-1",
          )}
        >
          <div
            className={cx(
              "grid gap-4 justify-items-start center relative",
              "md:justify-items-center md:order-2 md:row-span-2",
            )}
          >
            <h2 className="text-3xl font-bold  text-content-primary-light sm:text-2xl tracking-tight leading-[3.5rem] sm:leading-[2.5rem]">
              Turn <span style={TextGradient}>ideas</span> into
              <br className="md:hidden" /> fast and reliable{" "}
              <span className="text-accent-brand">API</span>s
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-light sm:text-base tracking-tight">
              Collect Platform is your low-code swiss-knife{" "}
              <br className="md:hidden" /> to <b>get things done</b> without any
              hassle
            </p>
            <div className="flex gap-4 sm:hidden">
              <Badge className="bg-background-dark">Built for people</Badge>
              <Badge className="bg-background-dark">Powered by graphs</Badge>
              <Badge className="bg-background-dark">Enhanced by AI</Badge>
            </div>
            <JoinWaitlistButton className="mt-8 sm:hidden" />
          </div>
          <div className="md:row-span-1 md:order-2 grid gap-4">
            {/*<div className="flex flex-col items-center w-full m-auto">*/}
            {/*  <p className="text-xl sm:text-base font-medium text-content-secondary-light tracking-tight mr-16 mb-2">*/}
            {/*    Type your idea*/}
            {/*  </p>*/}
            {/*  <Path1 />*/}
            {/*</div>*/}
            {/*<div className="rounded-md bg-[#35454e] flex items-center w-full md:w-full justify-between p-4">*/}
            {/*  <p className="text-base font-medium text-content-secondary-dark tracking-tight">*/}
            {/*    Make a Booking App*/}
            {/*  </p>*/}
            {/*  <CornerDownLeft className="text-content-secondary-dark" />*/}
            {/*</div>*/}
            <CodeBlock code={Code} className=" md:relative left-0 " />
            {/*<div className="flex flex-col items-center w-full m-auto">*/}
            {/*  <Path2 />*/}
            {/*  <p className="text-xl sm:text-base font-medium text-content-secondary-light tracking-tight ml-16 mt-2">*/}
            {/*    Start using your API*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </Section>
    </>
  );
}
