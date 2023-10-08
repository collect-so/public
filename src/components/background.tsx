import { FC, MutableRefObject, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import cx from "classnames";
import { GridShaft } from "~/components/grid-shaft";

const initialScale = 1.25;

export const Background: FC<{
  target: MutableRefObject<HTMLElement>;
  targetHeight: number;
}> = ({ targetHeight: sectionHeight, target }) => {
  const { scrollYProgress } = useScroll({
    target,
    layoutEffect: true,
  });

  const ref = useRef<SVGSVGElement>(null);
  const gridHeight =
    (ref.current?.getBoundingClientRect().height ?? 0) / initialScale;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      sectionHeight >= gridHeight
        ? sectionHeight - gridHeight
        : -(gridHeight - sectionHeight),
    ],
  );

  const scale = useTransform(scrollYProgress, [0, 0.1], [1.3, 1]);

  // const top = useSpring(y, {
  //   stiffness: 40,
  //   damping: 20,
  // });

  return (
    <motion.div
      style={{ top: y }}
      initial={{
        scale: initialScale,
      }}
      whileInView={{
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
        },
      }}
      className={cx("absolute z-0 ")}
    >
      <GridShaft color={"#0e0e0e"} ref={ref} />
    </motion.div>
  );
};
