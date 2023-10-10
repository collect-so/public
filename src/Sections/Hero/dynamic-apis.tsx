import { useCycle, useInView } from "framer-motion";
import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef, useState } from "react";
import { randomIntFromRange } from "~/common";
import cx from "classnames";
import { CodeBlock } from "~/components/codeblock";
import { FeatureContainer } from "~/components/feature-container";

const UserCode = `await Collect.save(
  "user", // label
  {
    name: "John Galt"
  }
)

// Autogenerated API
/api/v1/label/user

/api/v1/property/price/not-contains/Jim
`;

const OrderCode = `await Collect.save(
  "order", // label
  {
    price: 349
  }
)

// Autogenerated API
/api/v1/label/order

/api/v1/property/price/range/300/400
`;
const BookingCode = `await Collect.save(
  "booking", // label
  {
    withPets: true
  }
)

// Autogenerated API
/api/v1/label/booking

/api/v1/property/withPets/equals/true
`;
const FlightCode = `await Collect.save(
  "flight", // label
  {
    destination: "MEL"
  }
)

// Autogenerated API
/api/v1/label/flight

/api/v1/property/destination/equals/MEL
`;
const ArticleCode = `await Collect.save(
  "article", // label
  {
    title: "Top memes of the year"
  }
)

// Autogenerated API
/api/v1/label/article

/api/v1/property/title/contains/memes
`;

const data: { color: ColoredChipColor; title: string; code: string }[] = [
  { color: "purple", title: "User", code: UserCode },
  { color: "red", title: "Order", code: OrderCode },
  { color: "blue", title: "Booking", code: BookingCode },
  { color: "green", title: "Flight", code: FlightCode },
  { color: "yellow", title: "Article", code: ArticleCode },
];
export const DynamicApis = () => {
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
        <div className={"mb-8"}>
          <div className={cx("feature-tag")}>Feature</div>
          <h2 className={cx("typography-3xl mb-4 font-special")}>
            Dynamic APIs
          </h2>
          <p className="typography-lg max-w-2xl">
            Labeling data within Collect unlocks its full API and search
            capabilities. Furthermore, all properties are automatically assigned
            to their respective APIs
          </p>
        </div>
        <div className={cx("grid grid-cols-2 z-10 gap-16", "md:grid-cols-1")}>
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

          <CodeBlock
            className="rounded-md md:m-auto sm:w-full"
            code={data[groups.current.indexOf(group)].code}
          />
        </div>
      </div>
    </FeatureContainer>
  );
};
