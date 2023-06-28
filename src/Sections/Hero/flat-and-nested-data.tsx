import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef, useState } from "react";
import { useCycle, motion, useInView } from "framer-motion";
import { randomIntFromRange } from "~/common";
import { useMedia } from "react-use";
import { Switch } from "~/components/switch";
import cx from "classnames";

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
  const [mode, cycleMode] = useCycle("nested", "flat");
  const items = useRef(data);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [paused, setPaused] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval>>();

  const isMobile = useMedia("(max-width: 768px)", false);

  useEffect(() => {
    if (!paused && isInView) {
      interval.current = setInterval(() => {
        cycleMode();
      }, 1300);
    }
    return () => clearInterval(interval.current);
  }, [cycleMode, isInView, paused]);

  useEffect(() => {
    const pausedTimer = setTimeout(() => {
      setPaused(false);
    }, 1700);
    return () => clearTimeout(pausedTimer);
  }, [paused]);

  const changeMode = () => {
    cycleMode();
    setPaused(true);
  };

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

  const getAreas = () => {
    switch (mode) {
      case "nested":
        if (isMobile) {
          return `
            "first"
            "firstAlbum"
            "firstSong"
            "second"
            "secondAlbum"
            "secondSong"
            "third"
            "thirdAlbum"
            "thirdSong"
          `;
        }
        return `
          "first second third"
          "firstAlbum secondAlbum thirdAlbum"
          "firstSong  secondSong thirdSong"
        `;

      default:
        if (isMobile) {
          return `
          "firstAlbum thirdSong "
          "thirdAlbum secondSong"
          "second  secondAlbum"
        `;
        }
        return `
          "firstAlbum thirdSong first "
          "thirdAlbum secondSong firstSong"
          "second  secondAlbum third"
        `;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 place-items-center  mb-16 z-10 relative z-10 justify-center max-w-sm m-auto">
        <p
          className={cx(
            "justify-self-end",
            "font-medium text-content-secondary-dark tracking-tight ",
            "text-base",
          )}
        >
          Flat
        </p>
        <Switch onChange={() => changeMode()} checked={mode === "nested"} />
        <p
          className={cx(
            "justify-self-start",
            "font-medium text-content-secondary-dark tracking-tight ",
            "text-base",
          )}
        >
          Nested
        </p>
      </div>
      <motion.div
        ref={ref}
        layout
        animate
        className={cx(
          "relative z-10 content-start w-full gap-8 min-h-[600px] ",
          "md:gap-4",
          "sm:gap-2 sm:place-content-center sm:content-start sm:min-h-[370px]",
        )}
        style={{
          display: mode === "nested" ? "grid" : "flex",
          flexWrap: mode === "nested" ? "nowrap" : "wrap",
          justifyContent: "center",
          gridTemplateAreas: getAreas(),
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
                justifySelf: "center",
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
    </div>
  );
};
