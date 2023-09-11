import { ColoredChip, ColoredChipColor } from "~/components/colored-chip";
import { useEffect, useRef, useState } from "react";
import { useCycle, motion, useInView } from "framer-motion";
import { randomIntFromRange } from "~/common";
import { useMedia } from "react-use";
import { Switch } from "~/components/switch";
import cx from "classnames";
import { FeatureContainer } from "~/components/feature-container";

const data = [
  { name: "The Wall", area: "firstAlbum", rotation: randomIntFromRange(-5, 5) },
  { name: "Beautiful", area: "thirdSong", rotation: randomIntFromRange(-5, 5) },
  { name: "Pink Floyd", area: "first", rotation: randomIntFromRange(-5, 5) },
  { name: "Relapse", area: "thirdAlbum", rotation: randomIntFromRange(-5, 5) },
  { name: "Iron Man", area: "secondSong", rotation: randomIntFromRange(-5, 5) },
  { name: "Hey You", area: "firstSong", rotation: randomIntFromRange(-5, 5) },
  {
    name: "Black Sabbath",
    area: "second",
    rotation: randomIntFromRange(-5, 5),
  },
  {
    name: "Paranoid",
    area: "secondAlbum",
    rotation: randomIntFromRange(-5, 5),
  },
  { name: "Eminem", area: "third", rotation: randomIntFromRange(-5, 5) },
];

export const FlatAndNestedData = () => {
  const [mode, cycleMode] = useCycle("nested", "flat");
  const items = useRef(data);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [paused, setPaused] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval>>();

  const isMobile = useMedia("(max-width: 984px)", false);

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
          "first firstAlbum firstSong"
          "second secondAlbum secondSong"
          "third thirdAlbum thirdSong"
        `;
    }
  };

  return (
    <FeatureContainer>
      <div className={cx("z-10")}>
        <div className={cx("feature-tag")}>Feature</div>

        <h2 className={cx("typography-3xl mb-4")}>Data nesting</h2>
        <p className="typography-base max-w-2xl ">
          Simply store any data the way you think about it. Each Record could be
          a parent for the others whilst every level is still distinctively
          accessible.
          {/*Give more sense to your data with natively nested storage.*/}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 place-items-center  mb-16 z-10 relative z-10 justify-center max-w-sm m-auto">
          <p
            className={cx(
              "justify-self-end",
              "font-medium text-content-secondary-dark tracking-tight ",
              "text-base",
            )}
          >
            Classic
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
            "relative z-10 content-start w-full gap-8 ",
            "md:gap-4",
            "sm:gap-2 sm:place-content-center sm:content-start ",
            {
              "min-h-[570px] sm:min-h-[370px]": isMobile,
              "min-h-[220px]": !isMobile,
            },
          )}
          style={{
            display: mode === "nested" ? "grid" : "grid",
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
                  rotate: mode === "nested" ? 0 : item.rotation,
                }}
                transition={{ type: "spring", stiffness: 100, mass: 0.5 }}
              >
                {item.name}
              </ColoredChip>
            );
          })}
        </motion.div>
      </div>
    </FeatureContainer>
  );
};
