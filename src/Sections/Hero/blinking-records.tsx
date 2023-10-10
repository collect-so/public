import { useCycle, useInView } from "framer-motion";
import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef, useState } from "react";
import { randomIntFromRange } from "~/common";
import cx from "classnames";
import { CodeBlock } from "~/components/codeblock";
import { FeatureContainer } from "~/components/feature-container";

const Entities = `const user = await Collect.save("user", {
  name: "Wolfgang Bogdanov"
})

const event = await Collect.save("event", {
  title: "Paul Kalkbrenner",
  date: "2023-10-11T22:30:00Z"
})

const ticket = await Collect.save("ticket", {
  ticketId: 1234567890,
  valid: true
})
`;

const Linking = `// Link ticket to event
await ticket.link(event)

// Link user to event and ticket
await user.link([event, ticket])

// Fetch related Records with certain criteria
const userData = await user.related({
  ticket: {
    valid: true
  },
  event: {}
})
`;

const data: { color: ColoredChipColor; title: string }[] = [
  { color: "red", title: "Product" },
  { color: "green", title: "User" },
  // { color: "blue", title: "Address" },
  // { color: "blue", title: "Booking" },
  { color: "purple", title: "Deal" },
  { color: "yellow", title: "Content" },
  // { color: "green", title: "Flight" },
  { color: "yellow", title: "Post" },
  // { color: "green", title: "Branch" },
  { color: "blue", title: "Match" },
  { color: "red", title: "Order" },

  { color: "purple", title: "Property" },
  { color: "green", title: "Ticket" },
  { color: "red", title: "Delivery" },
  { color: "green", title: "Event" },
  // { color: "blue", title: "Transfer" },
  // { color: "green", title: "Destination" },
  { color: "blue", title: "Model" },
  { color: "yellow", title: "Article" },
];
export const BlinkingRecords = () => {
  const groups = useRef(
    data.reduce<Array<ColoredChipColor>>((acc, item) => {
      acc.push(item.color as ColoredChipColor);
      return acc;
    }, []),
  );
  const [group, cycleGroup] = useCycle(...groups.current);
  const interval = useRef<ReturnType<typeof setInterval>>();
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!paused && isInView) {
      interval.current = setInterval(() => {
        cycleGroup();
      }, 2500);
    }
    return () => clearInterval(interval.current);
  }, [cycleGroup, paused, isInView]);

  useEffect(() => {
    const pausedTimer = setTimeout(() => {
      setPaused(false);
    }, 2500);
    return () => clearTimeout(pausedTimer);
  }, [paused]);

  const selectGroup = (group: ColoredChipColor) => () => {
    setPaused(true);
    cycleGroup(groups.current.indexOf(group));
  };

  return (
    <FeatureContainer>
      <div className={cx("z-10")}>
        <div className={cx("feature-tag")}>Feature</div>
        <h2 className={cx("typography-3xl mb-4 font-special")}>
          Data linking and retrieval
        </h2>
        <p className="typography-lg max-w-2xl ">
          Build complex scenarios in a matter of double-digit minutes. Retrieve
          meaningful data the way you need it.
        </p>
      </div>
      <div
        ref={ref}
        className="flex relative flex-wrap justify-center items-center z-10 content-center w-full gap-8 md:gap-4 sm:gap-2"
      >
        {data.map((item) => (
          <ColoredChip
            color={group === item.color ? item.color : "dark"}
            key={item.title}
            onClick={selectGroup(item.color)}
            animate={{ rotate: randomIntFromRange(-3, 3) }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {item.title}
          </ColoredChip>
        ))}
      </div>
      <div className={cx("grid grid-cols-2 z-10 gap-16", "md:grid-cols-1")}>
        <CodeBlock className="rounded-md md:m-auto sm:w-full" code={Entities} />
        <CodeBlock className="rounded-md md:m-auto sm:w-full" code={Linking} />
      </div>
    </FeatureContainer>
  );
};
