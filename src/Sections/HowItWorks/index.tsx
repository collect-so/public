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
    <Section data-theme="dark" className="py-32 container">
      <h2 className="pb-24 text-3xl font-extrabold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem] mx-auto text-center font-special">
        How it works
      </h2>
      <div className="sticky top-0 flex items-start gap-4 md:flex-col">
        {/* 50% - nav height */}
        <div className="sticky top-[calc(50%-100px)] flex-1 h-full flex items-center md:top-0 md:pt-[68px] md:pb-2 md:z-10 md:bg-background-dark">
          <h3 className="text-xl leading-snug font-medium text-content-primary-dark">
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint0InView ? "visible" : "hidden"}
            >
              {renderChars("Push")}
              {renderChars(" any data ", "font-bold text-accent-yellow")}
              {renderChars("to Collect")}{" "}
            </motion.span>
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint1InView ? "visible" : "hidden"}
            >
              {renderChars("and get it")}{" "}
              {renderChars(
                "automatically normalized",
                "font-bold text-accent-red",
              )}
            </motion.span>{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint2InView ? "visible" : "hidden"}
            >
              {renderChars("and ")}
              {renderChars("accessible", "")}
              {renderChars(" with SDK")}
            </motion.span>{" "}
            <motion.span
              variants={sentence}
              initial="hidden"
              animate={waypoint3InView ? "visible" : "hidden"}
            >
              {renderChars(" or throughout instantly")}
              {renderChars(" generated APIs", "font-bold text-accent-purple")}
            </motion.span>
          </h3>
        </div>
        <div className="flex-1 gap-16 flex flex-col m-auto">
          <CodeBlock
            ref={waypoint0Ref}
            code={`// Save whatever you need to be saved:
const booking = await Collect.save(
  // Record Label
  "booking", 
  // Record data
  { 
    startDate: "2023-04-15T12:00:00Z",
    endDate: "2023-04-20T12:00:00Z",
    guestsCount: 4,
    info: {
      // Nested Record
      // with Label “info” and Data:
      message: "We will arrive slightly earlier."
    }
  }  
)`}
          />

          <CodeBlock
            ref={waypoint1Ref}
            code={`// Find existing Record:
const hotel = await Collect.find("hotel", {
  name: "The Grand Budapest"
})

// Link it with new one 
// and give more sense to your data:
await booking.link(hotel, { 
    createdAt: new Date().toISOString() 
})
`}
          />

          <CodeBlock
            ref={waypoint2Ref}
            code={`// Create, read, update and delete these Records:
await booking.update({
  // Add extra Data
  withPet: true,
  extraBed: true
})
`}
          />

          <CodeBlock
            ref={waypoint3Ref}
            code={`// Or by instantly generated APIs:
            
// Records with label “booking“
/api/v1/label/booking                

// Records with label "hotel"
/api/v1/label/hotel      

// Records with “guestsCount“ prop equals to 4
/api/v1/property/guestsCount/equals/4 

// Records with “withPet“ prop equals to true
/api/v1/property/withPet/equals/true
`}
          />
        </div>
      </div>
    </Section>
  );
}
