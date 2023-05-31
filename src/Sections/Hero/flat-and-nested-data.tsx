import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef } from "react";
import { useCycle, motion, useInView } from "framer-motion";
import { randomIntFromRange } from "~/common";

const data = [
  { name: "The Wall", area: "firstAlbum" },
  { name: "Beautiful", area: "thirdSong" },
  { name: "Pink Floyd", area: "first" },
  { name: "Relapse", area: "thirdAlbum" },
  { name: "Iron Man", area: "secondSong" },
  { name: "Hey You", area: "firstSong" },
  { name: "Black Sabbath", area: "second" },
  { name: "Paranoid", area: "secondAlbum" },
  { name: "Eminem", area: "third" },
];

export const FlatAndNestedData = () => {
  const [mode, cycleMode] = useCycle("flat", "nested");
  const items = useRef(data);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        cycleMode();
      }, 1300);
      return () => clearInterval(interval);
    }
  }, [cycleMode, isInView]);

  const getOrderInGroup = (name: string) => {
    return name.includes("Song") ? 2 : name.includes("Album") ? 1 : 0;
  };

  const getColorByOrder = (order: 0 | 1 | 2) => {
    const enabled = mode === "nested";
    switch (order) {
      case 0: {
        return enabled ? "yellow" : "dark";
      }
      case 1: {
        return enabled ? "red" : "dark";
      }
      case 2: {
        return enabled ? "purple" : "dark";
      }
    }
  };

  const getMarginByOrder = (order: 0 | 1 | 2) => {
    const enabled = mode === "nested";
    switch (order) {
      case 0: {
        return 0;
      }
      case 1: {
        return enabled ? 40 : 0;
      }
      case 2: {
        return enabled ? 80 : 0;
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      layout
      animate
      className="relative z-10 content-center w-full gap-8"
      style={{
        display: mode === "nested" ? "grid" : "flex",
        flexWrap: mode === "nested" ? "nowrap" : "wrap",
        justifyContent: mode === "nested" ? "space-between" : "center",
        gridTemplateAreas:
          mode === "nested"
            ? `
          "first second third"
          "firstAlbum secondAlbum thirdAlbum"
          "firstSong  secondSong thirdSong"
        `
            : `
          "firstAlbum thirdSong first "
          "thirdAlbum secondSong firstSong"
          "second  secondAlbum third"
        `,
      }}
    >
      {items.current.map((item) => {
        const orderInGroup = getOrderInGroup(item.area);
        const color = getColorByOrder(orderInGroup) as ColoredChipColor;
        return (
          <ColoredChip
            color={color}
            layoutId={item.area}
            layout
            style={{
              gridArea: item.area,
              justifySelf: mode === "nested" ? "self-start" : "center",
              marginLeft: getMarginByOrder(orderInGroup),
            }}
            key={item.area}
            animate={{
              rotate: mode === "nested" ? 0 : randomIntFromRange(-5, 5),
            }}
            transition={{ type: "spring", stiffness: 100, mass: 0.5 }}
          >
            {item.name}
          </ColoredChip>
        );
      })}
    </motion.div>
  );
};
