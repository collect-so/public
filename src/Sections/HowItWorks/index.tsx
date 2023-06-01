import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { CodeBlock } from "~/components/codeblock";
import { Section } from "~/components/section";

function useWaypoint() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "400px 0px 0px 0px" });
  return { ref, isInView } as const;
}

const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.05, staggerChildren: 0.008 },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const renderChars = (str: string, className?: string) =>
  str.split("").map((ch, idx) => (
    <motion.span className={className} key={ch + idx} variants={letter}>
      {ch}
    </motion.span>
  ));

export function HowItWorksSection() {
  const { ref: waypoint0Ref, isInView: waypoint0InView } = useWaypoint();
  const { ref: waypoint1Ref, isInView: waypoint1InView } = useWaypoint();
  const { ref: waypoint2Ref, isInView: waypoint2InView } = useWaypoint();
  const { ref: waypoint3Ref, isInView: waypoint3InView } = useWaypoint();

  return (
    <Section data-theme="dark" className="py-24 container">
      <h2 className="pb-24 text-3xl font-extrabold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem] mx-auto text-center">
        How It Works
      </h2>
      <div className="sticky top-0 flex items-start gap-4">
        {/* 50% - nav height */}
        <div className="sticky top-[calc(50%-100px)] flex-1 h-full flex items-center ">
          <h3 className="text-xl leading-snug font-medium text-content-primary-dark">
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint0InView ? "visible" : "hidden"}
            >
              {renderChars("Push")}
              {renderChars(" any data ", "font-bold text-accent-brand")}
              {renderChars("to Collect API")}{" "}
            </motion.span>
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint1InView ? "visible" : "hidden"}
            >
              {renderChars("and get it")}{" "}
              {renderChars(
                "automatically organized",
                "font-bold text-accent-red",
              )}
            </motion.span>{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint2InView ? "visible" : "hidden"}
            >
              {renderChars("and ")}
              {renderChars("accessible", "font-bold text-accent-purple")}
              {renderChars(" with SDK.")}
            </motion.span>{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint3InView ? "visible" : "hidden"}
            >
              {renderChars(" Or throughout dynamically built Endpoints.")}
            </motion.span>
          </h3>
        </div>
        <div className="flex-1 gap-16 flex flex-col">
          <CodeBlock
            ref={waypoint0Ref}
            code={`// Just push whatever you need to be saved:
const booking = await CollectSDK.create(
  // New Record Label:
  "booking", 
  // New Record Data:
  { 
    startDate: "2023-04-15T12:00:00Z",
    endDate: "2023-04-20T12:00:00Z",
    guestsCount: 4,
    info: {
      // Nested Record
      // with Label “info”
      // and Data:
      message: "We will arrive slightly earlier. At 11AM."
    }
  }
)`}
          />

          <CodeBlock
            ref={waypoint1Ref}
            code={`// Link with existing Record:
await booking.link("property", {
  id: "ec5bbf01d821498391683bbf01",
})
`}
          />

          <CodeBlock
            ref={waypoint2Ref}
            code={`// Now you able to create, read,
// update and delete those Data:
await booking.update("booking", {
  ...booking.data,
  // Add extra Data
  withPet: true,
})
`}
          />

          <CodeBlock
            ref={waypoint3Ref}
            code={`// Or achieve the same by using Endpoints:
const bookingEndpoint = "/api/v1/label/booking"
const propertyEndpoint = "/api/v1/label/property"
`}
          />
        </div>
      </div>
    </Section>
  );
}
