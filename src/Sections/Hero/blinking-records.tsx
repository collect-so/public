import { useCycle } from "framer-motion";
import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef, useState } from "react";

const data: { color: ColoredChipColor; title: string }[] = [
  { color: "red", title: "Product" },
  { color: "purple", title: "User" },
  { color: "blue", title: "Address" },
  { color: "red", title: "Order" },
  { color: "blue", title: "Booking" },
  { color: "pink", title: "Deal" },
  { color: "yellow", title: "Content" },
  { color: "green", title: "Flight" },
  { color: "yellow", title: "Post" },
  { color: "green", title: "Branch" },
  { color: "orange", title: "Match" },
  { color: "pink", title: "Property" },
  { color: "purple", title: "Group" },
  { color: "red", title: "Delivery" },
  { color: "purple", title: "Event" },
  { color: "blue", title: "Transfer" },
  { color: "green", title: "Destination" },
  { color: "orange", title: "Model" },
  { color: "yellow", title: "Article" },
];

const randomIntFromRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

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

  useEffect(() => {
    if (!paused) {
      interval.current = setInterval(() => {
        cycleGroup();
      }, 1300);
      return () => clearInterval(interval.current);
    }
  }, [cycleGroup, paused]);

  useEffect(() => {
    const pausedTimer = setTimeout(() => {
      setPaused(false);
    }, 1700);
    return () => clearTimeout(pausedTimer);
  }, [paused]);

  const selectGroup = (group: ColoredChipColor) => () => {
    setPaused(true);
    cycleGroup(groups.current.indexOf(group));
  };

  return (
    <div className=" flex relative flex-wrap justify-center items-center z-10 min-h-[50vh] content-center w-full gap-8 md:gap-4">
      {data.map((item) => (
        <ColoredChip
          color={group === item.color ? item.color : "dark"}
          key={item.title}
          style={{ rotate: randomIntFromRange(-3, 3) }}
          onClick={selectGroup(item.color)}
        >
          {item.title}
        </ColoredChip>
      ))}
    </div>
  );
};
